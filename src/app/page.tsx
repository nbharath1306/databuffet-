'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Cpu, 
  Briefcase, 
  Users, 
  Star,
  Menu,
  X,
  ChevronRight,
  PlayCircle
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">DataBuffet<span className="text-blue-600">.io</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#curriculum" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Curriculum</a>
              <a href="#placements" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Placements</a>
              <a href="#mentors" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Mentors</a>
              <button className="text-slate-900 font-medium hover:text-blue-600">Sign In</button>
              <button className="bg-[#0F172A] hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all">
                Apply Now
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                New Cohort Starting Soon
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Land a Job at a <br />
                <span className="text-blue-600">European Tech Startup</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                With our AI & Data Program. Live Learning from Experts, Hands-On, Practical Projects, Placement Assistance.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white text-lg font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                  View Curriculum
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-lg font-medium rounded-xl transition-all flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5 text-slate-400" />
                  How it Works
                </button>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  ))}
                </div>
                <p>Trusted by 500+ engineers</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="absolute top-0 left-0 right-0 h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="pt-12 p-8 bg-slate-50/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Data Engineer</p>
                          <p className="text-xs text-slate-500">Stockholm, Sweden (Remote)</p>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">€45,000/yr</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 opacity-80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">AI Engineer</p>
                          <p className="text-xs text-slate-500">Berlin, Germany (Remote)</p>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">€52,000/yr</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Terminal className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Analytics Engineer</p>
                          <p className="text-xs text-slate-500">Amsterdam, NL (Remote)</p>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">€48,000/yr</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">94% Placement Rate</p>
                  <p className="text-xs text-slate-500">In European Startups</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Graduates working at top European companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos - Replace with SVGs */}
            <span className="text-xl font-bold text-slate-800">Spotify</span>
            <span className="text-xl font-bold text-slate-800">Klarna.</span>
            <span className="text-xl font-bold text-slate-800">VOLVO</span>
            <span className="text-xl font-bold text-slate-800">Truecaller</span>
            <span className="text-xl font-bold text-slate-800">H&M Group</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Top Engineers Choose DataBuffet</h2>
            <p className="text-lg text-slate-600">We don't just teach code. We engineer careers for the global market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                title: "Direct European Access",
                desc: "Skip the Indian service company grind. Get direct referrals to product companies in Sweden, Germany, and Netherlands."
              },
              {
                icon: <Terminal className="w-6 h-6 text-purple-600" />,
                title: "Production-Grade Stack",
                desc: "Learn the exact stack used by unicorns: Snowflake, Airflow, dbt, and Kubernetes. No outdated legacy tech."
              },
              {
                icon: <Users className="w-6 h-6 text-orange-600" />,
                title: "Elite Mentorship",
                desc: "Weekly code reviews and career coaching from Senior Engineers currently working in Stockholm and Berlin."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Tracks</h2>
              <p className="text-slate-400 max-w-xl">Designed by CTOs to meet the demands of the modern data ecosystem.</p>
            </div>
            <button className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">Download Syllabus</button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Database className="w-7 h-7 text-blue-400" />
                </div>
                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Data Engineering Core</h3>
              <p className="text-slate-400 mb-8">Master the art of moving and processing data at scale. Build robust pipelines using the modern data stack.</p>
              
              <div className="space-y-4 mb-8">
                {['Python & SQL Advanced', 'Airflow Orchestration', 'Snowflake Warehousing', 'dbt Modeling'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                View Track Details <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Track 2 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-purple-400" />
                </div>
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Trending</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AI & Analytics Engineering</h3>
              <p className="text-slate-400 mb-8">Bridge the gap between data and decision making. Build RAG pipelines and deploy LLM applications.</p>
              
              <div className="space-y-4 mb-8">
                {['Vector Databases', 'LangChain Framework', 'RAG Pipelines', 'Looker/Tableau'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                View Track Details <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Invest in your future with our comprehensive programs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">$160</span>
                <span className="text-slate-500">/program</span>
              </div>
              <p className="text-slate-600 mb-8">Essential skills to kickstart your data career.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Live Learning from Experts',
                  'Hands-On, Practical Projects',
                  'Placement Assistance',
                  'Access to Community',
                  'Course Completion Certificate'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-bold transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#0F172A] rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$180</span>
                <span className="text-slate-400">/program</span>
              </div>
              <p className="text-slate-400 mb-8">Everything in Basic, plus advanced career support.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Basic',
                  'Priority Placement Assistance',
                  '1-on-1 Mentorship Sessions',
                  'Mock Interviews with Experts',
                  'Resume & Portfolio Review'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/50">
                Join Pro Cohort
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to launch your career?</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join the next cohort of elite engineers. Applications are reviewed on a rolling basis.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50">
                  Apply for Entrance Test
                </button>
                <button className="px-8 py-4 bg-transparent border border-slate-600 text-white hover:bg-slate-800 text-lg font-medium rounded-xl transition-all">
                  Schedule Counseling
                </button>
              </div>
              <p className="mt-6 text-sm text-slate-500">No credit card required • 100% Scholarship options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#0F172A] rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-slate-900">DataBuffet<span className="text-blue-600">.io</span></span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Empowering the next generation of data leaders with world-class education and global opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-slate-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Partners</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; 2025 DataBuffet.io. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-slate-900"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900"><Briefcase className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
