
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(req: any) {

    const response = await req.json()

    const to = response.email
    const subject = `${response.name}`
    const text = `
    Name: ${response.name}
    Business Name: ${response.business_name}
    Email: ${response.email}
    Phone Number: ${response.phone_number}
    Message: ${response.message}
    `
    const html = `
    <h1>Name: ${response.name}</h1>
    <h1>Business Name: ${response.business_name}</h1>
    <h1>Email: ${response.email}</h1>
    <h1>Phone Number: ${response.phone_number}</h1>
    <h1>Message: ${response.message}</h1>
    `

    // const { to, subject, text, html } = await req.json();  // Get the email data from the body
    try {
        // Create a transporter using your SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,  // e.g., 'smtp.yourdomain.com'
            port: process.env.SMTP_PORT,  // e.g., 587 for TLS
            secure: process.env.SMTP_PORT === '465',  // true for SSL
            auth: {
                user: process.env.SMTP_USER,  // Your email address
                pass: process.env.SMTP_PASS,  // Your email password or app-specific password
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"Your Company" <${process.env.SMTP_USER}>`,  // sender address
            to: "deepakvish7354@gmail.com",  // recipient address
            subject: "apple",  // email subject
            text: "text",  // plain text body
            html: "html",  // HTML body
        });

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
        });
    }
}

export async function GET(req: any) {
    return new Response(JSON.stringify({ message: 'This is a GET request' }), {
        status: 200,
    });
}

