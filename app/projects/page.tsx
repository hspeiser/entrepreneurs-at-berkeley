"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github, Lightbulb, Building2, Car, Pill, Users, TrendingUp, BarChart, Target, Rocket, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

const featuredProjects = [
  {
    company: "LinkedIn",
    description: "Rebuilt LinkedIn's user interface for Japan with a Gen-Z focus. Proposed key feature changes, university partnerships and a comprehensive 18-month product roadmap.",
    category: "UI/UX Design & Product Strategy",
    logo: "/linkedin.png",
    color: "from-blue-400 to-cyan-400",
    tags: ["UI/UX", "Product Strategy", "Roadmapping"]
  },
  {
    company: "Tesla",
    description: "Proposed AI-powered energy management system for Tesla stores and dealerships. Used pattern recognition to automatically detect issues and predict which chargers need maintenance before they fail.",
    category: "AI Commercialization & GTM",
    logo: "/tesla.svg",
    color: "from-red-400 to-pink-400",
    tags: ["AI", "Energy Management", "Predictive Analytics"]
  },
  {
    company: "PBS",
    description: "Strategic analysis for PBS Kids to enhance engagement across the United States. Examined Gen Z content consumption habits, social media's role, vertical video trends, and AI's potential impact on educational content.",
    category: "AI Strategy & Market Research",
    logo: "/pbs.png",
    color: "from-green-400 to-emerald-400",
    tags: ["AI Strategy", "Market Research", "Gen Z"]
  },
]



const differentiators = [
  {
    title: "Top-tier Talent",
    description:
      "All members are hand-selected builders, designers, and founders from UC Berkeley. Think of us as a first filter for people you want in your company.",
    icon: Users,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Founder-first Mindset",
    description:
      "Many of us have launched VC-backed startups, participated in Y Combinator, or built and shipped high-impactproducts.",
    icon: Rocket,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "High Execution Velocity",
    description:
      "We operate like a lean startup team: fast iterations, clear communication, and product ownership from day one.",
    icon: Target,
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Multi-disciplinary Skill Sets",
    description:
      "Our teams blend deep technical knowledge (ML, infra, AI agents) with strategic thinking (GTM, ops, AI commercialization).",
    icon: Lightbulb,
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Real Project Commitment",
    description:
      "Every team member commits 10+ hours/week, ensuring consistent progress and high-quality outcomes.",
    icon: Zap,
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Proven Industry Impact",
    description:
      "We've already delivered value to 15+ Fortune 500 Companies and high growth startups across Finance, Healthcare, and Technology.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-400",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NeuralNetworkCanvas />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/202411241117_E@BClubShoot_0542_5D Mark IV.jpg"
              alt="E&B Professional Team Meeting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                WORK WITH INDUSTRY LEADERS
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                OUR <span className="gradient-text">PROJECTS</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                Not case studies. Delivering real value to Fortune 500 companies and high-growth startups.
                <br />
                <span className="text-blue-300 font-semibold">We ship fast.</span>
              </p>
            </motion.div>

          </div>
        </section>

        {/* Our Past Clients */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                OUR PAST <span className="gradient-text">CLIENTS</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've worked with industry leaders, startups and Fortune 500 companies across technology, finance, and healthcare
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative max-w-6xl w-full">
                <Image
                  src="/clients.png"
                  alt="Our Past Clients - Fortune 500 Companies and Industry Leaders"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                WHAT WE <span className="gradient-text">OFFER</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We do both technical and strategy projects, delivering end-to-end solutions with elite execution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <h3 className="text-2xl font-black text-foreground mb-6 flex items-center">
                      <Users className="w-6 h-6 text-blue-400 mr-3" />
                      DELIVERY <span className="gradient-text ml-2">TEAMS</span>
                    </h3>
                    <div className="space-y-4 text-muted-foreground flex-1">
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">End-to-end delivery teams of 5–6 students,</span> each led by a dedicated project lead
                      </p>
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Weekly syncs and sprints</span> with clear milestones and demo-ready progress, adapting to your team
                      </p>
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Mid-semester and Final deliverables,</span> slide decks, and clear and concise documentation
                      </p>
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Flexible project start,</span> kick off anytime during semester
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <h3 className="text-2xl font-black text-foreground mb-6 flex items-center">
                      <Lightbulb className="w-6 h-6 text-blue-400 mr-3" />
                      EXPERTISE <span className="gradient-text ml-2">AREAS</span>
                    </h3>
                    <div className="space-y-4 text-muted-foreground flex-1">
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Deep technical expertise</span> in LLMs, agents, dev tools, enterprise infra, and ML systems
                      </p>
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Cross-functional capability</span> across strategy, product, and engineering
                      </p>
                      <p className="text-lg leading-relaxed">
                        <span className="text-primary font-semibold">Comprehensive skills</span> spanning business, product GTM, economics, strategy, and product ops
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-8">
                WHAT WE'RE <span className="gradient-text">GOOD AT</span> 
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-black text-foreground mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-blue-400 mr-3" />
                      TECHNICAL
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <h5 className="font-semibold text-foreground text-sm">LLM-Powered Product Prototyping & Infra Scaling</h5>
                      </div>
                      <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <h5 className="font-semibold text-foreground text-sm">ML and UI/UX Design</h5>
                      </div>
                      <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <h5 className="font-semibold text-foreground text-sm">AI Growth and Tooling for Enterprises/Regulated Industries</h5>
                      </div>
                      <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <h5 className="font-semibold text-foreground text-sm">Hardware-Aware AI & Systems Optimization</h5>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-black text-foreground mb-4 flex items-center">
                      <Target className="w-5 h-5 text-purple-400 mr-3" />
                      STRATEGY
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                        <h5 className="font-semibold text-foreground text-sm">AI Commercialization & GTM for Deep Tech</h5>
                      </div>
                      <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                        <h5 className="font-semibold text-foreground text-sm">Market Sizing + Ecosystem Mapping for Technical Products</h5>
                      </div>
                      <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                        <h5 className="font-semibold text-foreground text-sm">Talent Scouting</h5>
                      </div>
                      <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                        <h5 className="font-semibold text-foreground text-sm">Market Segmentation</h5>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                FEATURED <span className="gradient-text">PROJECTS</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="perspective-1000"
                >
                  <Card className="p-6 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group h-full">
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <CardContent className="p-0 relative z-10 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-lg border border-gray-200`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={project.logo}
                            alt={`${project.company} logo`}
                            width={project.company === "Tesla" ? 40 : 24}
                            height={project.company === "Tesla" ? 40 : 24}
                            className={`${project.company === "Tesla" ? "w-10 h-10" : "w-6 h-6"} object-contain`}
                          />
                        </motion.div>
                        <div>
                          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{project.company}</div>
                          <div className="text-xs text-muted-foreground">{project.category}</div>
                        </div>
                      </div>
                      

                      
                                            <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Differentiates Us */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                WHAT SETS US <span className="gradient-text">APART</span>
              </h2>
              <p className="text-xl text-muted-foreground">We're not your typical consulting club.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="perspective-1000"
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm group">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                    />
                    <CardContent className="p-0 relative z-10">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-black text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                WANT TO <span className="gradient-text">WORK WITH US?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Work with top Berkeley builders to provide value to your company
                <br />
                <span className="text-primary font-semibold">Let's build something amazing together.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/recruitment">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                    >
                      JOIN THE TEAM
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="mailto:vihaanm@berkeley.edu">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                    >
                      PARTNER WITH US
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 