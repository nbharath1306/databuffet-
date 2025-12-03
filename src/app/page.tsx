import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProgramDetails } from "@/components/home/ProgramDetails";
import { PricingCard } from "@/components/home/PricingCard";
import { JobCard } from "@/components/jobs/JobCard";
import { CourseSection } from "@/components/courses/CourseSection";

export default function Home() {
  const featuredJobs = [
    {
      title: "Junior Data Engineer",
      company: "Spotify",
      location: "Stockholm, Sweden",
      type: "Full-time",
      postedAt: "2 days ago",
      tags: ["Python", "SQL", "GCP"],
      isNew: true,
    },
    {
      title: "AI Research Intern",
      company: "Klarna",
      location: "Berlin, Germany",
      type: "Internship",
      postedAt: "5 hours ago",
      tags: ["PyTorch", "LLMs", "Research"],
      isNew: true,
    },
    {
      title: "Data Analyst",
      company: "Volvo Cars",
      location: "Gothenburg, Sweden",
      type: "Full-time",
      postedAt: "1 week ago",
      tags: ["Tableau", "SQL", "Analytics"],
      isNew: false,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProgramDetails />

      {/* Featured Jobs Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Opportunities</h2>
            <p className="text-slate-600 mt-2">Hand-picked roles for international talent.</p>
          </div>
          <a href="/jobs" className="text-emerald-600 font-medium hover:text-emerald-700 hidden sm:block">
            View all jobs &rarr;
          </a>
        </div>

        <div className="grid gap-6">
          {featuredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a href="/jobs" className="text-emerald-600 font-medium hover:text-emerald-700">
            View all jobs &rarr;
          </a>
        </div>
      </section>

      <PricingCard />
      <CourseSection />
    </main>
  );
}
