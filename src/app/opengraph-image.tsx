import { generateOgImage } from '@/components/shared/og-image';

export const runtime = 'edge';
export const alt = 'OpenGraph Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return generateOgImage({
    title: 'Ibrahim Omar',
    subtitle: 'Software Engineer',
  });
}
