import { CheckCircle2, Terminal, BarChart3, Database } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProgramDetails() {
    const tools = [
        { name: "Python & SQL", icon: Terminal, description: "Advanced scripting & querying" },
        { name: "Databricks", icon: Database, description: "Big Data processing at scale" },
        { name: "Power BI", icon: BarChart3, description: "Enterprise reporting & dashboards" },
    ]

    const curriculum = [
        "Data Warehousing Concepts (Snowflake/BigQuery)",
        "ETL/ELT Pipelines with Airflow",
        "Data Modeling & Schema Design",
        "CI/CD for Data Engineering",
        "Cloud Platforms (Azure/AWS)",
        "Real-world Capstone Project"
    ]

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Master the <span className="text-emerald-600">Modern Data Stack</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        A curriculum designed by European tech leads to make you job-ready from Day 1.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Tools Grid */}
                    <div className="grid gap-6">
                        {tools.map((tool) => (
                            <Card key={tool.name} className="border-slate-200 hover:border-emerald-200 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="bg-emerald-50 p-2 rounded-lg">
                                        <tool.icon className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">{tool.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Curriculum List */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">What you'll learn</h3>
                        <ul className="space-y-4">
                            {curriculum.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="text-sm text-blue-800 font-medium text-center">
                                Includes 1:1 Resume Review & Mock Interviews with Swedish Mentors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
