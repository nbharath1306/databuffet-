import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function PricingCard() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Invest in Your <span className="text-emerald-600">Global Future</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Transparent pricing with flexible payment options for Indian students.
                    </p>
                </div>

                <div className="max-w-lg mx-auto">
                    <Card className="border-2 border-emerald-500 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            MOST POPULAR
                        </div>
                        <CardHeader className="text-center pb-2">
                            <CardTitle className="text-2xl font-bold text-slate-900">Data Engineering Bootcamp</CardTitle>
                            <CardDescription className="text-emerald-600 font-medium mt-2">12 Weeks • Live Online</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <div className="flex justify-center items-baseline gap-1 my-6">
                                <span className="text-5xl font-extrabold text-slate-900">₹49,999</span>
                                <span className="text-slate-500 line-through">₹80,000</span>
                            </div>

                            <div className="bg-emerald-50 rounded-lg p-3 mb-8 border border-emerald-100">
                                <p className="text-sm font-bold text-emerald-800">
                                    EMI starts at ₹4,500 / month
                                </p>
                                <p className="text-xs text-emerald-600 mt-1">No Cost EMI available with major banks</p>
                            </div>

                            <ul className="space-y-4 text-left max-w-xs mx-auto mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="bg-emerald-100 rounded-full p-1">
                                        <Check className="h-3 w-3 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700">Live Weekend Classes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-emerald-100 rounded-full p-1">
                                        <Check className="h-3 w-3 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700">Lifetime Access to Recordings</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-emerald-100 rounded-full p-1">
                                        <Check className="h-3 w-3 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700">Placement Assistance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-emerald-100 rounded-full p-1">
                                        <Check className="h-3 w-3 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700">Project Portfolio Building</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg shadow-md shadow-emerald-200">
                                Enroll Now
                            </Button>
                        </CardFooter>
                    </Card>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        *100% Refund if you're not satisfied within the first 2 weeks.
                    </p>
                </div>
            </div>
        </section>
    )
}
