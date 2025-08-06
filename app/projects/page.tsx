"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github, Lightbulb, Building2, Car, Pill, Users, TrendingUp, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

const featuredProjects = [
  {
    company: "LinkedIn",
    title: "APAC UI/UX Redesign & Product Strategy",
    description: "Rebuilt LinkedIn's user interface to fit various working cultures and age groups in the APAC regions. Designed LinkedIn's comprehensive 18-month product roadmap.",
    category: "UI/UX Design & Strategy",
    impact: "Improved user engagement across diverse cultural contexts",
    icon: Users,
    color: "from-blue-400 to-cyan-400",
    tags: ["UI/UX", "Product Strategy", "Cultural Design", "Roadmapping"]
  },
  {
    company: "Tesla",
    title: "Optimus Robot GTM Strategy",
    description: "Led comprehensive go-to-market strategy for Tesla's Optimus humanoid robot, covering market positioning, technical enablement, and commercialization pathway.",
    category: "AI Commercialization & GTM",
    impact: "Strategic framework for autonomous robotics market entry",
    icon: Car,
    color: "from-red-400 to-pink-400",
    tags: ["GTM Strategy", "Robotics", "AI", "Market Analysis"]
  },
  {
    company: "Pfizer",
    title: "AI-Powered Data Analysis & Vendor Platform",
    description: "Developed ML-powered compliance document analysis system and comprehensive vendor comparison tools for pharmaceutical operations.",
    category: "Enterprise AI & Compliance",
    impact: "Streamlined regulatory compliance and vendor management",
    icon: Pill,
    color: "from-green-400 to-emerald-400",
    tags: ["Machine Learning", "Compliance", "Enterprise AI", "Healthcare"]
  },
]

const projectStats = [
  { number: "15+", label: "Fortune 500 Clients", icon: Building2 },
  { number: "60+", label: "Projects Delivered", icon: TrendingUp },
  { number: "2", label: "YC Companies", icon: BarChart },
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
                REAL IMPACT, REAL RESULTS
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                OUR <span className="gradient-text">PROJECTS</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                Not case studies. Real work delivering value to Fortune 500 companies and industry leaders.
                <br />
                <span className="text-blue-300 font-semibold">This is what elite execution looks like.</span>
              </p>
            </motion.div>

          </div>
        </section>

        {/* Project Stats Section */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-6 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <stat.icon className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                      <div className="text-3xl md:text-4xl font-black text-foreground mb-2 gradient-text">{stat.number}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                FEATURED <span className="gradient-text">WORK</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From AI strategy for autonomous robotics to enterprise compliance systems, 
                our work spans the cutting edge of technology and business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="perspective-1000"
                >
                  <Card className={`p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    <CardContent className="p-0 relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="flex items-center mb-4">
                            <motion.div
                              className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-4 shadow-lg`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <project.icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <div>
                              <div className="text-sm font-bold text-blue-400 uppercase tracking-wider">{project.company}</div>
                              <div className="text-xs text-muted-foreground">{project.category}</div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                            {project.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="mb-6">
                            <div className="text-sm font-semibold text-blue-400 mb-2">IMPACT:</div>
                            <p className="text-muted-foreground">{project.impact}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                          <div className="w-full max-w-md">
                            <motion.div 
                              className={`h-64 bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl relative overflow-hidden`}
                              whileHover={{ rotateY: 5, rotateX: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <project.icon className="h-20 w-20 text-white/80" />
                              </div>
                              <motion.div 
                                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0.8, 0.5] 
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut" 
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                WANT TO <span className="gradient-text">WORK WITH US?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Ready to see what happens when you give world-class problems to world-class builders?
                <br />
                <span className="text-primary font-semibold">Let's build something extraordinary together.</span>
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
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                  >
                    PARTNER WITH US
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 