export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: 'Creator' | 'Manager' | 'Admin';
  plan: 'Free' | 'Pro' | 'Enterprise';
  avatar: string;
  joinedAt: string;
}

export type HookRequestStatus = 'pending' | 'in_progress' | 'ready_for_review' | 'completed' | 'archived';
export type GeneratedHookStatus = 'draft' | 'approved' | 'rejected' | 'exported';
export type HookExportPackStatus = 'processing' | 'ready' | 'failed';

export interface HookRequest {
  id: string;
  topic: string;
  targetAudience: string; // e.g., 'Gen Z gamers', 'Small business owners', 'DIY enthusiasts'
  videoLength: 'Short (15-30s)' | 'Medium (30-60s)' | 'Long (60s+)';
  desiredTone: 'Humorous' | 'Informative' | 'Inspirational' | 'Controversial' | 'Casual';
  keywords: string[]; // e.g., ['productivity', 'life hacks', 'side hustle']
  callToAction: string; // e.g., 'Link in bio', 'Follow for more', 'Comment your thoughts'
  notes?: string;
  status: HookRequestStatus;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

export interface GeneratedHook {
  id: string;
  hookRequestId: string;
  hookText: string;
  platform: 'TikTok' | 'Instagram Reels' | 'YouTube Shorts' | 'All';
  viralityScore: number; // 1-100
  engagementEstimate: string; // e.g., 'High', 'Medium', 'Low'
  status: GeneratedHookStatus;
  ownerId: string; // Refers to DemoUser.id
  createdAt: string;
  updatedAt: string;
}

export interface HookExportPack {
  id: string;
  name: string;
  hooksIncludedIds: string[]; // Refers to GeneratedHook.id
  format: 'CSV' | 'PDF' | 'JSON';
  status: HookExportPackStatus;
  generatedBy: string; // Refers to DemoUser.id
  createdAt: string;
  updatedAt: string;
  downloadUrl: string;
}

export type RecentActivityType = 'create' | 'update' | 'export' | 'approve' | 'reject';

export interface RecentActivity {
  id: string;
  action: string;
  user: string;
  avatar: string;
  time: string;
  type: RecentActivityType;
}