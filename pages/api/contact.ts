import type { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    // Handle any non-POST requests
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  const { email, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Email and message are required' });
  }

  try {
    // Initialize Mailgun
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY!,
      domain: process.env.MAILGUN_DOMAIN!,
    });

    const data = {
      from: `${email}`,
      to: process.env.MAILGUN_RECIPIENT!,
      subject: `New message from ${email}`,
      text: message,
    };

    // Send the email
    await mg.messages().send(data);

    return res
      .status(200)
      .json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
}
