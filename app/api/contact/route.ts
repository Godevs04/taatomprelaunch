import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // Send email to contact owner
    const ownerEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER || "contact@taatom.com";
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                      <div style="font-size: 48px; margin-bottom: 10px;">📧</div>
                      <h1 style="color: white; font-size: 32px; margin: 0; font-weight: 800;">New Contact Form Submission</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <div style="background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-left: 4px solid #667eea; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                        <h2 style="color: #667eea; font-size: 24px; margin: 0 0 20px 0; font-weight: 700;">Contact Information</h2>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <strong style="color: #333; display: inline-block; width: 120px;">Name:</strong>
                              <span style="color: #555;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <strong style="color: #333; display: inline-block; width: 120px;">Email:</strong>
                              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <strong style="color: #333; display: inline-block; width: 120px;">Subject:</strong>
                              <span style="color: #555;">${subject}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message -->
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                        <h3 style="color: #333; font-size: 20px; margin: 0 0 15px 0; font-weight: 700;">Message:</h3>
                        <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
                      </div>
                      
                      <!-- Reply Button -->
                      <div style="text-align: center;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 40px; border-radius: 12px; text-decoration: none; display: inline-block; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);">
                          Reply to ${name}
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 2px solid #e9ecef;">
                      <p style="color: #667eea; font-size: 20px; font-weight: 800; margin: 0 0 10px 0;">Taatom</p>
                      <p style="color: #666; font-size: 14px; margin: 0;">
                        This email was sent from the Taatom contact form.<br>
                        Sent at ${new Date().toLocaleString()}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optionally send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We've received your message - Taatom",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message Received</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
                      <div style="font-size: 48px; margin-bottom: 10px;">✅</div>
                      <h1 style="color: white; font-size: 32px; margin: 0; font-weight: 800;">Message Received!</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <p style="color: #333; font-size: 18px; line-height: 1.8; margin: 0 0 20px 0;">
                        Hi ${name},
                      </p>
                      <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                        Thank you for contacting Taatom! We've successfully received your message regarding "${subject}".
                      </p>
                      <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                        Our team will review your message and get back to you as soon as possible, typically within 24-48 hours.
                      </p>
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 30px 0;">
                        <p style="color: #667eea; font-weight: 700; margin: 0 0 10px 0;">Your Message:</p>
                        <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 2px solid #e9ecef;">
                      <p style="color: #667eea; font-size: 20px; font-weight: 800; margin: 0 0 10px 0;">Taatom</p>
                      <p style="color: #666; font-size: 14px; margin: 0;">
                        Travel Anywhere And Take Only Memories
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send auto-reply (non-blocking)
    transporter.sendMail(autoReplyOptions).catch((err) => {
      console.error("Error sending auto-reply:", err);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

