# Hyperf.dev - Independent Community Website

> ⚠️ **Important Notice**: This is an **independent community website** from the Western part of the globe. We are **NOT** official members of the Hyperf core team and have no formal affiliation with the official Hyperf project. Hyperf is a **Chinese project** created and maintained by the Chinese developer community. The official website is [hyperf.wiki](https://hyperf.wiki).

A modern, responsive community website for the Hyperf PHP framework built with Nuxt.js and Tailwind CSS, featuring a sleek black theme design.

## 🌟 Features

- **Dark Theme Design**: Professional black theme with yellow/orange accents
- **Independence Disclaimer**: Clear communication about unofficial status
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Focused**: Built with Nuxt.js for optimal performance and SEO
- **Blog System**: Built-in blog with sample posts about Hyperf
- **Community Links**: Direct links to Discord community and official documentation
- **SEO Optimized**: Proper meta tags and structured data

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (recommended: 20.x LTS)
- **npm**: Version 9.x or higher (comes with Node.js)

### Checking Your Versions

```bash
node --version    # Should be 18.x+ (recommended: 20.x+)
npm --version     # Should be 9.x+
```

### Installing Node.js

If you need to install or update Node.js:

- **Official installer**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version
- **Using nvm** (recommended for development):
  ```bash
  # Install nvm (Node Version Manager)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

  # Install and use the latest LTS version
  nvm install --lts
  nvm use --lts
  ```

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 4.1.2
- **Runtime**: Node.js 18+ / 20+ (LTS recommended)
- **Package Manager**: npm 9+
- **Styling**: Tailwind CSS 6.14.0
- **Frontend**: Vue.js 3.5.21
- **Language**: JavaScript/TypeScript support
- **Deployment**: Static site generation ready

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hyperf.dev.git
   cd hyperf.dev
   ```

2. **Verify Node.js version**
   ```bash
   node --version  # Ensure 18.x+ (recommended: 20.x+)
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Generate static files**
   ```bash
   npm run generate
   ```

## 🌐 Website Structure

- **Homepage** (`/`) - Hero section with independence disclaimer, features, use cases, and call-to-action
- **Blog** (`/blog`) - Blog listing with sample posts about Hyperf
- **Individual Posts** (`/blog/[slug]`) - Detailed blog posts about Hyperf features and tutorials

## 🎨 Design Features

- **Dark Theme**: Professional black theme with yellow/orange accents
- **Independence Disclaimer**: Prominent notice about unofficial community status
- **Typography**: Clean, readable fonts with proper hierarchy optimized for dark backgrounds
- **Components**: Reusable header, footer, and layout components
- **Icons**: SVG icons for social media and features with appropriate contrast
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: High contrast colors for excellent readability

## 📝 Content Overview

This community website includes comprehensive content about:

- **Independence Notice**: Clear communication about unofficial status
- **Hyperf Framework**: Introduction and benefits of the Chinese PHP framework
- **Performance Insights**: Comparisons with traditional PHP frameworks
- **Getting Started**: Community tutorials and guides
- **Resource Links**: Direct links to official Chinese documentation and community
- **Technical Content**: Deep-dives into coroutines and architecture

## 🔗 Important Links

### Official Hyperf Resources (Chinese)
- **Official Website**: https://hyperf.wiki
- **Official Documentation**: https://hyperf.wiki/3.1/#/en/
- **Official GitHub**: https://github.com/hyperf/hyperf

### Community Resources
- **Discord Community**: https://discord.gg/hPQSAPknfp
- **Community Discussions**: GitHub Issues and Discussions

## 🚀 Deployment Options

The site is built as a static site and can be deployed to:

- **Netlify**: Zero-config deployment with automatic builds
- **Vercel**: Optimized for Nuxt.js applications
- **GitHub Pages**: Free hosting for open source projects
- **Cloudflare Pages**: Fast global CDN deployment
- **Any static hosting provider**

### Deployment Commands

```bash
# Build for production
npm run build

# Generate static files
npm run generate

# Preview production build locally
npm run preview
```

## 📱 Mobile Responsive Design

The design is fully responsive and includes:

- **Mobile-first approach**: Optimized for mobile devices first
- **Collapsible navigation**: Clean mobile menu with hamburger toggle
- **Optimized layouts**: Content adapts seamlessly across screen sizes
- **Touch-friendly elements**: Interactive components designed for touch
- **Dark theme consistency**: Maintains design integrity across all devices

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run generate` - Generate static files for deployment
- `npm run preview` - Preview the production build locally
- `npm run postinstall` - Prepare Nuxt.js (runs automatically after install)

### Project Structure

```
hyperf.dev/
├── app/
│   ├── components/          # Reusable Vue components
│   │   ├── TheHeader.vue   # Navigation header with dark theme
│   │   └── TheFooter.vue   # Footer with links and branding
│   ├── layouts/            # Layout templates
│   │   └── default.vue     # Main layout with dark background
│   ├── pages/              # Route pages
│   │   ├── index.vue       # Homepage with disclaimer
│   │   └── blog/           # Blog pages
│   └── app.vue             # Root application component
├── public/                 # Static assets
├── nuxt.config.ts         # Nuxt.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## ⚠️ Important Disclaimers

### Independence Notice
This website is created and maintained by an **independent community** in the Western part of the globe. We have **no official affiliation** with:
- The Hyperf core development team
- The official Hyperf project maintainers
- The Chinese Hyperf community

### Official Resources
For official support, updates, and authoritative information:
- Visit the **official website**: [hyperf.wiki](https://hyperf.wiki)
- Check the **official GitHub**: [github.com/hyperf/hyperf](https://github.com/hyperf/hyperf)
- Follow official Chinese community channels

## 🤝 Contributing

Contributions to this **community website** are welcome! Please feel free to:

- Submit issues for bugs or improvements
- Create pull requests for new features or content
- Suggest design enhancements
- Share feedback on user experience
- Contribute blog posts or tutorials

### Contribution Guidelines

1. **Respect the independence status**: Maintain clear communication about unofficial nature
2. **Follow the dark theme**: Ensure consistency with the black theme design
3. **Maintain quality**: Write clear, helpful content for the community
4. **Test responsiveness**: Verify changes work across devices

## 📄 License

This community project is open source and available under the **MIT License**.

---

**Disclaimer**: This is an independent community resource and is not officially endorsed by or affiliated with the Hyperf project or its maintainers.
