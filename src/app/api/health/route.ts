import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    env: env.NODE_ENV,
    time: new Date().toISOString(),
  });
}
