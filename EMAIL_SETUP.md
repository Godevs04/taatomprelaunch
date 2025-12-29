# Email Setup Guide for Taatom

This guide explains how to configure email functionality for the Taatom prelaunch website.

## Gmail Setup (Recommended)

### Step 1: Enable 2-Step Verification

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. This is required to generate App Passwords

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device and enter "Taatom Website"
4. Click **Generate**
5. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Configure Environment Variables

Create or update your `.env.local` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
CONTACT_EMAIL=contact@taatom.com  # Optional: Where to send contact form submissions
```

**Important Notes:**
- Use your full Gmail address for `EMAIL_USER`
- Use the **16-character App Password** (you can remove spaces) for `EMAIL_PASS`
- Do NOT use your regular Gmail password
- Do NOT commit `.env.local` to version control

### Step 4: Verify Configuration

After setting up, restart your development server. You should see one of these messages:

- ✅ `Email server connection verified successfully` - Configuration is correct
- ❌ `Email server connection failed` - Check your credentials

## Troubleshooting

### Error: "535-5.7.8 Username and Password not accepted"

**Possible causes:**
1. **Using regular password instead of App Password**
   - Solution: Generate and use an App Password as described above

2. **2-Step Verification not enabled**
   - Solution: Enable 2-Step Verification first, then generate App Password

3. **App Password has spaces or incorrect format**
   - Solution: Remove spaces from the App Password (e.g., `abcdefghijklmnop`)

4. **Environment variables not loaded**
   - Solution: Make sure `.env.local` is in the root directory
   - Restart your development server after changing `.env.local`

5. **Wrong email address**
   - Solution: Make sure `EMAIL_USER` matches the Gmail account where you generated the App Password

### Error: "Connection timeout"

**Possible causes:**
1. **Firewall blocking SMTP**
   - Solution: Allow connections to `smtp.gmail.com:587`

2. **Network restrictions**
   - Solution: Check if your network allows SMTP connections

### Testing Email Configuration

You can test the email configuration by:

1. Submitting the contact form on `/contact`
2. Checking the server logs for email status
3. Verifying you receive the email (or check logs if email fails)

## Alternative Email Providers

### Using Other SMTP Providers

If you're not using Gmail, you can modify `lib/mailer.ts`:

```typescript
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

Then update `.env.local`:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
```

## Production Deployment

For production:

1. Set environment variables in your hosting platform (Vercel, AWS, etc.)
2. Never hardcode credentials in your code
3. Use secrets management for sensitive data
4. Verify email configuration after deployment

## Security Best Practices

- ✅ Use App Passwords, not regular passwords
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Rotate App Passwords regularly
- ✅ Use different App Passwords for development and production
- ✅ Monitor email sending for unusual activity

## Need Help?

If you're still experiencing issues:

1. Check the server logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first before production use
4. Contact support if the issue persists

