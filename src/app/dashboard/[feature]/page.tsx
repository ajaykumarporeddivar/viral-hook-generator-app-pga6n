'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { formatDate } from '@/lib/utils'
import { MOCK_HOOK_REQUESTS, MOCK_GENERATED_HOOKS } from '@/lib/data'
import { Search, Plus, Download, Eye, Zap, CheckCircle2, Archive, ListChecks, ArrowRight, XCircle } from 'lucide-react'
import clsx from 'clsx'

export default function FeaturePage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedHookRequestId, setSelectedHookRequestId] = useState<string | null>(null)
  const [selectedGeneratedHookId, setSelectedGeneratedHookId] = useState<string | null>(null)

  // Helper for status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">Pending</Badge>
      case 'in_progress':
        return <Badge variant="info">In Progress</Badge>
      case 'completed':
        return <Badge variant="success">Completed</Badge>
      case 'archived':
        return <Badge variant="muted">Archived</Badge>
      case 'draft':
        return <Badge variant="info">Draft</Badge>
      case 'reviewed':
        return <Badge variant="success">Reviewed</Badge>
      case 'approved':
        return <Badge variant="success">Approved</Badge>
      case 'exported':
        return <Badge variant="muted">Exported</Badge>
      default:
        return <Badge variant="muted">{status}</Badge>
    }
  }

  // ── Feature 1: Hook Intake ──
  if (slug === 'hook-intake') {
    const items = MOCK_HOOK_REQUESTS.filter(i =>
      (!search || i.topic.toLowerCase().includes(search.toLowerCase())) &&
      (!statusFilter || i.status === statusFilter)
    )
    const selectedItem = items.find(item => item.id === selectedHookRequestId)

    return (
      <div className="space-y-6">
        <AppHeader
          title="Hook Intake"
          subtitle={`${items.length} content requests total`}
          actions={<Button size="sm"><Plus size={14} className="mr-1" />New Request</Button>}
        />
        <div className="flex gap-6">
          <Card className={clsx("flex-1", selectedItem && "lg:w-2/3")}>
            <CardHeader>
              <div className="flex gap-3 items-center">
                <div className="relative flex-1 max-w-xs">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search requests by topic..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none"
                >
                  <option value="">All statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-zinc-100">
                  <tr className="text-left text-zinc-500 text-xs uppercase tracking-wide">
                    <th className="px-6 py-3">Topic</th>
                    <th className="px-6 py-3">Audience</th>
                    <th className="px-6 py-3">Tone</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Created At</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-zinc-500">No content requests found.</td>
                    </tr>
                  ) : (
                    items.map(item => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedHookRequestId(selectedHookRequestId === item.id ? null : item.id)}
                        className={clsx(
                          "cursor-pointer hover:bg-zinc-50 transition-colors",
                          selectedHookRequestId === item.id && "bg-zinc-100"
                        )}
                      >
                        <td className="px-6 py-3 font-medium text-zinc-900">{item.topic}</td>
                        <td className="px-6 py-3 text-zinc-600">{item.targetAudience}</td>
                        <td className="px-6 py-3 text-zinc-600">{item.desiredTone}</td>
                        <td className="px-6 py-3">{getStatusBadge(item.status)}</td>
                        <td className="px-6 py-3 text-zinc-600">{formatDate(item.createdAt)}</td>
                        <td className="px-6 py-3 text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {selectedItem && (
            <Card className="w-1/3 p-6 space-y-4">
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                <span>Request Details</span>
                <Button variant="ghost" size="icon" onClick={() => setSelectedHookRequestId(null)}>
                  <XCircle size={20} />
                </Button>
              </CardTitle>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-zinc-800">Topic</h4>
                  <p className="text-zinc-600">{selectedItem.topic}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Target Audience</h4>
                  <p className="text-zinc-600">{selectedItem.targetAudience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Video Length</h4>
                  <p className="text-zinc-600">{selectedItem.videoLength}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Desired Tone</h4>
                  <p className="text-zinc-600">{selectedItem.desiredTone}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Keywords</h4>
                  <p className="text-zinc-600">{selectedItem.keywords.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Call to Action</h4>
                  <p className="text-zinc-600">{selectedItem.callToAction || 'N/A'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Notes</h4>
                  <p className="text-zinc-600">{selectedItem.notes || 'No notes provided.'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Status</h4>
                  {getStatusBadge(selectedItem.status)}
                </div>
                <Button className="w-full mt-4" disabled={selectedItem.status === 'completed' || selectedItem.status === 'archived'}>
                  <Zap size={14} className="mr-2" />
                  Generate Hooks
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // ── Feature 2: Hook Dashboard ──
  if (slug === 'hook-dashboard') {
    const items = MOCK_HOOK_REQUESTS.filter(i =>
      (!search || i.topic.toLowerCase().includes(search.toLowerCase())) &&
      (!statusFilter || i.status === statusFilter)
    ).sort((a, b) => (a.priority === 'high' ? -1 : 1)) // Sort high priority first

    const selectedItem = items.find(item => item.id === selectedHookRequestId)

    return (
      <div className="space-y-6">
        <AppHeader
          title="Hook Management Queue"
          subtitle={`${items.length} prioritized hook requests`}
          actions={
            <div className="flex gap-2">
              <Button size="sm" variant="outline"><ListChecks size={14} className="mr-1" />Review & Generate</Button>
              <Button size="sm"><Plus size={14} className="mr-1" />New Request</Button>
            </div>
          }
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="col-span-1 p-6">
            <CardTitle className="text-lg font-bold mb-4">Queue Summary</CardTitle>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Total Requests</span>
                <span className="font-semibold text-zinc-900">{MOCK_HOOK_REQUESTS.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Pending</span>
                <Badge variant="warning">{MOCK_HOOK_REQUESTS.filter(r => r.status === 'pending').length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">In Progress</span>
                <Badge variant="info">{MOCK_HOOK_REQUESTS.filter(r => r.status === 'in_progress').length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Completed</span>
                <Badge variant="success">{MOCK_HOOK_REQUESTS.filter(r => r.status === 'completed').length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">High Priority</span>
                <Badge className="bg-red-500 text-white">{MOCK_HOOK_REQUESTS.filter(r => r.priority === 'high').length}</Badge>
              </div>
            </div>
          </Card>

          <Card className="col-span-2">
            <CardHeader>
              <div className="flex gap-3 items-center">
                <div className="relative flex-1 max-w-xs">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search queue by topic..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none"
                >
                  <option value="">All statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-zinc-100">
                  <tr className="text-left text-zinc-500 text-xs uppercase tracking-wide">
                    <th className="px-6 py-3">Topic</th>
                    <th className="px-6 py-3">Priority</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Assigned To</th>
                    <th className="px-6 py-3">Created At</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-zinc-500">No hook requests in queue.</td>
                    </tr>
                  ) : (
                    items.map(item => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedHookRequestId(selectedHookRequestId === item.id ? null : item.id)}
                        className={clsx(
                          "cursor-pointer hover:bg-zinc-50 transition-colors",
                          selectedHookRequestId === item.id && "bg-zinc-100"
                        )}
                      >
                        <td className="px-6 py-3 font-medium text-zinc-900">{item.topic}</td>
                        <td className="px-6 py-3">
                          <Badge className={clsx({
                            "bg-red-50 text-red-700 border-red-200": item.priority === 'high',
                            "bg-amber-50 text-amber-700 border-amber-200": item.priority === 'medium',
                            "bg-zinc-50 text-zinc-700 border-zinc-200": item.priority === 'low',
                          })}>
                            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                          </Badge>
                        </td>
                        <td className="px-6 py-3">{getStatusBadge(item.status)}</td>
                        <td className="px-6 py-3 text-zinc-600">{item.assignedTo}</td>
                        <td className="px-6 py-3 text-zinc-600">{formatDate(item.createdAt)}</td>
                        <td className="px-6 py-3 text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowRight size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {selectedItem && (
          <Card className="p-6 space-y-4">
            <CardTitle className="text-xl font-bold flex items-center justify-between">
              <span>Quick Actions for &quot;{selectedItem.topic}&quot;</span>
              <Button variant="ghost" size="icon" onClick={() => setSelectedHookRequestId(null)}>
                <XCircle size={20} />
              </Button>
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <Button className="justify-start gap-2" variant="outline" disabled={selectedItem.status === 'completed' || selectedItem.status === 'archived'}>
                <Zap size={14} /> Mark In Progress
              </Button>
              <Button className="justify-start gap-2" variant="outline" disabled={selectedItem.status === 'completed' || selectedItem.status === 'archived'}>
                <CheckCircle2 size={14} /> Mark Completed
              </Button>
              <Button className="justify-start gap-2" variant="outline" disabled={selectedItem.status === 'archived'}>
                <Archive size={14} /> Archive Request
              </Button>
              <Button className="justify-start gap-2" disabled={selectedItem.status !== 'completed'}>
                <ListChecks size={14} /> View Generated Hooks
              </Button>
            </div>
            <p className="text-zinc-500 text-sm mt-4">Selected request: {selectedItem.topic} (ID: {selectedItem.id}) - Current status: {selectedItem.status}</p>
          </Card>
        )}
      </div>
    )
  }

  // ── Feature 3: Hook Exports ──
  if (slug === 'hook-exports') {
    const items = MOCK_GENERATED_HOOKS.filter(i =>
      (!search || i.hookText.toLowerCase().includes(search.toLowerCase())) &&
      (!statusFilter || i.status === statusFilter)
    )
    const selectedItem = items.find(item => item.id === selectedGeneratedHookId)

    return (
      <div className="space-y-6">
        <AppHeader
          title="Exportable Hooks"
          subtitle={`${items.length} generated hooks ready for export`}
          actions={<Button size="sm"><Download size={14} className="mr-1" />Export Selected</Button>}
        />
        <div className="flex gap-6">
          <Card className={clsx("flex-1", selectedItem && "lg:w-2/3")}>
            <CardHeader>
              <div className="flex gap-3 items-center">
                <div className="relative flex-1 max-w-xs">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search hooks by text..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none"
                >
                  <option value="">All statuses</option>
                  <option value="draft">Draft</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="approved">Approved</option>
                  <option value="exported">Exported</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-zinc-100">
                  <tr className="text-left text-zinc-500 text-xs uppercase tracking-wide">
                    <th className="px-6 py-3">Hook Text</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Platform</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Generated At</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-zinc-500">No generated hooks found.</td>
                    </tr>
                  ) : (
                    items.map(item => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedGeneratedHookId(selectedGeneratedHookId === item.id ? null : item.id)}
                        className={clsx(
                          "cursor-pointer hover:bg-zinc-50 transition-colors",
                          selectedGeneratedHookId === item.id && "bg-zinc-100"
                        )}
                      >
                        <td className="px-6 py-3 font-medium text-zinc-900 line-clamp-2 max-w-xs">{item.hookText}</td>
                        <td className="px-6 py-3 text-zinc-600">{item.category}</td>
                        <td className="px-6 py-3 text-zinc-600">{item.platform}</td>
                        <td className="px-6 py-3">{getStatusBadge(item.status)}</td>
                        <td className="px-6 py-3 text-zinc-600">{formatDate(item.generatedAt)}</td>
                        <td className="px-6 py-3 text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {selectedItem && (
            <Card className="w-1/3 p-6 space-y-4">
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                <span>Hook Details</span>
                <Button variant="ghost" size="icon" onClick={() => setSelectedGeneratedHookId(null)}>
                  <XCircle size={20} />
                </Button>
              </CardTitle>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-zinc-800">Hook Text</h4>
                  <p className="text-zinc-600">{selectedItem.hookText}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Category</h4>
                  <p className="text-zinc-600">{selectedItem.category}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Platform</h4>
                  <p className="text-zinc-600">{selectedItem.platform}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Status</h4>
                  {getStatusBadge(selectedItem.status)}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Generated From Request</h4>
                  <p className="text-zinc-600">{selectedItem.fromRequestId}</p>
                </div>
                <Button className="w-full mt-4" disabled={selectedItem.status === 'exported'}>
                  <CheckCircle2 size={14} className="mr-2" />
                  Mark as Approved
                </Button>
                <Button className="w-full" variant="outline" disabled={selectedItem.status !== 'approved'}>
                  <Download size={14} className="mr-2" />
                  Add to Export Pack
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // Fallback for unknown slugs (e.g., dashboard root or non-MVP feature)
  return (
    <div className="space-y-6">
      <AppHeader
        title="Creator Hub"
        subtitle="Welcome back! Your operational dashboard for viral hook generation."
        actions={<Button size="sm"><Plus size={14} className="mr-1" />New Hook Request</Button>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Hook Intake</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-zinc-600">Streamline the process of capturing raw content ideas and normalizing them into structured hook records.</p>
            <Button variant="outline" className="w-full">
              <ArrowRight size={14} className="mr-2" /> Go to Intake
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Hook Management Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-zinc-600">Prioritize hooks, track their status, and identify next actions for your Creator business teams.</p>
            <Button variant="outline" className="w-full">
              <ArrowRight size={14} className="mr-2" /> View Dashboard
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Exportable Hooks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-zinc-600">Generate buyer-ready export packs of prioritized hooks, proving ROI without manual reporting or spreadsheet cleanup.</p>
            <Button variant="outline" className="w-full">
              <ArrowRight size={14} className="mr-2" /> Manage Exports
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-l-4 border-zinc-900 bg-zinc-50 p-6 shadow-md">
        <CardTitle className="text-lg font-bold text-zinc-900 mb-2">Unlock Full Roadmap Features</CardTitle>
        <p className="text-zinc-700 mb-4">
          Upgrade to a Pro plan to access advanced features like brainstorming automation, team collaboration, client-ready PDF exports, and more.
        </p>
        <Button className="bg-zinc-900 text-white hover:bg-zinc-700">Unlock Full Roadmap</Button>
      </Card>
    </div>
  )
}