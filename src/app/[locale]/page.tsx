import { Locale } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Home = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  // Enable static rendering
  const { locale } = await params;
  // Set the locale
  setRequestLocale(locale);
  // Get the translations
  const t = await getTranslations({ locale });

  return <p>{t('DiLnRuYw0sut7TIAsU0fD')}</p>;
};

export default Home;
