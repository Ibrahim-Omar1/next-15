import { Locale, routing } from '@/i18n/routing';
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

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  // const messages = await getMessages();
  const t = await getTranslations({ locale });
  return {
    title: {
      template: t('a-yqgncs_F6ga-Q3AISvK'),
      default: t('DnzKJl0wUtheMwdBXZ0WI'),
      absolute: t('DnzKJl0wUtheMwdBXZ0WI'),
    },
    description: t('DnzKJl0wUtheMwdBXZ0WI'),
  };
};

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
