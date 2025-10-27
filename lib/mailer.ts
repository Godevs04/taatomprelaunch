import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendConfirmationEmail(email: string, name: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Taatom - Your Journey Starts Soon! 🌍",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Taatom</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" style="max-width: 600px; width: 100%; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                <!-- Header with Gradient -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center;">
                    <div style="font-size: 60px; margin-bottom: 20px;">🌍</div>
                    <h1 style="color: white; font-size: 36px; margin: 0; font-weight: 800; letter-spacing: -1px;">Welcome Aboard, ${name}!</h1>
                    <p style="color: rgba(255,255,255,0.95); font-size: 18px; margin-top: 10px; font-weight: 500;">Travel Anywhere And Take Only Memories</p>
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px;">
                    <!-- Success Message -->
                    <div style="background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-left: 4px solid #667eea; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                      <div style="font-size: 40px; margin-bottom: 10px;">🎉</div>
                      <p style="font-size: 18px; line-height: 1.8; color: #333; margin: 0; font-weight: 600;">
                        You're officially part of <span style="color: #667eea; font-weight: 800;">Taatom's early explorer community</span>!
                      </p>
                    </div>
                    
                    <!-- What's Next Section -->
                    <div style="margin-bottom: 30px;">
                      <h2 style="color: #333; font-size: 24px; margin-bottom: 20px; font-weight: 700; display: flex; align-items: center;">
                        <span style="font-size: 30px; margin-right: 10px;">✨</span>
                        What's Next?
                      </h2>
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 25px;">
                        <ul style="color: #555; font-size: 16px; line-height: 2; padding-left: 20px; margin: 0;">
                          <li style="margin-bottom: 12px;">Your account is <strong style="color: #667eea;">created and ready</strong> for launch</li>
                          <li style="margin-bottom: 12px;">We'll <strong style="color: #667eea;">notify you immediately</strong> when we go live</li>
                          <li style="margin-bottom: 12px;">You'll be among the <strong style="color: #667eea;">first explorers</strong> to document journeys</li>
                          <li style="margin-bottom: 0;">Connect with <strong style="color: #667eea;">fellow travelers</strong> worldwide</li>
                        </ul>
                      </div>
                    </div>
                    
                    <!-- Features Grid -->
                    <div style="margin-bottom: 30px;">
                      <h3 style="color: #333; font-size: 20px; margin-bottom: 20px; font-weight: 700;">🚀 Early Access Features</h3>
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="width: 50%; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center; vertical-align: top;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🗺️</div>
                            <p style="font-size: 14px; color: #555; margin: 0; font-weight: 600;">Interactive Maps</p>
                          </td>
                          <td style="width: 50%; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center; vertical-align: top;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📍</div>
                            <p style="font-size: 14px; color: #555; margin: 0; font-weight: 600;">GPS Tracking</p>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding-top: 15px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="width: 33.33%; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center;">
                                  <div style="font-size: 28px; margin-bottom: 5px;">📸</div>
                                  <p style="font-size: 13px; color: #555; margin: 0; font-weight: 600;">Content Share</p>
                                </td>
                                <td style="width: 33.33%; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center;">
                                  <div style="font-size: 28px; margin-bottom: 5px;">👥</div>
                                  <p style="font-size: 13px; color: #555; margin: 0; font-weight: 600;">Community</p>
                                </td>
                                <td style="width: 33.33%; padding: 15px; background: #f8f9fa; border-radius: 10px; text-align: center;">
                                  <div style="font-size: 28px; margin-bottom: 5px;">📊</div>
                                  <p style="font-size: 13px; color: #555; margin: 0; font-weight: 600;">Analytics</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Benefits Banner -->
                    <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffe082 100%); border-left: 5px solid #ffc107; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
                      <p style="color: #856404; font-size: 15px; margin: 0; line-height: 1.7; font-weight: 600;">
                        💎 <strong>Early Access Bonus:</strong> Get priority access to all premium features including advanced travel analytics, exclusive community groups, and personalized journey recommendations!
                      </p>
                    </div>
                    
                    <!-- CTA Button -->
                    <div style="text-align: center; margin-bottom: 30px;">
                      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 18px 40px; display: inline-block; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);">
                        <p style="color: white; font-size: 16px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">Stay Tuned for Launch! 🚀</p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 2px solid #e9ecef;">
                    <p style="color: #667eea; font-size: 24px; font-weight: 800; margin: 0 0 10px 0;">Taatom</p>
                    <p style="color: #666; font-size: 14px; margin: 0 0 20px 0; line-height: 1.6;">
                      Thank you for joining us on this incredible journey!<br>
                      We can't wait to help you document your adventures and connect with explorers worldwide.
                    </p>
                    <div style="border-top: 1px solid #e9ecef; padding-top: 20px;">
                      <p style="color: #999; font-size: 12px; margin: 0;">
                        © 2025 Taatom. All rights reserved. ✈️🌍<br>
                        <span style="color: #bbb;">You're receiving this because you signed up for early access.</span>
                      </p>
                    </div>
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

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}

