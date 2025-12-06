'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Database, 
  Cpu, 
  BarChart3, 
  Globe, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Zap,
  Code2,
  Smartphone,
  Instagram
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [experience, setExperience] = useState(0);

  // Salary Calculator Logic
  const indianSalary = 3.5 + (experience * 1.5); // Base 3.5L + 1.5L per year
  const remoteSalary = 12 + (experience * 4);   // Base 12L + 4L per year

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-900">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">DataBuffet<span className="text-cyan-400">.io</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#stack" className="text-slate-400 hover:text-cyan-400 font-medium transition-colors">The Stack</a>
              <a href="#mentors" className="text-slate-400 hover:text-cyan-400 font-medium transition-colors">Mentors</a>
              <a href="#stories" className="text-slate-400 hover:text-cyan-400 font-medium transition-colors">Stories</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-slate-400 hover:text-white font-medium">Login</button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                Apply Now
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: The "Scroll-Stopper" Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Globe className="w-3 h-3" />
              Remote First • European Tech
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Your Desk in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Hyderabad</span>. <br />
              Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stockholm</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed"
            >
              Master the Nordic Tech Stack (Airflow, Snowflake, DBT). <br className="hidden md:block" />
              Get placed in European Remote Internships without leaving home.
            </motion.p>
          </div>

          {/* Salary Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-slate-300 font-medium">Years of Experience</label>
                <span className="text-cyan-400 font-bold text-xl">{experience} Years</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1" 
                value={experience}
                onChange={(e) => setExperience(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>Fresher</span>
                <span>1 Year</span>
                <span>2 Years</span>
                <span>3 Years</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                <p className="text-slate-400 text-xs md:text-sm mb-1">Avg Indian Service Co.</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-300">₹{indianSalary}L</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-4 border border-cyan-500/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
                <p className="text-cyan-400 text-xs md:text-sm mb-1 font-semibold">Remote Euro Stipend</p>
                <p className="text-2xl md:text-3xl font-bold text-white">₹{remoteSalary}L</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl shadow-lg shadow-white/10 flex items-center justify-center gap-2 text-lg"
              >
                Take the Entrance Test
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <p className="text-slate-500 text-xs mt-3">Limited seats for the upcoming cohort.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The "Reality Check" */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why You Feel "Left Behind"</h2>
            <p className="text-slate-400">Your college isn't bad. The syllabus is just old. <br />We bridge the 10-year gap in 12 weeks.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* College Syllabus */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 opacity-75">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-300">Your College Syllabus</h3>
              </div>
              <ul className="space-y-4">
                {["Java / C++ Theory", "Ancient SQL (Oracle 9i)", "Manual Testing", "Localhost Projects"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500">
                    <XCircle className="w-5 h-5 text-red-900/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Startup Needs */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-2xl p-6 border border-cyan-500/30 relative">
              <div className="absolute -top-3 -right-3 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                INDUSTRY STANDARD
              </div>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">What Startups Want</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Vector Databases (Pinecone)", 
                  "RAG Pipelines & LLMs", 
                  "Cloud Orchestration (Airflow)", 
                  "Production Deployments (AWS/GCP)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The "Stack" (Outcomes) */}
      <section id="stack" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Don't Just Learn. <span className="text-cyan-400">Build.</span></h2>
              <p className="text-slate-400">Specialized tracks designed for the modern data stack.</p>
            </div>
            <a href="#" className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Full Curriculum <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Engineering</h3>
              <p className="text-blue-400 text-sm font-mono mb-4">"The Plumber of the AI World"</p>
              <p className="text-slate-400 text-sm mb-6">Build robust pipelines that feed AI models. Master Airflow, Kafka, and Snowflake.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">Airflow</span>
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">Snowflake</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -5 }} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Engineering</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">"Beyond ChatGPT Wrappers"</p>
              <p className="text-slate-400 text-sm mb-6">Fine-tune LLMs and build RAG systems. Go deep into LangChain and Vector DBs.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">LangChain</span>
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">Pinecone</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -5 }} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-orange-400 text-sm font-mono mb-4">"Storytelling with Data"</p>
              <p className="text-slate-400 text-sm mb-6">Transform raw data into business insights. Master DBT and modern BI tools.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">DBT</span>
                <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">Tableau</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Language Barrier Breaker */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <MessageCircle className="w-3 h-3" />
                Vernacular Support
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Learn in your language. <br />
                <span className="text-cyan-400">Code in theirs.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Complex concepts shouldn't be scary. Our mentors explain the hard stuff in Tamil, Telugu, and Hindi, so you can master the logic before mastering the syntax.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {['Tamil', 'Telugu', 'Hindi'].map((lang) => (
                  <div key={lang} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-cyan-500/50 transition-colors cursor-default">
                    <span className="block text-2xl mb-1">🗣️</span>
                    <span className="text-sm font-bold text-slate-300">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20" />
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100" alt="Mentor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Arjun Reddy</h4>
                    <p className="text-xs text-slate-400">Senior Data Engineer @ Spotify</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 p-3 rounded-lg rounded-tl-none text-sm text-slate-300">
                    "Distributed Computing is like a wedding buffet management..."
                  </div>
                  <div className="bg-cyan-500/10 p-3 rounded-lg rounded-tr-none text-sm text-cyan-100 ml-auto max-w-[80%]">
                    (Explains Sharding in Telugu)
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg rounded-tl-none text-sm text-slate-300">
                    "Now let's write the partition logic in Python."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Social Proof (Instagram Stories Style) */}
      <section id="stories" className="py-20 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Instagram className="w-6 h-6 text-pink-500" />
            Student Stories
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 gap-6 snap-x snap-mandatory no-scrollbar">
          {[
            { name: "Ravi", loc: "Warangal", role: "Data Engineer", company: "Klarna", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=500" },
            { name: "Sneha", loc: "Vizag", role: "AI Engineer", company: "Spotify", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=500" },
            { name: "Karthik", loc: "Coimbatore", role: "Analytics Eng", company: "Truecaller", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=500" },
            { name: "Ananya", loc: "Madurai", role: "Data Engineer", company: "Volvo", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=500" },
          ].map((student, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-96 rounded-2xl relative overflow-hidden snap-center group cursor-pointer">
              <img src={student.img} alt={student.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-cyan-500 text-slate-950 px-2 py-0.5 rounded">HIRED</span>
                </div>
                <h3 className="text-lg font-bold text-white">{student.name}</h3>
                <p className="text-sm text-slate-300">{student.loc} ➔ {student.company}</p>
              </div>
              {/* Story Ring */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full border-2 border-pink-500 p-0.5">
                <img src={student.img} className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: The "No-Risk" Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">DataBuffet<span className="text-cyan-400">.io</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                We don't sell courses. We build careers. <br />
                Join the remote revolution from India.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-300">EMI Options Available</span>
                </div>
                <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-300">Scholarships</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to switch lanes?</h3>
              <p className="text-slate-400 mb-6">Take the entrance test to check your eligibility.</p>
              <button className="w-full bg-white hover:bg-slate-200 text-slate-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Start Entrance Test
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-slate-500 mt-4">
                Curriculum reviewed by CTOs in Sweden 🇸🇪
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2025 DataBuffet.io. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
