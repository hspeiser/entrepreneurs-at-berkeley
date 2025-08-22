"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, Lightbulb, Rocket, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"



const capabilities = [
  {
    category: "Technical",
    skills: [
      {
        title: "LLM-Powered Product Prototyping & Infra Scaling",
        description: "We build internal tools and experimental AI agents that integrate with enterprise workflows, often in security-conscious or high-velocity environments.",
        examples:
          "MCP + Context Management for Block, Members have built generative agents for compliance (Delve, YC), voice AI (Retell, YC), and user behavior tracking (Human Behavior, YC), Generative AI Optimization and Software (Relixir, YC).",
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
                    We are Berkeley's first entrepreneurial organization. We want to provide members with elite resources to build and grow their startups. We bring together the next generation of world-revolutionizing entrepreneurs and venture capitalists. 
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
                      We are not just going to help you make a pitch deck. <span className="text-primary font-semibold">We are going to build your product with you and grow fast. </span> 
                      Our members are already shipping products, raising capital, and working at companies like Google, Tesla, and NVIDIA. 
                      Join us and make something great. 
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
                    <div className="text-sm text-blue-400 font-medium"> MEMBERS</div>
                    <div className="text-xs text-muted-foreground mt-1">Hand-picked builders with diverse backgrounds</div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-black text-foreground mb-2">10+</div>
                    <div className="text-sm text-green-400 font-medium">Accelerator Acceptances</div>
                    <div className="text-xs text-muted-foreground mt-1">YC, SkyDeck, Big Ideas, Pear, etc</div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-black text-foreground mb-2">2x</div>
                    <div className="text-sm text-purple-400 font-medium">Acquired</div>
                    <div className="text-xs text-muted-foreground mt-1">UC Berkeley, Corporations, etc.</div>
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
                    Direct pipelines to <span className="text-primary font-semibold">Silicon Valley VCs.</span> A Supportive Community. Alumni networks at 
                    <span className="text-primary font-semibold"> Google, Tesla, NVIDIA.</span> Internal incubator programs that 
                    fast-track members into Y Combinator and seed funding. We don't just teach entrepreneurship—
                    <span className="text-primary font-semibold"> we ARE BUILDING the startup ecosystem at Berkeley.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>



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
                OUR <span className="gradient-text">FAMILY</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From founder dinners to trips to build sessions, socials, and pitch competitions, we do more than just build together, we are a family!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  src: "/202411241117_E@BClubShoot_0702_5D Mark IV.jpg",
                },
                {
                  src: "/calday.JPG",
                },
                {
                  src: "/tahoe.jpg",
                },
                {
                  src: "/picnic.JPG",
                },   
                {
                  src: "/grad.jpg",
                },  
                {
                  src: "/ski.JPG",
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
                      alt="E@B Community"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incubator Section */}
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
                E@B <span className="gradient-text">INCUBATOR</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A ten-week program sponsored by <span className="text-blue-600 font-bold">Techstars</span> that teaches the foundational principles of entrepreneurship
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Education",
                  description: "A carefully planned curriculum, resources, and workshops equip founders with the tools and exposure necessary to gain traction for further growth. The program is structured with sprints and sponsored build sessions to take you across the finish line.",
                },
                {
                  icon: Users,
                  title: "Mentorship",
                  description: "Experienced founders are assigned to each group, providing one-on-one coaching and assistance throughout the whole process of development.",
                },
                {
                  icon: Target,
                  title: "Demo Day",
                  description: "The program culminates in a Demo Day with a panel of judges including YC Advisors, top VCs, and seasoned entrepreneurs. Founders pitch their innovative ideas and potentially win new partnerships and interviews for top-tier accelerators.",
                },
                {
                  icon: Rocket,
                  title: "Community",
                  description: "Direct access to the extensive E@B network including the Ultimate Startup Master Guide, professional connections, workshops, and a welcoming community of like-minded entrepreneurs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-0 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Startups Section */}
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
                FEATURED <span className="gradient-text">STARTUPS</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our members are building the future - here are some of our success stories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Status */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src="/skydeck_people.jpeg"
                        alt="Status - Moffitt Status"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
                          <Rocket className="w-4 h-4 mr-2" />
                          Acquired by UC Berkeley
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Status</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Status is a capacity tracking solution for university libraries and busy spaces. Commonly known to Berkeley students as "Moffitt Status," Status was recently acquired by UC Berkeley and has reached over 3.5K monthly active users since the fall of 2024.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium">
                        SkyDeck Demo Day Winners
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium">
                        Pad-13 Batch 20
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Human Behavior */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src="/skyler.png"
                        alt="Human Behavior - Skyler Ji"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium backdrop-blur-sm">
                          <Zap className="w-4 h-4 mr-2" />
                          YC X25
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Human Behavior</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Human Behavior uses vision models to watch all user web sessions so you know exactly how users use every part of your product. Founded by Skyler Ji (previously E@B DVP), the company was accepted into Y Combinator X25 and has raised $5M in funding.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium">
                        $5M Raised
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium">
                        AI Analytics
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                <span className="text-primary font-semibold">We're always looking for exceptional builders who want to make a real impact.</span>
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
    </div>
  )
}
