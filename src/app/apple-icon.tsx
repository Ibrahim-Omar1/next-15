import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px', // Apple's rounded corners
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #ffffff, #cccccc)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          N
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
