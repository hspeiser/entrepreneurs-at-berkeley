"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Users, Target, CheckCircle, TrendingUp, Zap, Rocket, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

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
    date: "Sep 2, 8 - 10 PM",
    description: "Learn about what we do, our mission, and our community!",
    status: "upcoming",
  },
  {
    phase: "Infosession 2",
    date: "Sep 3, 8 - 10 PM",
    description: "Same info as first one, feel free to come to one!",
    status: "upcoming",
  },
  {
    phase: "Diversity Night",
    date: "Sep 4, 8 - 10 PM",
    description: "Learn about our values and get your apps reviewed!",
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
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "VC Events",
    description: "Exclusive access to investor pitch events and networking",
    icon: TrendingUp,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Founder Dinners",
    description: "Monthly dinners with successful entrepreneurs and VCs",
    icon: Users,
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Community",
    description: "Elite network of builders, designers, and founders",
    icon: Globe,
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Demo Day",
    description: "Showcase your projects to industry leaders and investors",
    icon: Award,
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Build Track",
    description: "Structured program for shipping products and startups",
    icon: Target,
    color: "from-emerald-400 to-teal-400",
  },
  {
    title: "Consulting",
    description: "Real client work with top companies and startups",
    icon: Calendar,
    color: "from-indigo-400 to-purple-400",
  },
  {
    title: "Social",
    description: "Fun socials, retreats, and team bonding",
    icon: Users,
    color: "from-pink-400 to-rose-400",
  },
]

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralNetworkCanvas />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/group_photo_big_ok.jpg"
              alt="E&B Community Group"
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
                APPS DUE 9/5!
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                JOIN THE <span className="gradient-text">MISSION</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                We are looking for the ambitious, the relentless, and the visionary.
                <br />
                <span className="text-blue-300 font-semibold">If you want to build, you belong here.</span>
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                  >
                    APPLY NOW
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Builder/Visionary Cards Section */}


        {/* Recruitment Timeline */}
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
                <span className="gradient-text">RECRUITMENT</span> TIMELINE
              </h2>
              <p className="text-xl text-muted-foreground">Come to our recruitment events and learn more about us!</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    {item.phase === "Coffee Chats" ? (
                      <Link href="/chats">
                        <Card className="p-6 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:scale-105">
                          <CardContent className="p-0">
                            <div className="flex items-center justify-between mb-4">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {item.phase}
                              </div>
                              <span className="text-sm text-muted-foreground">{item.date}</span>
                            </div>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ) : (
                      <Card className="p-6 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="flex items-center justify-between mb-4">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {item.phase}
                            </div>
                            <span className="text-sm text-muted-foreground">{item.date}</span>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                  WHAT WE'RE <span className="gradient-text">LOOKING FOR</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We are looking for students passionate about building impactful products and changing the world!
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className={`text-muted-foreground ${requirement.startsWith("Passion for entrepreneurship and innovation") ? "font-bold" : ""}`}>{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/student_giving_talk.JPG"
                    alt="E&B Team Collaboration"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
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
                WHAT WE <span className="gradient-text">OFFER</span>
              </h2>
              <p className="text-xl text-muted-foreground">Exclusive opportunities and experiences for our members</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {whatWeOffer.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="perspective-1000"
                >
                  <Card className="p-6 text-center h-full bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm group">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                    />
                    <CardContent className="p-0 relative z-10">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                READY TO <span className="gradient-text">APPLY?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                <span className="text-primary font-semibold">Applications are now open for Fall 2025.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                    >
                      Submit Application
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/about" onClick={() => window.scrollTo(0, 0)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <p className="text-muted-foreground mt-8 text-sm">Application deadline: September 5, 2025</p>
            </motion.div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
