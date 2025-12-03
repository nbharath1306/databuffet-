import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, MapPin, Database } from 'lucide-react'

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Admissions Open: Batch 12 Starts Soon
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        Become a <span className="text-emerald-600">Global Data Engineer</span> <br className="hidden sm:block" />
                        from India.
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Live classes by mentors from Microsoft & Volvo. Master the Nordic Tech Stack and launch your career in Europe.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link href="/courses">
                            <Button size="lg" className="h-12 px-8 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200/50 transition-all hover:scale-105">
                                Explore Bootcamps
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/roadmap">
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-200 text-slate-700 hover:bg-white hover:text-emerald-600 hover:border-emerald-200 bg-white">
                                Download Curriculum
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof / Trust Indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-slate-200 pt-12">
                        <div className="flex gap-3 items-start">
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Headquartered in Sweden</h3>
                                <p className="text-sm text-slate-500 mt-1">We are on the ground in Stockholm, bridging the gap directly.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 mt-1">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Visa Sponsorship</h3>
                                <p className="text-sm text-slate-500 mt-1">We only list jobs that are open to sponsoring international talent.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="bg-purple-50 p-2 rounded-lg text-purple-600 mt-1">
                                <Database className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Specialized Roles</h3>
                                <p className="text-sm text-slate-500 mt-1">Focused exclusively on Data Engineering, AI, and Analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-emerald-50/50 to-blue-50/50 blur-3xl opacity-60"></div>
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-50/50 to-purple-50/50 blur-3xl opacity-60"></div>
            </div>
        </div>
    )
}
