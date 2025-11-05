import { NextRequest, NextResponse } from 'next/server';


const FASTAPI_URL = process.env.FASTAPI_URL;
if (!FASTAPI_URL) {
    throw new Error('FASTAPI_URL is not set.');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question } = body;

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    // Call FastAPI backend
    const response = await fetch(`${FASTAPI_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to get response');
    }

    const data = await response.json();

    return NextResponse.json({
      answer: data.answer,
      sources: data.sources || [],
    });

  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process your question',
        details: error.message 
      },
      { status: 500 }
    );
  }
}