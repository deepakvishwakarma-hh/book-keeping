
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Add CORS headers
function addCorsHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

export async function OPTIONS(req: NextRequest) {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
}

export async function POST(req: NextRequest) {
    try {
        const response = await req.json();
        console.log('Received request data:', response);

        // Validate required fields
        if (!response.name || !response.email || !response.message || !response.business_name || !response.phone_number) {
            return addCorsHeaders(NextResponse.json(
                { error: 'Missing required fields: name, business_name, email, phone_number, and message are required' },
                { status: 400 }
            ));
        }

        const to = 'info@ledgerdatasolutioms.com';  // Send to Deepak's email
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

        // Create a transporter using SMTP settings
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
        const emailResult = await transporter.sendMail({
            from: 'noreply@ledgerdatasolutions.com',
            to,
            subject,
            text,
            html,
        });
        console.log('Email sent successfully:', emailResult);

        return addCorsHeaders(NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 }));
    } catch (error) {
        console.error('Error sending email:', error);
        return addCorsHeaders(NextResponse.json({ error: 'Failed to send email' }, { status: 500 }));
    }
}

export async function GET(req: NextRequest) {
    return addCorsHeaders(NextResponse.json({
        message: 'Contact form API endpoint',
        methods: ['POST'],
        description: 'Send contact form data via POST request'
    }, { status: 200 }));
}

