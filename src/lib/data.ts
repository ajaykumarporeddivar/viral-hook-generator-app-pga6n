import {
  DemoUser,
  HookRequest,
  GeneratedHook,
  HookExportPack,
  RecentActivity,
  RecentActivityType,
} from './types';

export const DEMO_USER: DemoUser = {
  id: 'user-marcus-w',
  name: 'Marcus Webb',
  email: 'marcus.webb@viralhooks.io',
  role: 'Creator',
  plan: 'Pro',
  avatar: 'MW',
  joinedAt: '2023-09-15T10:00:00Z',
};

export const MOCK_HOOK_REQUESTS: HookRequest[] = [
  {
    id: 'req-001',
    topic: 'Sustainable Home Decor',
    targetAudience: 'Eco-conscious millennials',
    videoLength: 'Short (15-30s)',
    desiredTone: 'Informative',
    keywords: ['eco-friendly', 'DIY decor', 'sustainable living'],
    callToAction: 'Shop my Etsy!',
    notes: 'Focus on budget-friendly ideas.',
    status: 'ready_for_review',
    priority: 'high',
    createdAt: '2024-06-20T10:30:00Z',
    updatedAt: '2024-06-21T14:15:00Z',
  },
  {
    id: 'req-002',
    topic: 'Morning Routine for Productivity',
    targetAudience: 'Busy professionals',
    videoLength: 'Medium (30-60s)',
    desiredTone: 'Inspirational',
    keywords: ['productivity', 'morning habits', 'time management'],
    callToAction: 'Download my free guide!',
    notes: 'Include actionable tips.',
    status: 'in_progress',
    priority: 'urgent',
    createdAt: '2024-06-19T09:00:00Z',
    updatedAt: '2024-06-21T10:00:00Z',
  },
  {
    id: 'req-003',
    topic: 'Beginner Python Coding Tips',
    targetAudience: 'Aspiring developers',
    videoLength: 'Long (60s+)',
    desiredTone: 'Informative',
    keywords: ['python tutorial', 'coding basics', 'learn to code'],
    callToAction: 'Subscribe for more!',
    notes: 'Break down complex concepts.',
    status: 'pending',
    priority: 'medium',
    createdAt: '2024-06-18T14:45:00Z',
    updatedAt: '2024-06-18T14:45:00Z',
  },
  {
    id: 'req-004',
    topic: 'Healthy Meal Prep on a Budget',
    targetAudience: 'College students, young adults',
    videoLength: 'Medium (30-60s)',
    desiredTone: 'Casual',
    keywords: ['meal prep', 'healthy eating', 'budget friendly'],
    callToAction: 'Follow for easy recipes!',
    notes: 'Emphasize quick and cheap ingredients.',
    status: 'ready_for_review',
    priority: 'high',
    createdAt: '2024-06-17T11:20:00Z',
    updatedAt: '2024-06-20T09:30:00Z',
  },
  {
    id: 'req-005',
    topic: 'Travel Hacking: Fly for Less',
    targetAudience: 'Adventure seekers, budget travelers',
    videoLength: 'Short (15-30s)',
    desiredTone: 'Humorous',
    keywords: ['travel tips', 'cheap flights', 'vacation hacks'],
    callToAction: 'Visit my blog!',
    notes: 'Use engaging visuals and quick cuts.',
    status: 'completed',
    priority: 'low',
    createdAt: '2024-06-16T16:00:00Z',
    updatedAt: '2024-06-19T11:00:00Z',
  },
  {
    id: 'req-006',
    topic: 'Mastering Digital Art with Procreate',
    targetAudience: 'Aspiring digital artists',
    videoLength: 'Long (60s+)',
    desiredTone: 'Informative',
    keywords: ['digital painting', 'procreate tutorial', 'art tips'],
    callToAction: 'Check out my brushes!',
    notes: 'Show step-by-step process.',
    status: 'archived',
    priority: 'medium',
    createdAt: '2024-06-15T13:10:00Z',
    updatedAt: '2024-06-18T15:00:00Z',
  },
];

export const MOCK_GENERATED_HOOKS: GeneratedHook[] = [
  {
    id: 'hook-001',
    hookRequestId: 'req-001',
    hookText: 'Your home is toxic! 🌿 Make it eco-chic with these 3 DIYs. #sustainableliving',
    platform: 'TikTok',
    viralityScore: 88,
    engagementEstimate: 'High',
    status: 'approved',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-20T11:00:00Z',
    updatedAt: '2024-06-21T10:00:00Z',
  },
  {
    id: 'hook-002',
    hookRequestId: 'req-001',
    hookText: 'Trash to treasure! ♻️ Transform old junk into stunning decor. Wait till you see #2!',
    platform: 'Instagram Reels',
    viralityScore: 92,
    engagementEstimate: 'High',
    status: 'draft',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-20T11:15:00Z',
    updatedAt: '2024-06-20T11:15:00Z',
  },
  {
    id: 'hook-003',
    hookRequestId: 'req-002',
    hookText: 'Waking up tired? 😴 This 5-min routine will EXPLODE your productivity today!',
    platform: 'YouTube Shorts',
    viralityScore: 95,
    engagementEstimate: 'High',
    status: 'approved',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-19T09:45:00Z',
    updatedAt: '2024-06-21T09:00:00Z',
  },
  {
    id: 'hook-004',
    hookRequestId: 'req-002',
    hookText: 'Stop hitting snooze! ⏰ Unlock your peak morning performance. Secret habit inside!',
    platform: 'All',
    viralityScore: 78,
    engagementEstimate: 'Medium',
    status: 'rejected',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-19T10:10:00Z',
    updatedAt: '2024-06-20T10:00:00Z',
  },
  {
    id: 'hook-005',
    hookRequestId: 'req-004',
    hookText: 'Broke and hungry? 😩 7 healthy meal prep ideas that WON\'T break the bank!',
    platform: 'TikTok',
    viralityScore: 91,
    engagementEstimate: 'High',
    status: 'approved',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-17T13:00:00Z',
    updatedAt: '2024-06-20T10:30:00Z',
  },
  {
    id: 'hook-006',
    hookRequestId: 'req-004',
    hookText: 'Cooking for one? 🧑‍🍳 These cheap & easy hacks will save your weeknights.',
    platform: 'Instagram Reels',
    viralityScore: 85,
    engagementEstimate: 'Medium',
    status: 'draft',
    ownerId: DEMO_USER.id,
    createdAt: '2024-06-17T13:30:00Z',
    updatedAt: '2024-06-17T13:30:00Z',
  },
];

export const MOCK_HOOK_EXPORT_PACKS: HookExportPack[] = [
  {
    id: 'pack-001',
    name: 'Eco Decor Hooks - Q2 2024',
    hooksIncludedIds: ['hook-001', 'hook-002'],
    format: 'CSV',
    status: 'ready',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-06-21T15:00:00Z',
    updatedAt: '2024-06-21T15:05:00Z',
    downloadUrl: '/exports/pack-001.csv',
  },
  {
    id: 'pack-002',
    name: 'Productivity Morning Hooks',
    hooksIncludedIds: ['hook-003'],
    format: 'PDF',
    status: 'processing',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-06-21T09:30:00Z',
    updatedAt: '2024-06-21T09:40:00Z',
    downloadUrl: '/exports/pack-002.pdf',
  },
  {
    id: 'pack-003',
    name: 'Budget Meal Prep Hooks',
    hooksIncludedIds: ['hook-005'],
    format: 'JSON',
    status: 'ready',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-06-20T11:00:00Z',
    updatedAt: '2024-06-20T11:02:00Z',
    downloadUrl: '/exports/pack-003.json',
  },
  {
    id: 'pack-004',
    name: 'Travel Hacks Hooks - May Summary',
    hooksIncludedIds: [], // Placeholder, none were approved
    format: 'CSV',
    status: 'failed',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-05-28T10:00:00Z',
    updatedAt: '2024-05-28T10:05:00Z',
    downloadUrl: '',
  },
  {
    id: 'pack-005',
    name: 'Digital Art Hooks - Initial Draft',
    hooksIncludedIds: [],
    format: 'PDF',
    status: 'ready',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-06-18T16:00:00Z',
    updatedAt: '2024-06-18T16:02:00Z',
    downloadUrl: '/exports/pack-005.pdf',
  },
  {
    id: 'pack-006',
    name: 'Python Tips Hooks - Q1 Review',
    hooksIncludedIds: [],
    format: 'CSV',
    status: 'ready',
    generatedBy: DEMO_USER.id,
    createdAt: '2024-03-10T09:00:00Z',
    updatedAt: '2024-03-10T09:05:00Z',
    downloadUrl: '/exports/pack-006.csv',
  },
];

export const STATS = {
  hooksInQueue: '27 requests', // pending + in_progress
  hooksApprovedThisMonth: '+18.4%', // trend
  exportPacksCreated: 8, // total packs generated
  avgApprovalTimeDays: '3.1 days', // time from request to approval
};

export const SPARKLINE_DATA: Record<string, number[]> = {
  hooksInQueue: [20, 22, 19, 25, 27, 24],
  hooksApprovedThisMonth: [12, 15, 14, 18, 20, 23],
  exportPacksCreated: [2, 3, 2, 4, 3, 5],
  avgApprovalTimeDays: [4.2, 3.8, 3.5, 3.0, 3.2, 3.1],
};

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94],
  labels: ['Jun W1', 'Jun W2', 'Jun W3', 'Jun W4', 'Jul W1', 'Jul W2', 'Jul W3', 'Jul W4'],
  engagement: [18200, 22400, 19800, 31200, 28500, 33100, 29800, 35600], // Instead of revenue, use "engagement" for creator focus
};

export const RECENT_ACTIVITY: RecentActivity[] = [
  {
    id: 'act-001',
    action: 'Approved hook "Your home is toxic!" for req-001',
    user: 'Marcus Webb',
    avatar: 'MW',
    time: '2 minutes ago',
    type: 'approve' as const,
  },
  {
    id: 'act-002',
    action: 'Created new Hook Request for "Morning Routine for Productivity"',
    user: 'Sarah Lee',
    avatar: 'SL',
    time: '1 hour ago',
    type: 'create' as const,
  },
  {
    id: 'act-003',
    action: 'Exported "Eco Decor Hooks - Q2 2024" as CSV',
    user: 'Marcus Webb',
    avatar: 'MW',
    time: '3 hours ago',
    type: 'export' as const,
  },
  {
    id: 'act-004',
    action: 'Rejected hook "Stop hitting snooze!" for req-002',
    user: 'Marcus Webb',
    avatar: 'MW',
    time: 'yesterday',
    type: 'reject' as const,
  },
  {
    id: 'act-005',
    action: 'Updated status of req-003 to "in_progress"',
    user: 'Alex Chen',
    avatar: 'AC',
    time: '2 days ago',
    type: 'update' as const,
  },
  {
    id: 'act-006',
    action: 'Generated 3 new hooks for "Healthy Meal Prep on a Budget"',
    user: 'Marcus Webb',
    avatar: 'MW',
    time: '3 days ago',
    type: 'create' as const,
  },
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
