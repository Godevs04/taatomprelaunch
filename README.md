# TeamTaatom Prelaunch Website

A stunning prelaunch landing website for TeamTaatom with countdown timer, signup form, and email confirmation.

## 🚀 Features

- **Countdown Timer**: Dynamic countdown to launch date with beautiful animations
- **Enhanced About Section**: Comprehensive information about TeamTaatom's features and mission
- **Complete Signup Form**: Collects name, email, password, and confirm password
- **Secure Password Storage**: Passwords are hashed using bcryptjs before storage
- **Email Confirmation**: Beautiful HTML email templates sent via Nodemailer
- **MongoDB Integration**: Stores user data ready for migration when app launches
- **Modern UI**: Elegant glassmorphism design with gradient backgrounds
- **Travel-Focused Design**: Beautiful travel-themed UI matching TeamTaatom's brand
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas
- **Email**: Nodemailer (Gmail SMTP)
- **Animations**: Framer Motion

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
MONGO_URL="your_mongodb_connection_string"
DB_NAME="taatompreusers"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
taatom-prelaunch/
├── app/
│   ├── page.tsx                # Landing Page
│   ├── layout.tsx              # Root Layout
│   ├── globals.css            # Global Styles
│   ├── api/
│   │   └── signup/route.ts    # Signup API endpoint
│   └── components/
│       ├── Countdown.tsx       # Countdown timer component
│       ├── SignupForm.tsx     # Signup form component
│       └── AboutSection.tsx   # About section component
├── lib/
│   ├── db.ts                  # MongoDB connection
│   ├── mailer.ts              # Nodemailer configuration
│   └── models/
│       └── PreUser.ts         # User schema
└── package.json
```

## 🎨 Customization

### Change Launch Date

Edit the launch date in `app/components/Countdown.tsx`:
```typescript
const launchDate = new Date("2024-12-31T00:00:00").getTime();
```

### Update Email Template

Modify the email template in `lib/mailer.ts` to customize the confirmation email.

## 🚢 Deployment

### Option 1: Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build Docker image manually
docker build -t taatom-prelaunch .
docker run -p 3000:3000 --env-file .env.local taatom-prelaunch
```

See [DOCKER.md](./DOCKER.md) for detailed Docker setup instructions.

### Option 2: Vercel Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Option 3: Traditional Server Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 License

MIT

