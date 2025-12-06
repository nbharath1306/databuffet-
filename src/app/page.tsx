'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Code2, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  Menu, 
  X,
  Database,
  Users
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#006AA7] rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#FECC00]" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">DataBuffet.io</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-slate-600 hover:text-[#006AA7] font-medium transition-colors">Program</a>
              <a href="#mentorship" className="text-slate-600 hover:text-[#006AA7] font-medium transition-colors">Mentorship</a>
              <a href="#founders" className="text-slate-600 hover:text-[#006AA7] font-medium transition-colors">Founders</a>
              <button className="bg-[#006AA7] hover:bg-[#005a8f] text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Apply for Entrance Test
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#program" className="block px-3 py-2 text-slate-600 font-medium">Program</a>
              <a href="#mentorship" className="block px-3 py-2 text-slate-600 font-medium">Mentorship</a>
              <a href="#founders" className="block px-3 py-2 text-slate-600 font-medium">Founders</a>
              <button className="w-full mt-4 bg-[#006AA7] text-white px-6 py-3 rounded-lg font-semibold">
                Apply for Entrance Test
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* SECTION 1: The "Possibility" Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50 -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FECC00]/5 skew-x-12 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#006AA7] font-semibold text-sm mb-8">
              <Globe className="w-4 h-4" />
              <span>Headquartered in Stockholm | Operations in Hyderabad</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Don't Just Graduate. <br />
              <span className="text-[#006AA7]">Go Global.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your college placement cell can get you a 3 LPA job. We bridge you to <span className="font-semibold text-slate-900">Swedish Startups</span> paying in Euros. Work remotely from India.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#006AA7] hover:bg-[#005a8f] text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Check Your Scholarship Eligibility
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500 mt-2 sm:mt-0">
                <span className="font-semibold text-[#006AA7]">120+</span> students placed this year
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The "Pain Point" (The Service Trap) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why the Standard Path is Broken</h2>
            <p className="text-lg text-slate-600">The gap between college curriculum and industry reality is widening.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Path */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-red-100 bg-red-50/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-slate-800">The Old Path</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Mass Recruiters (TCS/Infosys/Wipro)",
                  "3-6 Months Bench Period",
                  "Legacy Tech (Mainframe, Support)",
                  "Fixed Salary (3-4 LPA)",
                  "No International Exposure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The DataBuffet Path */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#006AA7]/20 bg-blue-50/50 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FECC00]/10 rounded-bl-full -mr-4 -mt-4" />
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#006AA7]" />
                <h3 className="text-2xl font-bold text-slate-800">The DataBuffet Path</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Product Companies & Startups",
                  "Direct Impact from Day 1",
                  "Modern Stack (Snowflake, Airflow, DBT)",
                  "Earn in Euros (Remote)",
                  "Global Networking & Mentorship"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#006AA7] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The "Vernacular" USP */}
      <section id="mentorship" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FECC00]/20 text-[#FECC00] font-semibold text-sm mb-6">
                <Languages className="w-4 h-4" />
                <span>Native Language Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                English Code. <br />
                <span className="text-[#FECC00]">Desi Mentorship.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We know learning complex topics is harder in a second language. Our mentors explain concepts in <span className="text-white font-semibold">Tamil, Telugu, and Hindi</span>, but train you to present in English for international clients.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Tamil Mentorship', 'Telugu Mentorship', 'Hindi Mentorship'].map((lang) => (
                  <div key={lang} className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm font-medium">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl font-bold">S</div>
                  <div>
                    <h4 className="font-bold">Suresh K.</h4>
                    <p className="text-sm text-slate-400">Mentor (Ex-Swiggy)</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"I explain Airflow DAGs in Telugu first. Once the logic clicks, we switch to English for the code review. It just works."</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md translate-x-4 md:translate-x-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl font-bold">P</div>
                  <div>
                    <h4 className="font-bold">Priya R.</h4>
                    <p className="text-sm text-slate-400">Mentor (Ex-Freshworks)</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"Understanding the 'Why' is crucial. We break down Distributed Computing concepts in Tamil before diving into Snowflake architecture."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Roadmap */}
      <section id="program" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Journey to a Global Career</h2>
            <p className="text-lg text-slate-600">A structured path from campus to remote work.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Code2 className="w-8 h-8 text-[#006AA7]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Intense Training</h3>
                <p className="text-sm text-[#006AA7] font-semibold mb-4">3 MONTHS</p>
                <p className="text-slate-600 mb-4">Master niche Data Engineering skills that are in high demand globally.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Airflow</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Snowflake</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">DBT</span>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Briefcase className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Shadow Internship</h3>
                <p className="text-sm text-yellow-600 font-semibold mb-4">2 MONTHS</p>
                <p className="text-slate-600">Work on cloned projects from real Swedish companies. Gain production-grade experience.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Remote Placement</h3>
                <p className="text-sm text-green-600 font-semibold mb-4">ONGOING</p>
                <p className="text-slate-600">Secure freelance or contract work with European startups. Earn in Euros while living in India.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Social Proof (The Founders) */}
      <section id="founders" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bridging Two Worlds</h2>
            <p className="text-lg text-slate-600">We are physically present in both ecosystems to ensure your success.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden relative">
                 {/* Placeholder for Founder Image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The Bridge in Sweden</h3>
              <p className="text-[#006AA7] font-medium mb-4">Co-Founder, Stockholm</p>
              <p className="text-slate-600">"I'm on the ground in Stockholm, meeting with CTOs and Founders to open doors for our students. I ensure the curriculum matches exactly what European tech companies need right now."</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden relative">
                 {/* Placeholder for Founder Image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The Guide in India</h3>
              <p className="text-[#006AA7] font-medium mb-4">Co-Founder, Hyderabad</p>
              <p className="text-slate-600">"I understand the challenges of Tier 2/3 college students. My job is to build your confidence, polish your skills, and prepare you to deliver world-class work from home."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: The "Fear of Missing Out" (Pricing/Scholarship) */}
      <section className="py-24 bg-[#006AA7] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FECC00] rounded-full blur-3xl opacity-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We invest in you, if you have the fire.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            We don't ask for upfront tuition fees that burden your family. Our model is built on trust and shared success.
          </p>

          <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-[#006AA7]" />
              <h3 className="text-2xl font-bold">Merit-Based Scholarship</h3>
            </div>
            <p className="text-slate-600 mb-8">
              Apply for our entrance exam. Top performers get <span className="font-bold text-[#006AA7]">100% scholarship</span> or <span className="font-bold text-[#006AA7]">Income Share Agreements</span> (Pay only after you get hired).
            </p>
            
            <div className="space-y-4">
              <button className="w-full px-8 py-4 bg-[#FECC00] hover:bg-[#e6b800] text-slate-900 text-lg font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                Apply for Entrance Test Now
              </button>
              <p className="text-sm text-slate-500">Limited seats for the upcoming cohort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#006AA7] rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#FECC00]" />
                </div>
                <span className="font-bold text-xl text-white">DataBuffet.io</span>
              </div>
              <p className="max-w-xs">Bridging talent from India to the European Tech Ecosystem.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Program</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 DataBuffet.io. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <MapPin className="w-4 h-4" />
              <span>Stockholm • Hyderabad</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
