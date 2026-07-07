import {
  MOCK_HOOK_REQUESTS,
  MOCK_GENERATED_HOOKS,
  MOCK_HOOK_EXPORT_PACKS,
  MOCK_RECENT_ACTIVITIES,
  STATS,
} from '@/lib/data';
import { NextResponse } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/data', method: 'GET', ts: Date.now() }));
  try {
    const data = {
      hookRequests: MOCK_HOOK_REQUESTS,
      generatedHooks: MOCK_GENERATED_HOOKS,
      hookExportPacks: MOCK_HOOK_EXPORT_PACKS,
      recentActivities: MOCK_RECENT_ACTIVITIES,
      stats: STATS,
    };
    return NextResponse.json(
      {
        ok: true,
        data: {
          hookRequests: data.hookRequests,
          generatedHooks: data.generatedHooks,
          hookExportPacks: data.hookExportPacks,
          recentActivities: data.recentActivities,
          stats: data.stats,
          totalHookRequests: data.hookRequests.length,
          totalGeneratedHooks: data.generatedHooks.length,
          totalHookExportPacks: data.hookExportPacks.length,
          totalRecentActivities: data.recentActivities.length,
        },
      },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/data', method: 'POST', ts: Date.now() }));
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        ok: true,
        message: 'Demo mode — data not persisted',
        received: body,
      },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json({}, { status: 200, headers: CORS_HEADERS });
}