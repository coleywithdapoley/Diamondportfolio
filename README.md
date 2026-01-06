# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **PDF Section**: Display and download professional documents
- **Contact Form**: Ready-to-integrate contact form
- **SEO Optimized**: Built with Next.js for optimal SEO

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update the welcome message
   - Add your social media links
   - Modify the call-to-action buttons

2. **About Section** (`components/About.tsx`):
   - Update the about text
   - Modify the skills array

3. **Projects Section** (`components/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add project images (optional)

4. **Contact Section** (`components/Contact.tsx`):
   - Update the email address
   - Integrate with an email service (see below)

5. **Navigation** (`components/Navigation.tsx`):
   - Update the site title/logo

### Add PDF Files

1. Create a `public/pdfs` folder
2. Add your PDF files to this folder
3. Update the `pdfFiles` array in `components/PDFSection.tsx`

### Integrate Contact Form

The contact form is currently a placeholder. To make it functional:

1. **Option 1: Use an API Route** (Recommended for Next.js)
   - Create `app/api/contact/route.ts`
   - Integrate with an email service (SendGrid, Resend, etc.)

2. **Option 2: Use a Third-Party Service**
   - Formspree
   - EmailJS
   - Netlify Forms

Example API route structure:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  // Send email using your preferred service
  return Response.json({ success: true })
}
```

### Theme Customization

Edit `tailwind.config.ts` to customize:
- Colors (primary, dark theme colors)
- Animations
- Spacing
- Typography

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── PDFSection.tsx      # PDF documents section
│   ├── Projects.tsx        # Projects showcase
│   └── ThemeProvider.tsx   # Theme context provider
├── public/
│   └── pdfs/              # PDF files folder (create this)
└── package.json
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Update the contact information in the components to reflect your details.

---

Made with ❤️ using Next.js

