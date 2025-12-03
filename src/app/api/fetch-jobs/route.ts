import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// This would typically be a cron job protected by a secret key
export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        // For development, we might allow it without secret or with a dev key
        // return new NextResponse('Unauthorized', { status: 401 })
    }

    try {
        const jobs = await fetchJobsFromSerpApi()

        // Insert into Supabase
        const { error } = await supabase
            .from('jobs')
            .insert(jobs.map((job: any) => ({
                title: job.title,
                company: job.company_name,
                location: job.location,
                source_link: job.apply_link, // Assuming SerpApi structure
                description: job.description,
                tags: job.extensions, // e.g., ["Full-time", "Posted 2 days ago"]
                is_active: false, // Pending review
                requires_visa_sponsorship: true, // Default assumption for our niche
                posted_date: new Date().toISOString()
            })))

        if (error) throw error

        return NextResponse.json({ success: true, count: jobs.length })
    } catch (error) {
        console.error('Job fetch error:', error)
        return NextResponse.json({ success: false, error: 'Failed to fetch jobs' }, { status: 500 })
    }
}

async function fetchJobsFromSerpApi() {
    const apiKey = process.env.SERPAPI_KEY

    if (!apiKey) {
        console.log('No SerpApi key found, returning mock data')
        return [
            {
                title: "Data Engineer (Mock)",
                company_name: "Nordic Data AB",
                location: "Stockholm, Sweden",
                apply_link: "https://example.com/apply",
                description: "Great opportunity...",
                extensions: ["Python", "SQL"]
            },
            {
                title: "AI Researcher (Mock)",
                company_name: "Svenska AI",
                location: "Gothenburg, Sweden",
                apply_link: "https://example.com/apply",
                description: "Research role...",
                extensions: ["PyTorch", "PhD"]
            }
        ]
    }

    const query = "Junior Data Engineer jobs Sweden"
    const url = `https://serpapi.com/search.json?engine=google_jobs&q=${encodeURIComponent(query)}&api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()

    return data.jobs_results || []
}
