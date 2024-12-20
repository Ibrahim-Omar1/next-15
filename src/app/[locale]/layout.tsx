import { Locale, routing } from '@/i18n/routing';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    colorScheme: 'light dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
    userScalable: true,
  };
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  // Create languages object from locales
  const languages = routing.locales.reduce(
    (acc, locale) => ({
      ...acc,
      [locale]: `/${locale}`,
    }),
    {}
  );

  return {
    title: {
      template: t('a-yqgncs_F6ga-Q3AISvK'),
      default: t('DnzKJl0wUtheMwdBXZ0WI'),
      absolute: t('DnzKJl0wUtheMwdBXZ0WI'),
    },
    description: t('DnzKJl0wUtheMwdBXZ0WI'),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    authors: {
      name: 'Ibrahim Omar',
      url: 'https://www.linkedin.com/in/ibrahim-omar-883156253/',
    },
    category: 'Technology',
    creator: 'Ibrahim Omar',
    publisher: 'Ibrahim Omar',
    robots: 'index, follow',
    classification: 'Technology',
    keywords: [
      'Next.js',
      'React',
      'TypeScript',
      'Server Components',
      'App Router',
    ],
  };
};

// Generate static params for the locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  // Get the locale from the params
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
