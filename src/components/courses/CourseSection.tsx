import { BookOpen, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function CourseSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Master the <span className="text-emerald-600">Nordic Tech Stack</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Curated learning paths designed by engineers from Spotify, Klarna, and Volvo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Course 1 */}
                    <Card className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl">Data Engineering Bootcamp</CardTitle>
                            <CardDescription>Zero to Hero in Modern Data Stack</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Python & SQL Mastery
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Airflow & dbt
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Cloud (AWS/GCP)
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full border-slate-200 hover:border-emerald-500 hover:text-emerald-600">
                                Download Syllabus
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Course 2 */}
                    <Card className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <CardTitle className="text-xl">1:1 Mentorship</CardTitle>
                            <CardDescription>Direct guidance from Senior Engineers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    CV & Portfolio Review
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Mock Interviews
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Career Strategy
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-slate-900 hover:bg-emerald-600 text-white">
                                Book a Session
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Course 3 */}
                    <Card className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                                <Calendar className="h-6 w-6 text-orange-600" />
                            </div>
                            <CardTitle className="text-xl">Live Workshops</CardTitle>
                            <CardDescription>Weekly deep-dives into tech topics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    System Design
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Real-world Case Studies
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Live Q&A
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full border-slate-200 hover:border-emerald-500 hover:text-emerald-600">
                                View Schedule
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
