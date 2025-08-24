# Portfolio Website - Harkanwalpreet Singh

A modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Contentlayer.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Content Management**: Type-safe content with Contentlayer and MDX
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Accessibility**: WCAG 2.1 compliant design
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: System-aware dark/light theme toggle
- **SEO**: Comprehensive SEO with structured data
- **Type Safety**: Full TypeScript coverage with strict mode

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer + MDX
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (GitHub Actions)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏃‍♂️ Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/HarkanwalPSingh/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Development server runs at: http://localhost:3000
```

### Building

```bash
# Build for production
npm run build

# Start production server locally
npm start
```

### Content Management

Content is managed through Contentlayer with MDX support:

- **Blog posts**: `content/blog/*.mdx`
- **Projects**: `content/projects/*.mdx` 
- **Pages**: `content/pages/*.mdx`

Content is type-safe and automatically validated during build.

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

**Live Site**: [harkanwalpsingh.github.io/portfolio-website](https://harkanwalpsingh.github.io/portfolio-website)

### Manual Deployment

```bash
# Build and deploy manually
npm run build
npm run deploy
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utilities and configurations
│   └── hooks/              # Custom React hooks
├── content/                # Content files (MDX)
│   ├── blog/              # Blog posts
│   ├── projects/          # Project descriptions  
│   └── pages/             # Static pages
├── public/                # Static assets
└── .contentlayer/         # Generated content types
```

## 🎨 Customization

### Theme

The website uses a custom theme with CSS variables defined in `src/app/globals.css`. Colors and design tokens can be customized in `tailwind.config.ts`.

### Content

All content is written in MDX format with frontmatter for metadata. See existing content files for examples.

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Harkanwalpreet Singh**
- Email: [harkanwal.p.singh@gmail.com](mailto:harkanwal.p.singh@gmail.com)
- LinkedIn: [linkedin.com/in/harkanwalpsingh](https://www.linkedin.com/in/harkanwalpsingh/)
- GitHub: [github.com/HarkanwalPSingh](https://github.com/HarkanwalPSingh)

---

*Built with ❤️ using Next.js 15 and modern web technologies*