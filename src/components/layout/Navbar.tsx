'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-slate-900 p-1.5 rounded-lg">
                                <Database className="h-5 w-5 text-emerald-400" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                Data Buffet
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/jobs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Jobs
                        </Link>
                        <Link href="/courses" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Mentorship
                        </Link>
                        <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Why Sweden?
                        </Link>
                        <div className="flex items-center gap-4 ml-4">
                            <Link href="/login">
                                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                                    Log in
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm shadow-emerald-200">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/jobs"
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Jobs
                        </Link>
                        <Link
                            href="/courses"
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Mentorship
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Why Sweden?
                        </Link>
                        <div className="pt-4 flex flex-col gap-3">
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" className="w-full justify-center">
                                    Log in
                                </Button>
                            </Link>
                            <Link href="/signup" onClick={() => setIsOpen(false)}>
                                <Button className="w-full justify-center bg-emerald-500 hover:bg-emerald-600">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
