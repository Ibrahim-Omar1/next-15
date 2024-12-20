import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

/**
 * Represents the supported locales in the application.
 *
 * @constant {'en' | 'ar'} Locale
 */
export type Locale = 'en' | 'ar';

/**
 * Constant array of supported locale codes. Used for:
 *
 * - Route configuration
 * - Language selection
 * - Message loading
 * - URL path validation
 *
 * @constant {readonly ('en' | 'ar')[]}
 */
export const locales = ['en', 'ar'] as const;

/**
 * The fallback locale used when:
 *
 * - No locale is specified in the URL
 * - An invalid locale is provided
 * - Message loading fails for the requested locale
 *
 * @constant {'en'}
 */
export const defaultLocale = 'en';

/**
 * URL locale prefix strategy. 'always' ensures every URL includes the locale prefix:
 *
 * - /en/about
 * - /ar/profile
 *
 * This helps with:
 *
 * - SEO optimization
 * - Consistent URL structure
 * - Proper language detection
 *
 * @constant {'always'}
 */
export const localePrefix = 'always';

/**
 * Core routing configuration for next-intl. Defines the internationalization behavior for the
 * application.
 *
 * @constant {object} routing
 * @see {@link https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing#i18n-routing Routing Setup}
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

/**
 * Navigation utilities for handling internationalized routing.
 *
 * @see {@link https://next-intl-docs.vercel.app/docs/routing/navigation Navigation API Documentation}
 */
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect,
} = createNavigation(routing);
