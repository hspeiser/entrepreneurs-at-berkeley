"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Target, CheckCircle, TrendingUp, Rocket, Globe, Award, ArrowUpRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import { useRef } from "react"

const timeline = [
  {
    phase: "Coffee Chats",
    date: "Aug 27 - Sep 5",
    description: "1:1 Chats with E@B Members, get to know us!",
    status: "upcoming",
  },
  {
    phase: "Tabling",
    date: "Aug 27 - Sep 5",
    description: "Visit our table on campus and meet our members!",
    status: "upcoming",
  },
  {
    phase: "Infosession 1",
    date: "Sep 2, 6 - 8 PM @ bNorth 82D (MLK)",
    description: "Learn about what we do, our mission, and our community!",
    status: "upcoming",
  },
  {
    phase: "Infosession 2",
    date: "Sep 3, 8 - 10 PM @ Dwinelle 247",
    description: "Same info as first one, feel free to come to one!",
    status: "upcoming",
  },
  {
    phase: "Diversity Night",
    date: "Sep 4, 6 - 8 PM @ bNorth 82D (MLK)",
    description: "Learn about our values, members, interview process, and get your apps reviewed!",
    status: "upcoming",
  },
  {
    phase: "Applications Due",
    date: "Sep 5, 6pm",
    description: "Final deadline for submitting apps, make sure to submit by 6pm!",
    status: "upcoming",
  },
]

const requirements = [
  "UC Berkeley student (any year, any major)",
  "Great to have experience in building/shipping, but not required",
  "Portfolio of any technical, growth, or strategic work (can be anything)",
  "Passion for entrepreneurship and innovation (we're looking for people who are excited to build)",
]

const whatWeOffer = [
  {
    title: "Incubator",
    description: "Full startup incubation with mentorship and resources",
    icon: Rocket,
  },
  {
    title: "VC Events",
    description: "Exclusive access to investor pitch events and networking",
    icon: TrendingUp,
  },
  {
    title: "Founder Dinners",
    description: "Monthly dinners with successful entrepreneurs and VCs",
    icon: Users,
  },
  {
    title: "Community",
    description: "Elite network of builders, designers, and founders",
    icon: Globe,
  },
  {
    title: "Demo Day",
    description: "Showcase your projects to industry leaders and investors",
    icon: Award,
  },
  {
    title: "Build Track",
    description: "Structured program for shipping products and startups",
    icon: Target,
  },
  {
    title: "Consulting",
    description: "Real client work with top companies and startups",
    icon: Calendar,
  },
  {
    title: "Social",
    description: "Fun socials, retreats, and team bonding",
    icon: Users,
  },
]

export default function RecruitmentPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0b1c3d] overflow-x-hidden selection:bg-[#1b44b5] selection:text-white">
      <Navbar />

      {/* Main Content */}
      <main className="relative pt-24 pb-0" ref={containerRef}>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-end px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-[3rem] mb-24 bg-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/group_photo_big_ok.jpg"
              alt="E@B Community Group"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b44b5]/10 border border-[#1b44b5]/20 text-[#1b44b5] text-sm font-bold mb-6">
                <Clock className="w-4 h-4" />
                APPS DUE 9/5
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#0b1c3d] mb-6 leading-[0.9] tracking-tight mix-blend-color-burn">
                JOIN E@B
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-700 mb-10 max-w-3xl font-medium leading-tight">
                We're looking for builders, thinkers, and dreamers who want to create the future.
              </p>
              <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-[#0b1c3d] text-white rounded-2xl font-bold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-[#1b44b5]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Recruitment Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-[#0b1c3d] mb-4">
                Recruitment Timeline
              </h2>
              <p className="text-xl text-slate-600">Mark your calendars for these key dates</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, index) => {
                const Component = item.phase === "Coffee Chats" ? Link : "div"
                const props = item.phase === "Coffee Chats" ? { href: "/chats" } : {}
                
                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Component {...props}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className={`relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#1b44b5]/30 transition-all duration-300 h-full ${
                          item.phase === "Coffee Chats" ? "cursor-pointer" : ""
                        }`}
                      >
                        {item.phase === "Applications Due" && (
                          <div className="absolute -top-2 -right-2 px-3 py-1 bg-[#1b44b5] text-white text-xs font-bold rounded-full">
                            DEADLINE
                          </div>
                        )}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-black text-[#0b1c3d]">{item.phase}</h3>
                          {item.phase === "Coffee Chats" && <ArrowUpRight className="w-5 h-5 text-[#1b44b5]" />}
                        </div>
                        <p className="text-sm font-bold text-[#1b44b5] mb-3">{item.date}</p>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </Component>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <h2 className="text-5xl md:text-6xl font-black text-[#0b1c3d] mb-6">
                  Who We're Looking For
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  We're looking for students passionate about building impactful products and changing the world.
                </p>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1b44b5] mt-2 flex-shrink-0" />
                      <span className="text-slate-700 text-lg leading-relaxed">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/group-pictures/student_giving_talk.JPG"
                    alt="E@B Team Collaboration"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-[#0b1c3d] mb-4">
                What You'll Get
              </h2>
            </motion.div>

            <div className="space-y-3">
              {whatWeOffer.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-6 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#1b44b5] group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="flex-1 flex items-baseline gap-4 flex-wrap">
                      <h3 className="text-2xl font-black text-[#0b1c3d] min-w-[200px]">
                        {item.title}
                      </h3>
                      <p className="text-lg text-slate-600 flex-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0b1c3d] mb-6 leading-tight">
                Ready to Apply?
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
                Applications are now open for <span className="text-[#1b44b5] font-bold">Fall 2025</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-[#0b1c3d] text-white rounded-2xl font-bold text-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Application
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-[#1b44b5]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-[#0b1c3d] rounded-2xl font-bold text-lg border-2 border-slate-200 hover:border-[#1b44b5]/30 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
              <p className="text-slate-500 mt-8 font-medium">Application deadline: September 5, 2025</p>
            </motion.div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
