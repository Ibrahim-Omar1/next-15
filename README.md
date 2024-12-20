# Next.js 15 Project with Shadcn UI and Next-Intl

A modern Next.js 15 application featuring Shadcn UI components and internationalization support.

## Features

- **Next.js 15.1.2** with App Router and TypeScript
- **Shadcn UI** - Beautifully designed components with New York style
- **Next-Intl** - Full internationalization support (English and Arabic)
- **TailwindCSS** - Utility-first CSS framework with custom theming
- **Turbopack** - Enabled for faster development experience
- **Geist Font** - Custom font optimization using next/font

## Tech Stack

### Core

- React 19
- TypeScript 5
- TailwindCSS 3.4
- Next-Intl 3.26
- Lucide React Icons

### Development Tools

- ESLint 9
- PostCSS 8
- Class Variance Authority
- clsx + tailwind-merge for class management

## Project Structure

```
src/
├── app/
│   └── [locale]/              # Internationalized routes
│       ├── layout.tsx         # Root layout with i18n provider
│       ├── page.tsx           # Home page component
│       └── globals.css        # Global styles and Tailwind
├── components/               # UI components (Shadcn)
│   ├── ui/                   # Shadcn UI components
│   ├── common/               # Common components
│   └── theme/                # Theme components
├── i18n/                    # i18n configuration
│   ├── routing.ts           # Route & navigation setup
│   └── request.ts           # Message loading config
├── lib/                     # Utilities
│   └── utils.ts             # Helper functions (cn)
├── middleware/              # Request middleware
│   └── middleware.ts        # i18n middleware
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript definitions
├── services/                # API services and data fetching
└── messages/                # Translation files
    ├── en.json             # English translations
    └── ar.json             # Arabic translations
```

### Key Directories

- `app/[locale]`: App Router pages with i18n routing
- `components`: Reusable UI components using Shadcn UI
- `i18n`: Internationalization setup and configuration
- `lib`: Utility functions and shared code
- `messages`: Translation JSON files for each locale
- `middleware`: Next.js middleware for i18n routing
- `styles`: Global styles and theme configuration
- `types`: TypeScript type definitions
- `hooks`: Custom React hooks

### Key Files

- `layout.tsx`: Root layout with Geist font and i18n provider
- `globals.css`: Global styles with Tailwind and theme variables
- `routing.ts`: i18n routing configuration and navigation utilities
- `utils.ts`: Utility functions for class name management (clsx + tailwind-merge)
- `middleware.ts`: i18n route handling middleware with locale prefix support

## Getting Started

1. Clone the repository

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Internationalization

The project supports multiple languages with URL-based locale switching:

- English: `/en/*`
- Arabic: `/ar/*`

Features:

- Automatic locale detection
- SEO-friendly URLs
- RTL support for Arabic
- Type-safe translations

## Available Scripts

- `dev` - Start development server with Turbopack
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

## Environment Setup

### Requirements

- Node.js 18.17 or later
- Git

### VSCode Extensions

- ESLint
- Tailwind CSS IntelliSense
- i18n Ally (for translation management)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
