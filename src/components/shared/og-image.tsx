import { ImageResponse } from 'next/og';

interface OgImageProps {
  title: string;
  subtitle: string;
}

export async function generateOgImage({
  title,
  subtitle,
}: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            'linear-gradient(to bottom right, #000000, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              background: '#ffffff',
              borderRadius: '50%',
            }}
          />
          <span style={{ color: '#ffffff', fontSize: '24px' }}>
            Next.js 15
          </span>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              background:
                'linear-gradient(to right, #ffffff, #cccccc)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#888888',
              textAlign: 'center',
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              padding: '8px 24px',
              background: '#ffffff',
              color: '#000000',
              borderRadius: '9999px',
              fontSize: '20px',
              fontWeight: 'medium',
            }}
          >
            Shadcn UI
          </div>
          <div
            style={{
              padding: '8px 24px',
              background: '#ffffff',
              color: '#000000',
              borderRadius: '9999px',
              fontSize: '20px',
              fontWeight: 'medium',
            }}
          >
            Next-Intl
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
