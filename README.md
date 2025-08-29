# Portfolio Prompt Generator

A modern, responsive web application that helps founders and developers generate personalized portfolio website prompts for Lovable. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Form Validation**: Real-time validation with visual feedback
- **Color Scheme Selection**: Pre-defined color schemes with visual swatches
- **Design Style Options**: Multiple design style choices (Minimalist, Maximalist, Bento, etc.)
- **One-Click Copy**: Copy generated prompts to clipboard with visual feedback
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Professional transitions and hover effects
- **Client-Side Only**: No database required, perfect for high-concurrency events

## 🎨 Design

- **Brand Colors**: Navy blue (#1e3a8a) and orange (#f97316) gradient
- **Typography**: Inter font family for modern, professional look
- **Layout**: Clean white card design with subtle shadows and rounded corners
- **Accessibility**: Proper focus states and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Optimized for Vercel with static export
- **Font**: Inter (Google Fonts)

## 📋 Form Fields

### Required Fields
- **Name**: Full name of the person
- **Role**: Professional role/title
- **Bio**: Personal and professional background
- **Skills**: Technical skills and expertise

### Optional Fields
- **Email**: Contact email address
- **LinkedIn**: LinkedIn profile URL

### Selection Options
- **Color Schemes**: Pre-defined options with custom input
- **Design Styles**: Minimalist, Maximalist, Bento, Modern, Classic, Creative

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prompt-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `out` directory, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `out` directory to your web server

## 📱 Usage

1. Fill in the required fields (Name, Role, Bio, Skills)
2. Optionally add contact information (Email, LinkedIn)
3. Select a color scheme and design style
4. Click "Generate Portfolio Prompt"
5. Copy the generated prompt to use with Lovable

## 🎯 Generated Prompt Format

```
Create a modern personal portfolio website for [name], a [role]. Bio: [bio] Skills: [skills]. Contact info: [email/LinkedIn if provided]. Use [color scheme] colors and a [design style] design style.
```

## 🔧 Configuration

### Brand Colors
Update the brand colors in `src/app/globals.css`:
```css
:root {
  --navy-blue: #1e3a8a;
  --orange: #f97316;
}
```

### Color Schemes
Add or modify color schemes in `src/app/page.tsx`:
```typescript
const colorSchemeOptions = [
  { name: 'Navy & Orange', value: 'navy blue and orange', colors: ['#1e3a8a', '#f97316'] },
  // Add more options...
];
```

## 📊 Performance

- **Static Export**: Optimized for fast loading
- **Client-Side Only**: No server-side processing required
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About Prioriwise

Built by Prioriwise for founders and developers to quickly generate portfolio prompts for Lovable.

---

**Perfect for conference events with 200+ concurrent users!** 🎉
