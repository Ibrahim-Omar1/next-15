import type { IntlConfig } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { Locale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) as Locale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Get the timezone from the cookie
  const timezoneCookie = (await cookies()).get('timezone')?.value;

  return {
    // Get the locale from the request
    locale,
    // Get the timezone from the cookie
    timeZone: timezoneCookie || 'UTC',
    // Get the messages for the current locale
    messages: (await import(`../../messages/${locale}.json`)).default,
    // Get the current date and time
    now: new Date(),
    // Get the fallback locale
    getMessageFallback: (info) => {
      console.log('getMessageFallback', info);
      return 'en';
    },
    // Log errors
    onError: (error) => {
      console.error('i18n onError', error);
    },
    // Format the date and time
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        },
      },
    },
  } satisfies IntlConfig;
});
