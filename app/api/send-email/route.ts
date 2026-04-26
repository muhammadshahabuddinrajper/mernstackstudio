import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    console.log('--- Email Sending Debug ---');
    console.log('Loaded EMAIL_USER:', process.env.EMAIL_USER);
    console.log('Loaded EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'MISSING');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter to catch 535 errors clearly
    try {
      await transporter.verify();
      console.log('Transporter verified successfully.');
    } catch (verifyError) {
      console.error('Transporter Verification Failed:', verifyError);
      throw verifyError; // Throw so the outer catch block catches it and returns to client
    }

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'mernstackstudio.pk@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to send email.' }, { status: 500 });
  }
}
