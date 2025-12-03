'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { JobCard } from '@/components/jobs/JobCard'
import { AuthGate } from '@/components/auth/AuthGate'
import { Loader2 } from 'lucide-react'

interface Job {
    id: string
    title: string
    company: string
    location: string
    posted_date: string
    tags: string[]
    is_active: boolean
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data.jobs || [])
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Curated Data & AI Jobs in Europe
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Verified opportunities with visa sponsorship support for Indian engineers.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="relative">
                                <JobCard
                                    title={job.title}
                                    company={job.company}
                                    location={job.location}
                                    type="Full-time" // Mock for now
                                    postedAt={new Date(job.posted_date).toLocaleDateString()}
                                    tags={job.tags || []}
                                    isNew={false}
                                />
                                {/* Overlay/Gate for non-authenticated users could go here, 
                    but for now we just gate the 'Apply' action inside or below */}

                                {/* Example of using AuthGate to show/hide specific details */}
                                {/* <div className="mt-4">
                  <AuthGate>
                     <SalaryInfo /> 
                  </AuthGate>
                </div> */}
                            </div>
                        ))}

                        {jobs.length === 0 && (
                            <div className="text-center py-20 text-slate-500">
                                No active jobs found. Check back later!
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
