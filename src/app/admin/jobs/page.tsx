'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, X, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface Job {
    id: string
    title: string
    company: string
    location: string
    posted_date: string
    is_active: boolean
}

export default function AdminJobs() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPendingJobs()
    }, [])

    async function fetchPendingJobs() {
        setLoading(true)
        // In a real app, we'd filter by is_active = false
        // For demo, we might just fetch all or mock
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('is_active', false)
            .order('posted_date', { ascending: false })

        if (data) {
            setJobs(data)
        } else {
            // Mock data for demo if DB is empty/not connected
            setJobs([
                {
                    id: 'mock-1',
                    title: 'Data Engineer (Pending)',
                    company: 'Tech Corp',
                    location: 'Stockholm',
                    posted_date: '2023-10-27',
                    is_active: false
                }
            ])
        }
        setLoading(false)
    }

    async function toggleStatus(id: string, status: boolean) {
        // Optimistic update
        setJobs(jobs.filter(j => j.id !== id))

        await supabase
            .from('jobs')
            .update({ is_active: status })
            .eq('id', id)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Job Curation Queue</h1>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Job</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Company</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Posted</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {jobs.map((job) => (
                                    <tr key={job.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-slate-900">{job.title}</div>
                                            <div className="text-sm text-slate-500">{job.location}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-slate-900">{job.company}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-slate-500">{new Date(job.posted_date).toLocaleDateString()}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                                                    onClick={() => toggleStatus(job.id, false)} // Reject (keep inactive or delete)
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                                    onClick={() => toggleStatus(job.id, true)} // Approve
                                                >
                                                    <Check className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {jobs.length === 0 && (
                            <div className="p-12 text-center text-slate-500">
                                No pending jobs to review.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
