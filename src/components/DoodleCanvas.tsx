import { useEffect, useRef } from 'react';

interface DoodleCanvasProps {
  activeType: 'neural' | 'api' | 'crypto' | 'database' | null;
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse?: number;
  label?: string;
}

export default function DoodleCanvas({ activeType }: DoodleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Transition opacity to smoothly fade in/out different illustrations
  const opacityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle resizing
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Initialize custom variables for nodes/paths
    let points: Point[] = [];
    let connections: [number, number][] = [];
    let particles: { x: number; y: number; progress: number; speed: number; connIndex: number }[] = [];
    let gridOffset = 0;

    // Build neural net structure
    const generateNeuralNet = (w: number, h: number) => {
      points = [];
      connections = [];
      particles = [];

      // Create layers: Inputs, Hidden 1, Hidden 2, Outputs with absolute layout within canvas mid
      const layers = [3, 4, 4, 2];
      const layerSpacing = w / 5;
      const startX = (w - layerSpacing * (layers.length - 1)) / 2;

      let pointIdx = 0;
      const layerNodesIdx: number[][] = [];

      for (let l = 0; l < layers.length; l++) {
        const numNodes = layers[l];
        const x = startX + l * layerSpacing;
        const totalHeight = (numNodes - 1) * 80;
        const startY = (h - totalHeight) / 2;

        const currentLayerIdx: number[] = [];
        for (let n = 0; n < numNodes; n++) {
          const y = startY + n * 80;
          points.push({
            x,
            y,
            vx: 0,
            vy: 0,
            radius: n === 0 || n === numNodes - 1 ? 5 : 4,
            pulse: Math.random() * Math.PI,
            label: l === 0 ? `Input X${n}` : l === layers.length - 1 ? `Output Y${n}` : `N_${l}_${n}`
          });
          currentLayerIdx.push(pointIdx);
          pointIdx++;
        }
        layerNodesIdx.push(currentLayerIdx);
      }

      // Connect layers
      for (let l = 0; l < layers.length - 1; l++) {
        const fromNodes = layerNodesIdx[l];
        const toNodes = layerNodesIdx[l + 1];

        fromNodes.forEach((fromIdx) => {
          toNodes.forEach((toIdx) => {
            connections.push([fromIdx, toIdx]);
          });
        });
      }

      // Add active signal particles flowing between connections
      for (let p = 0; p < 8; p++) {
        particles.push({
          x: 0,
          y: 0,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.008,
          connIndex: Math.floor(Math.random() * connections.length)
        });
      }
    };

    // Build blockchain/cryptography nodes
    const generateCryptoGrid = (w: number, h: number) => {
      points = [];
      connections = [];
      particles = [];

      // Ring nodes representing ledger blocks
      const center = { x: w / 2, y: h / 2 };
      const numBlocks = 6;
      const radius = h > w ? w * 0.35 : h * 0.35;

      for (let i = 0; i < numBlocks; i++) {
        const angle = (i * Math.PI * 2) / numBlocks;
        const x = center.x + Math.cos(angle) * radius;
        const y = center.y + Math.sin(angle) * radius;
        
        points.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.2, // very slow drift
          vy: (Math.random() - 0.5) * 0.2,
          radius: 8,
          pulse: i,
          label: `BLOCK #${15200 + i}`
        });
      }

      // Chain connections
      for (let i = 0; i < numBlocks; i++) {
        connections.push([i, (i + 1) % numBlocks]);
        // secure cross connection
        if (i < numBlocks / 2) {
          connections.push([i, (i + 3) % numBlocks]);
        }
      }

      // Chain animation particles
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: 0,
          y: 0,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.003,
          connIndex: Math.floor(Math.random() * connections.length)
        });
      }
    };

    // API endpoints and routes
    const generateAPIEndpoints = (w: number, h: number) => {
      points = [];
      connections = [];
      particles = [];

      // Flow architecture: User Device (left) -> Gateway/API Router (middle) -> Microservices/Database (right)
      const userY = h / 2;
      points.push({ x: w * 0.15, y: userY, vx: 0, vy: 0, radius: 8, label: "Client" }); // 0

      // Gateway
      points.push({ x: w * 0.45, y: h / 2, vx: 0, vy: 0, radius: 10, label: "API Gateway" }); // 1

      // Microservices / Models / Handlers
      points.push({ x: w * 0.75, y: h * 0.25, vx: 0, vy: 0, radius: 6, label: "Auth API" }); // 2
      points.push({ x: w * 0.75, y: h * 0.5, vx: 0, vy: 0, radius: 6, label: "Sense AI Router" }); // 3
      points.push({ x: w * 0.75, y: h * 0.75, vx: 0, vy: 0, radius: 6, label: "PQC Engine" }); // 4

      // DB
      points.push({ x: w * 0.88, y: h / 2, vx: 0, vy: 0, radius: 10, label: "DB Node (50k+ Recs)" }); // 5

      connections.push([0, 1]); // Client to Gateway
      connections.push([1, 2]); // Gateway to Auth
      connections.push([1, 3]); // Gateway to Sense AI
      connections.push([1, 4]); // Gateway to PQC
      connections.push([2, 5]); // Auth to DB
      connections.push([3, 5]); // AI to DB
      connections.push([4, 5]); // PQC to DB

      // Request/Response flow packets
      const labels = ["GET /api/health", "POST /api/predict", "Falcon SecKey", "HTTP/3 Response", "JSON Frame"];
      for (let i = 0; i < 6; i++) {
        particles.push({
          x: 0,
          y: 0,
          progress: Math.random(),
          speed: 0.004 + Math.random() * 0.006,
          connIndex: Math.floor(Math.random() * connections.length)
        });
      }
    };

    // Database structure / vectors d3-style space
    const generateDatabaseSpace = (w: number, h: number) => {
      points = [];
      connections = [];
      particles = [];

      // Render hierarchical database table schemas or clustering for AI Vector database
      // 3 schemas and a cluster of vector points
      for (let i = 0; i < 15; i++) {
        // Clustering vectors in small groups
        const cluster = i % 3;
        const cx = w * (0.3 + cluster * 0.2);
        const cy = h * (0.35 + Math.sin(cluster) * 0.15);
        points.push({
          x: cx + (Math.random() - 0.5) * 80,
          y: cy + (Math.random() - 0.5) * 80,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 3,
          label: i === 0 ? "POSTGRESQL" : i === 5 ? "MONGODB" : i === 10 ? "VECTOR SHARD" : undefined
        });
      }

      // Link nearby points to form mesh
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            connections.push([i, j]);
          }
        }
      }
    };

    // Re-initialize lists based on the activeType
    const initStructures = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (activeType === 'neural') {
        generateNeuralNet(w, h);
      } else if (activeType === 'crypto') {
        generateCryptoGrid(w, h);
      } else if (activeType === 'api') {
        generateAPIEndpoints(w, h);
      } else if (activeType === 'database') {
        generateDatabaseSpace(w, h);
      } else {
        points = [];
        connections = [];
        particles = [];
      }
    };

    initStructures();

    // Reset components if type changes
    opacityRef.current = 0; // Trigger fade-in

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle opacity transitions
      if (activeType) {
        if (opacityRef.current < 0.25) {
          opacityRef.current += 0.015; // fade in up to low opacity background
        }
      } else {
        if (opacityRef.current > 0) {
          opacityRef.current -= 0.015; // fade out
        }
      }

      if (opacityRef.current <= 0) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      const opacity = opacityRef.current;
      const themeColor = 
        activeType === 'neural' ? 'rgba(34, 211, 238,' : // Cyan
        activeType === 'api' ? 'rgba(16, 185, 129,' : // Emerald
        activeType === 'crypto' ? 'rgba(168, 85, 247,' : // Purple/Violet
        'rgba(236, 72, 153,'; // Database - Pink/Magenta

      // Render visual pathways/connections
      ctx.lineWidth = 1;
      connections.forEach(([p1, p2]) => {
        const node1 = points[p1];
        const node2 = points[p2];
        if (!node1 || !node2) return;

        ctx.strokeStyle = `${themeColor}${opacity * 0.45})`;
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      });

      // Render flying active packets/signal particles
      particles.forEach((part) => {
        const conn = connections[part.connIndex];
        if (!conn) return;
        const nodeStart = points[conn[0]];
        const nodeEnd = points[conn[1]];
        if (!nodeStart || !nodeEnd) return;

        // Linear interpolation
        part.progress += part.speed;
        if (part.progress >= 1) {
          part.progress = 0;
          // select a new connection branching from nodeEnd optionally
          const nextConns = connections.reduce<number[]>((acc, c, idx) => {
            if (c[0] === conn[1]) acc.push(idx);
            return acc;
          }, []);
          if (nextConns.length > 0) {
            part.connIndex = nextConns[Math.floor(Math.random() * nextConns.length)];
          } else {
            part.connIndex = Math.floor(Math.random() * connections.length);
          }
        }

        const px = nodeStart.x + (nodeEnd.x - nodeStart.x) * part.progress;
        const py = nodeStart.y + (nodeEnd.y - nodeStart.y) * part.progress;

        ctx.fillStyle = `${themeColor}${opacity * 1.5})`;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();

        // Canvas node bloom
        ctx.shadowColor = activeType === 'neural' ? '#22d3ee' : activeType === 'crypto' ? '#a855f7' : '#10b981';
        ctx.shadowBlur = 6;
        ctx.fillStyle = `${themeColor}${opacity * 2.0})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Render physical nodes
      points.forEach((node, idx) => {
        // Slow drifting movement
        if (node.vx !== 0 || node.vy !== 0) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bouncing
          if (node.x < 50 || node.x > canvas.width - 50) node.vx *= -1;
          if (node.y < 50 || node.y > canvas.height - 50) node.vy *= -1;
        }

        const pulseScale = node.pulse ? Math.sin(Date.now() * 0.002 + node.pulse) * 2 : 0;
        
        // Node outer ring
        ctx.strokeStyle = `${themeColor}${opacity * 0.6})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4 + pulseScale, 0, Math.PI * 2);
        ctx.stroke();

        // Node center core
        ctx.fillStyle = `${themeColor}${opacity * 1.5})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw elegant label text in JetBrains Mono
        if (node.label) {
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(156, 163, 175, ${opacity * 2.5})`;
          ctx.fillText(node.label, node.x + node.radius + 8, node.y + 3);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [activeType]);

  return (
    <canvas
      id="doodle-skills-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-700 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
