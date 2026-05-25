import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

// Load environmental variables safely
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support JSON-encoded request bodies
  app.use(express.json());

  // API Route: Server health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
  });

  // API Route: Secure contact form routing (Option B)
  app.post('/api/contact', async (req: express.Request, res: express.Response) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Payload validation failed: name, email, and message are required fields.' });
      return;
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey || resendKey === 'MY_RESEND_API_KEY') {
      // Graceful local workspace sandbox simulation when secret key is not provided yet
      console.warn('RESEND_API_KEY is missing or unconfigured. Simulating successful mail routing...');
      
      setTimeout(() => {
        res.json({
          success: true,
          message: `[SANDBOX SIMULATION] Message logged successfully! Sender: ${name} (${email}). Note: To enable active live email transmissions, add your RESEND_API_KEY from the Secrets menu in the AI Studio UI.`
        });
      }, 800); // simulate network latency
      return;
    }

    try {
      // Issue a direct fetch to the Resend API endpoint
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`
        },
        body: JSON.stringify({
          from: 'Sushant Portfolio <onboarding@resend.dev>',
          to: 'sushanttiwari8455@gmail.com', // destination email
          subject: subject || `Portfolio Contact: ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
              <h2 style="color: #a855f7; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || 'No Subject Provided'}</p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px; font-style: italic;">
                ${message.replace(/\ng/, '<br>')}
              </div>
              <hr style="border: none; border-top: 1px solid #eaeaea; margin-top: 25px;" />
              <p style="font-size: 11px; color: #888888; text-align: center;">Sent via Sushant Tiwari Professional Portfolio Server</p>
            </div>
          `
        })
      });

      const data = await response.json();

      if (response.ok) {
        res.json({ 
          success: true, 
          message: `Message dispatched successfully! Thank you, ${name}. Sushant has been notified.` 
        });
      } else {
        console.error('Resend API returned error:', data);
        res.status(response.status).json({ 
          error: data.message || 'Resend API rejected translation payload frame.' 
        });
      }
    } catch (err: any) {
      console.error('Failed to dispatch mail via Resend REST:', err);
      res.status(500).json({ error: 'Internal pipeline error: unable to establish tunnel to mail provider.' });
    }
  });

  // Serve static UI elements according to active runtime context
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Serve HTML page router
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server bootstrap success. Listening internally on http://localhost:${PORT}`);
  });
}

startServer();
