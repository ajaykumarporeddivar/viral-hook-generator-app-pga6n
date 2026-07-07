import {
  MOCK_HOOK_REQUESTS,
  MOCK_GENERATED_HOOKS,
  MOCK_HOOK_EXPORT_PACKS,
} from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';
import { HookRequest, GeneratedHook, HookExportPack } from '@/lib/types';

export async function GET(request: NextRequest): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/search', method: 'GET', ts: Date.now() }));
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type');
    const lowerQuery = query.toLowerCase();

    let allResults: (HookRequest | GeneratedHook | HookExportPack)[] = [];

    if (query === '') {
      // If query is empty, return first 5 hook requests
      const defaultResults = MOCK_HOOK_REQUESTS.slice(0, 5);
      return NextResponse.json({
        ok: true,
        data: { results: defaultResults, total: defaultResults.length, query: '' },
      });
    }

    if (!type || type === 'hook_requests') {
      const hookRequests = MOCK_HOOK_REQUESTS.filter(item =>
        item.topic.toLowerCase().includes(lowerQuery) ||
        item.targetAudience.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
        item.id.toLowerCase().includes(lowerQuery)
      );
      allResults.push(...hookRequests);
    }

    if (!type || type === 'generated_hooks') {
      const generatedHooks = MOCK_GENERATED_HOOKS.filter(item =>
        item.hookText.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.sourceRequestId.toLowerCase().includes(lowerQuery) ||
        item.id.toLowerCase().includes(lowerQuery)
      );
      allResults.push(...generatedHooks);
    }

    if (!type || type === 'hook_export_packs') {
      const hookExportPacks = MOCK_HOOK_EXPORT_PACKS.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.id.toLowerCase().includes(lowerQuery)
      );
      allResults.push(...hookExportPacks);
    }

    // Deduplicate results by ID if needed (though unlikely with distinct types) and limit to 20
    const uniqueResults = Array.from(new Set(allResults.map(item => item.id)))
      .map(id => allResults.find(item => item.id === id))
      .filter(Boolean) as (HookRequest | GeneratedHook | HookExportPack)[]; // Filter out undefined and assert type

    const limitedResults = uniqueResults.slice(0, 20);

    return NextResponse.json({
      ok: true,
      data: { results: limitedResults, total: limitedResults.length, query: query },
    });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/search', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}