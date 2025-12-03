'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface AuthGateProps {
    children: React.ReactNode
    fallback?: React.ReactNode
}

export function AuthGate({ children, fallback }: AuthGateProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        const { data: { session } } = await supabase.auth.getSession()
        setIsAuthenticated(!!session)
        setLoading(false)
    }

    if (loading) return null // Or a spinner

    if (!isAuthenticated) {
        return fallback || (
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <div className="bg-slate-200 p-3 rounded-full mb-4">
                    <Lock className="h-6 w-6 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sign in to Apply</h3>
                <p className="text-slate-500 mb-6 max-w-xs">
                    Join Data Buffet to view full job details, salary info, and application links.
                </p>
                <div className="flex gap-3">
                    <Link href="/login">
                        <Button variant="outline">Log in</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Sign up Free</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return <>{children}</>
}
