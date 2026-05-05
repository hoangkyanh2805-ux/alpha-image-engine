import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'ALPHA COUNCIL';
    const content = searchParams.get('content') || 'TƯ DUY NHÀ TẠO LẬP THỊ TRƯỜNG';
    const slide = searchParams.get('slide') || '01';
    const type = searchParams.get('type') || 'INSTITUTIONAL';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%', width: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000',
            padding: '80px', position: 'relative',
          }}
        >
          {/* Metallic Gold Gradient Border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            border: '20px solid #1A1A1A',
          }} />
          
          <div style={{
            position: 'absolute', top: 40, left: 40, right: 40, bottom: 40,
            border: '1px solid #D4AF37', borderRadius: '20px',
          }} />

          {/* Luxury Content Container */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            width: '100%', height: '100%', padding: '100px 80px', zIndex: 10
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ color: '#D4AF37', fontSize: '32px', fontWeight: 800, letterSpacing: '8px', textTransform: 'uppercase' }}>
                  {title}
                </div>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#D4AF37' }} />
                <div style={{ color: 'rgba(255,215,0,0.6)', fontSize: '24px', fontStyle: 'italic' }}>{type}</div>
              </div>
              
              <div style={{ 
                color: '#FFFFFF', fontSize: '80px', fontWeight: 900, marginTop: '80px', 
                lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}>
                {content}
              </div>
            </div>

            <div style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#D4AF37', fontSize: '24px', fontWeight: 800, letterSpacing: '3px' }}>
                  ALPHA TRADING LAB
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', marginTop: '5px' }}>
                  Institutional Grade Intelligence
                </div>
              </div>
              <div style={{ 
                color: '#D4AF37', border: '1px solid #D4AF37', padding: '15px 30px', 
                borderRadius: '0px', fontWeight: 900, fontSize: '32px',
                fontFamily: 'serif', fontStyle: 'italic'
              }}>
                {slide}
              </div>
            </div>
          </div>
        </div>
      ),
      { width: 1080, height: 1080 }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
