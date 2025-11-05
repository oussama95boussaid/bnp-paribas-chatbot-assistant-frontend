import { NextRequest, NextResponse } from 'next/server';

const FASTAPI_URL = process.env.FASTAPI_URL;
if (!FASTAPI_URL) {
  throw new Error('FASTAPI_URL is not set.');
}

export async function GET() {
  try {
    const response = await fetch(`${FASTAPI_URL}/health`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Backend unhealthy');
    }

    const data = await response.json();
    
    return NextResponse.json({
      status: 'healthy',
      backend: data,
    });

  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: 'Backend unavailable' 
      },
      { status: 503 }
    );
  }
}