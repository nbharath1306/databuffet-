import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
    try {
        const { data: jobs, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('is_active', true)
            .order('posted_date', { ascending: false })

        if (error) throw error

        return NextResponse.json({ jobs })
    } catch (error) {
        console.error('Error fetching jobs:', error)
        // Return mock data if DB fails (for demo purposes)
        return NextResponse.json({
            jobs: [
                {
                    id: '1',
                    title: "Junior Data Engineer",
                    company: "Spotify",
                    location: "Stockholm, Sweden",
                    tags: ["Python", "SQL", "GCP"],
                    posted_date: new Date().toISOString(),
                    is_active: true
                },
                {
                    id: '2',
                    title: "AI Research Intern",
                    company: "Klarna",
                    location: "Berlin, Germany",
                    tags: ["PyTorch", "LLMs"],
                    posted_date: new Date().toISOString(),
                    is_active: true
                }
            ]
        })
    }
}
