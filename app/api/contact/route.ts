import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

export async function POST(request: NextRequest) {
  let parsedBody: any = null;
  
  try {
    let body;
    try {
      body = await request.json();
      parsedBody = body; // Store for error logging
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

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

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing: EMAIL_USER or EMAIL_PASS not set");
      // Still return success to user, but log the submission
      console.log("Contact form submission (email not configured):", {
        name: escapeHtml(name),
        email: escapeHtml(email),
        subject: escapeHtml(subject),
        message: escapeHtml(message),
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been received. We'll get back to you soon!",
        },
        { status: 200 }
      );
    }

    // Send email to contact owner
    const ownerEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER || "contact@taatom.com";
    
    // Escape user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `Contact Form: ${safeSubject}`,
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
                              <span style="color: #555;">${safeName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <strong style="color: #333; display: inline-block; width: 120px;">Email:</strong>
                              <a href="mailto:${safeEmail}" style="color: #667eea; text-decoration: none;">${safeEmail}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <strong style="color: #333; display: inline-block; width: 120px;">Subject:</strong>
                              <span style="color: #555;">${safeSubject}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message -->
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                        <h3 style="color: #333; font-size: 20px; margin: 0 0 15px 0; font-weight: 700;">Message:</h3>
                        <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
                      </div>
                      
                      <!-- Reply Button -->
                      <div style="text-align: center;">
                        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" 
                           style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 40px; border-radius: 12px; text-decoration: none; display: inline-block; font-weight: 700; font-size: 16px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);">
                          Reply to ${safeName}
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

    // Send email with better error handling
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError: any) {
      // Log the submission even if email fails
      console.log("Contact form submission (email failed):", {
        name: safeName,
        email: safeEmail,
        subject: safeSubject,
        message: safeMessage,
        timestamp: new Date().toISOString(),
        emailError: emailError.code || emailError.message
      });
      
      // If it's an authentication error, return a helpful message
      if (emailError.code === 'EAUTH') {
        console.error("Email authentication failed. Please check EMAIL_USER and EMAIL_PASS environment variables.");
        // Still return success to user, but log for admin
        return NextResponse.json(
          {
            success: true,
            message: "Your message has been received. We'll get back to you soon!",
          },
          { status: 200 }
        );
      }
      
      // For other email errors, throw to be caught by outer catch
      throw emailError;
    }

    // Optionally send auto-reply to user (non-blocking)
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
                        Hi ${safeName},
                      </p>
                      <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                        Thank you for contacting Taatom! We've successfully received your message regarding "${safeSubject}".
                      </p>
                      <p style="color: #555; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                        Our team will review your message and get back to you as soon as possible, typically within 24-48 hours.
                      </p>
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 30px 0;">
                        <p style="color: #667eea; font-weight: 700; margin: 0 0 10px 0;">Your Message:</p>
                        <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage.substring(0, 200)}${safeMessage.length > 200 ? '...' : ''}</p>
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

    // Send auto-reply (non-blocking, don't wait for it)
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
    // Log the error details for debugging (but don't expose to user)
    console.error("Contact form error:", {
      code: error.code,
      message: error.message,
      responseCode: error.responseCode,
      command: error.command
    });
    
    // Still log the submission so it's not lost (if we have the parsed body)
    if (parsedBody) {
      console.log("Contact form submission (error occurred):", {
        name: parsedBody.name ? escapeHtml(parsedBody.name) : 'N/A',
        email: parsedBody.email ? escapeHtml(parsedBody.email) : 'N/A',
        subject: parsedBody.subject ? escapeHtml(parsedBody.subject) : 'N/A',
        message: parsedBody.message ? escapeHtml(parsedBody.message.substring(0, 200)) : 'N/A',
        timestamp: new Date().toISOString()
      });
    }
    
    // Return a user-friendly error message
    return NextResponse.json(
      { error: "We're having trouble sending your message right now. Please try again later or email us directly at contact@taatom.com" },
      { status: 500 }
    );
  }
}

