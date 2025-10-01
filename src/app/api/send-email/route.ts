
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(req: any) {

    const response = await req.json()

    const to = 'info@ledgerdatasolutions.com'  // Send to Deepak's email
    const subject = `New Contact Form Submission from ${response.name} - ${response.business_name}`
    const text = `
New Contact Form Submission - Action Required

You have received a new contact form submission from your website:

Name: ${response.name}
Business Name: ${response.business_name}
Email: ${response.email}
Phone Number: ${response.phone_number}

Message:
${response.message}

---
Please respond to this inquiry promptly.
This message was sent from the Ledger Data Solutions contact form.
    `
    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2f5653; border-bottom: 2px solid #2f5653; padding-bottom: 10px;">New Contact Form Submission - Action Required</h2>
        
        <p style="color: #666; margin-bottom: 20px;">You have received a new contact form submission from your website:</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${response.name}</p>
            <p><strong>Business Name:</strong> ${response.business_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${response.email}" style="color: #2f5653;">${response.email}</a></p>
            <p><strong>Phone Number:</strong> <a href="tel:${response.phone_number}" style="color: #2f5653;">${response.phone_number}</a></p>
        </div>
        
        <div style="margin: 20px 0;">
            <h3 style="color: #2f5653;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #2f5653; margin: 10px 0;">${response.message}</p>
        </div>
        
        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #2f5653; font-weight: bold; margin: 0;">📧 Please respond to this inquiry promptly.</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">This message was sent from the Ledger Data Solutions contact form.</p>
    </div>
    `

    // const { to, subject, text, html } = await req.json();  // Get the email data from the body
    try {
        // Create a transporter using your SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'mail.ledgerdatasolutions.com',  // SMTP server
            port: 465,  // SMTP port for SSL
            secure: true,  // Use SSL
            auth: {
                user: 'noreply@ledgerdatasolutions.com',  // Email address
                pass: '6(?61d34@kz%',  // Email password
            },
        });

        // Send the email
        await transporter.sendMail({
            from: 'noreply@ledgerdatasolutions.com',
            to,
            subject,
            text,
            html,
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

