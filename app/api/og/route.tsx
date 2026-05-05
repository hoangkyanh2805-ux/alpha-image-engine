import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dữ liệu động từ URL
    const title = searchParams.get('title') || 'ALPHA COUNCIL';
    const content = searchParams.get('content') || 'TƯ DUY NHÀ TẠO LẬP THỊ TRƯỜNG';
    const slide = searchParams.get('slide') || '01';
    const type = searchParams.get('type') || 'INSIGHT';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0B1437',
            padding: '80px',
            position: 'relative',
          }}
        >
          {/* Glow Effect */}
          <div
            style={{
              position: 'absolute',
              top: -200,
              right: -200,
              width: '800px',
              height: '800px',
              background: 'radial-gradient(circle, rgba(66,42,251,0.3) 0%, rgba(11,20,55,0) 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Premium Glass Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '60px',
              padding: '80px',
              backgroundColor: 'rgba(17, 28, 68, 0.4)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '12px', height: '40px', backgroundColor: '#FFD700', borderRadius: '4px' }} />
                <div style={{ color: '#FFD700', fontSize: '32px', fontWeight: 800, letterSpacing: '6px', textTransform: 'uppercase' }}>
                  {title} | {type}
                </div>
              </div>
              
              <div style={{ 
                color: 'white', 
                fontSize: '72px', 
                fontWeight: 900, 
                marginTop: '60px', 
                lineHeight: 1.1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {content}
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderTop: '2px solid rgba(255,215,0,0.3)', 
              paddingTop: '40px' 
            }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '28px', fontWeight: 700, letterSpacing: '2px' }}>
                @ALPHATRADINGLAB
              </div>
              <div style={{ 
                backgroundColor: '#FFD700', 
                color: '#0B1437', 
                padding: '12px 35px', 
                borderRadius: '100px', 
                fontWeight: 900, 
                fontSize: '28px',
                boxShadow: '0 10px 30px rgba(255,215,0,0.2)'
              }}>
                {slide} / 05
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1080,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
