"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, Lightbulb, Rocket, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

const differentiators = [
  {
    title: "Top-tier, Pre-vetted Talent",
    description:
      "All members are hand-selected builders, designers, and founders from UC Berkeley with experience at companies like Google, TikTok, NVIDIA, Tesla, and Anthropic. Two have gotten into Y-Combinator, 6 into SkyDeck Incubator, we are all student founders. Think of us as a first filter for people you want in your company.",
    icon: Users,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Founder-first Mindset",
    description:
      "Many of us have launched VC-backed startups, participated in Y Combinator, or built and shipped products independently.",
    icon: Rocket,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "High Execution Velocity",
    description:
      "We operate like a lean startup team — fast iterations, clear communication, and product ownership from day one.",
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
      "Every team member commits 20+ hours/week, ensuring consistent progress and professional-grade outcomes.",
    icon: Zap,
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Proven Industry Impact",
    description:
      "We've already delivered value to companies like LinkedIn, TikTok, NVIDIA, Google, Tesla, Salesforce, Coinbase, etc. on strategy, product, and engineering challenges, not case studies, but real work.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-400",
  },
]

const capabilities = [
  {
    category: "Technical",
    skills: [
      {
        title: "LLM-Powered Product Prototyping & Infra Scaling",
        description: "We build internal tools and experimental AI agents that integrate with enterprise workflows, often in security-conscious or high-velocity environments.",
        examples:
          "MCP + Context Management for Block, Members have built generative agents for compliance (Delve, YC), voice AI (Retell, YC), and user behavior tracking (Human Behaviors, YC), Generative AI Optimization and Software (Relixir, YC).",
      },
      {
        title: "ML and UI/UX Design",
        description:
          "Strong at bridging ML models with usable interfaces, especially for CV, summarization, and workplace productivity tools.",
        examples: 'Created a vision-based video summarizer; prototyped Chrome\'s "Help Me Write" tool at Google, rebuilt LinkedIn\'s user interface to fit various working cultures and age groups in the APAC Regions.',
      },
      {
        title: "AI Growth and Tooling for Enterprises/Regulated Industries",
        description:
          "We are at the frontier of Enterprise AI: We help enterprises align ML applications with compliance, safety, and policy standards.",
        examples: "Used ML for compliance doc analysis; Data Cleaning Tool + Vendor Comparisons for Pfizer, Chatbot for J&J, On-Prem Enterprise Multimodal Pipelines for webAI",
      },
      {
        title: "Hardware-Aware AI & Systems Optimization",
        description:
          "We can develop AI systems optimizing real-time performance and edge integration, including multimodal, sensor-based pipelines.",
        examples: "Award-Winning project with Muse (Brain Company), a real-time EEG-to-video AI system using CUDA, ChromaDB, LangChain, and biometric feedback; Project accelerating object identification using GPU-optimized ML pipelines and PCA-driven dimensionality reduction, Project for UC Berkeley optimizing Quantum Superconducting Chips",
      },
    ],
  },
  {
    category: "Strategy",
    skills: [
      {
        title: "AI Commercialization & GTM for Deep Tech",
        description:
          "We help teams bring technically complex products like LLM copilots or autonomous systems to market, from positioning to technical enablement, bringing a special edge being founders of AI startups and primary users of AI products.",
        examples: "Led Tesla Optimus GTM strategy; PBS Gen AI strategy, Members have led growth for AI startups (Mercor, Boardy.AI, Anthropic), helped Google launch NotebookLM for enterprise",
      },
      {
        title: "Market Sizing + Ecosystem Mapping for Technical Products",
        description:
          "We help companies understand new markets and build feature roadmaps through competitive analysis, user research, and modeling.",
        examples:
          "Market and product expansion into adjacent verticals for Legal AI startup Clio, Partner + API Integrations Ecosystem Analysis for Series C FinTech Startup RevenueCat, Designed LinkedIn's 18-month product roadmap; sized Southeast Asia for Spotify, Analysis of AI + Software Integrations for Zoom",
      },
      {
        title: "Scouting Top Talent in the Bay Area",
        description:
          "We have direct access to Berkeley's top builders first through our own members + our network",
        examples: "Two of our members joined YC this semester, Partnered with a16z, Z-Fellows, Pear, Berkeley SkyDeck, etc, Members part of national builder orgs (Soma Capital, Entrepreneur First, Pear Garage Fellows, etc)",
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralNetworkCanvas />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/person_giving_talk.jpg"
              alt="E&B Speaker Presentation"
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
                <Zap className="w-4 h-4 mr-2" />
                E@B
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                ABOUT <span className="gradient-text">US</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                We are a community of builders, innovators, and leaders at UC Berkeley, united by a passion for entrepreneurship.
                <br />
                <span className="text-blue-300 font-semibold">What We Do and Why</span>
              </p>
            </motion.div>

          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <Card className="p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-black text-foreground mb-4 flex items-center">
                      <Rocket className="w-6 h-6 text-blue-400 mr-3" />
                      THE <span className="gradient-text ml-2">MISSION</span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We don't just build startups. <span className="text-primary font-semibold">We forge empires.</span> E@B is Berkeley's most exclusive 
                      launchpad where the university's top 1% of builders transform ambitious ideas into world-changing companies. 
                      No fluff. No pretense. Just pure execution velocity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm flex-1">
                  <CardContent className="p-0 h-full flex flex-col">
                    <h3 className="text-2xl font-black text-foreground mb-4 flex items-center">
                      <Target className="w-6 h-6 text-blue-400 mr-3" />
                      WHO WE <span className="gradient-text ml-2">ARE</span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                      We're not students playing startup. <span className="text-primary font-semibold">We're builders who happen to be students.</span> 
                      Our members are already shipping products, raising capital, and working at companies like Google, Tesla, and NVIDIA. 
                      We collaborate at the speed of Silicon Valley, not academia.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-black text-foreground mb-2">50+</div>
                    <div className="text-sm text-blue-400 font-medium">ELITE MEMBERS</div>
                    <div className="text-xs text-muted-foreground mt-1">Hand-picked builders</div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-black text-foreground mb-2">2</div>
                    <div className="text-sm text-green-400 font-medium">Y COMBINATOR</div>
                    <div className="text-xs text-muted-foreground mt-1">Elite accelerator admits</div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-black text-foreground mb-2">6</div>
                    <div className="text-sm text-purple-400 font-medium">BERKELEY SKYDECK</div>
                    <div className="text-xs text-muted-foreground mt-1">Incubator acceptances</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-20 max-w-6xl mx-auto"
            >
              <Card className="p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut" 
                  }}
                />
                <CardContent className="p-0 relative z-10">
                  <h3 className="text-2xl font-black text-foreground mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-blue-400 mr-3" />
                    THE <span className="gradient-text ml-2">ADVANTAGE</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Direct pipelines to <span className="text-primary font-semibold">Silicon Valley VCs.</span> Alumni networks at 
                    <span className="text-primary font-semibold"> Google, Tesla, NVIDIA.</span> Internal incubator programs that 
                    fast-track members into Y Combinator and seed funding. We don't just teach entrepreneurship—
                    <span className="text-primary font-semibold"> we ARE the entrepreneurship ecosystem at Berkeley.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* What Differentiates Us */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                WHAT SETS US <span className="gradient-text">APART</span>
              </h2>
              <p className="text-xl text-muted-foreground">We're not your typical student organization</p>
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

        {/* Community Photos */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                OUR COMMUNITY IN <span className="gradient-text">ACTION</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From founder dinners to pitch competitions, we're always building together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  src: "/202411241117_E@BClubShoot_0702_5D Mark IV.jpg",
                  title: "Professional Sessions",
                  subtitle: "Strategic planning and execution",
                },
                {
                  src: "/skydeck_people.jpeg",
                  title: "SkyDeck Partnerships",
                  subtitle: "Berkeley's premier incubator program",
                },
                {
                  src: "/dude_looking_focused.JPG",
                  title: "Individual Excellence",
                  subtitle: "Focused dedication to craft",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative group overflow-hidden rounded-2xl perspective-1000"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.subtitle}</p>
                    </motion.div>
                    <motion.div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                READY TO JOIN OUR <span className="gradient-text">COMMUNITY?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                We're always looking for exceptional builders who want to make a real impact.
                <br />
                <span className="text-primary font-semibold">The future belongs to those who build it.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/recruitment" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                    >
                      View Recruitment
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/projects" onClick={() => window.scrollTo(0, 0)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                    >
                      See Our Work
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background/95 to-background text-foreground py-20 border-t border-blue-500/20 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 relative">
                  <Image
                    src="/eb-logo.png"
                    alt="Entrepreneurs @ Berkeley Logo"
                    fill
                    className="rounded-md object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Entrepreneurs @ Berkeley</span>
              </motion.div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building the next generation of founders and innovators.
                <span className="text-primary font-semibold"> We mean business.</span>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "/about" },
                  { name: "Projects", href: "/projects" },
                  { name: "Join Us", href: "/recruitment" }
                ].map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href={item.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-muted-foreground hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>UC Berkeley Campus</li>
                <li>Berkeley, CA 94720</li>
                <li className="text-blue-400">hello@eab.berkeley.edu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Follow Us</h3>
              <div className="flex space-x-3">
                {["LinkedIn", "Twitter"].map((social) => (
                  <motion.div key={social} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-muted-foreground hover:text-blue-400 hover:border-blue-500/50 bg-transparent"
                    >
                      {social}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Entrepreneurs @ Berkeley. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
