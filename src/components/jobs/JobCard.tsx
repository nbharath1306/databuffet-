import { MapPin, Building2, Clock, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface JobCardProps {
    title: string
    company: string
    location: string
    type: string
    postedAt: string
    tags: string[]
    isNew?: boolean
}

export function JobCard({ title, company, location, type, postedAt, tags, isNew }: JobCardProps) {
    return (
        <div className="group relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-200">
            {isNew && (
                <span className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    NEW
                </span>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{company}</span>
                    </div>
                </div>

                <Button size="sm" className="hidden sm:flex bg-slate-900 text-white hover:bg-emerald-600 transition-colors">
                    Apply Now <ArrowUpRight className="ml-2 h-3 w-3" />
                </Button>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    {location}
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {postedAt}
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    {type}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 font-normal">
                        {tag}
                    </Badge>
                ))}
            </div>

            <Button className="w-full mt-6 sm:hidden bg-slate-900 text-white hover:bg-emerald-600">
                Apply Now
            </Button>
        </div>
    )
}
