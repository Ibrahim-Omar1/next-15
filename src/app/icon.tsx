import { ImageResponse } from 'next/og';

export function generateImageMetadata({}) {
  return [
    {
      contentType: 'image/png',
      size: { width: 16, height: 16 },
      id: '16',
    },
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: '32',
    },
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: '48',
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = {
    width: parseInt(id),
    height: parseInt(id),
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: parseInt(id) * 0.75, // Scale font size with icon size
          background:
            'linear-gradient(to bottom right, #000000, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: `${parseInt(id) * 0.25}px`,
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    }
  );
}
