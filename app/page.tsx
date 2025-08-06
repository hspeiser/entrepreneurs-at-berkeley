"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, TrendingUp, Award, ChevronDown, ArrowRight, Zap, Target, Globe, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"
import { Navbar } from "@/components/layout/navbar"

const stats = [
  { number: "2", label: "YC Acceptances", icon: Rocket, description: "Elite accelerator backing" },
  { number: "6", label: "Berkeley SkyDeck", icon: TrendingUp, description: "University incubator success" },
  { number: "50+", label: "Elite Members", icon: Users, description: "Hand-picked world-changers" },
  { number: "60+", label: "Startups Launched", icon: Award, description: "Companies changing the world" },
]

const allCompanies = [
  { name: "Google", logo: "/logos/google.svg", color: "#4285f4" }, // Google Blue
  { name: "Salesforce", logo: "/logos/salesforce.svg", color: "#00a1e0" }, // Salesforce Blue
  { name: "NVIDIA", logo: "/logos/nvidia.svg", color: "#76b900" }, // NVIDIA Green
  { name: "TikTok", logo: "/logos/tiktok.svg", color: "#ff0050" }, // TikTok Pink
  { name: "Tesla", logo: "/logos/tesla.svg", color: "#cc0000" }, // Tesla Red
  { name: "Apple", logo: "/logos/apple.svg", color: "#007aff" }, // Apple Blue
  { name: "Rivian", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rivian_logo_and_wordmark.svg", color: "#0073e6" }, // Rivian Blue
  { name: "Nike", logo: "/logos/nike-swoosh.svg", color: "#ff6900" }, // Nike Orange
  { name: "BCG", logo: "/logos/bcg-logo.svg", color: "#0073a8" }, // BCG Blue
  { name: "McKinsey", logo: "/logos/mckinsey-logo.svg", color: "#005587" }, // McKinsey Blue
  { name: "Deloitte", logo: "/logos/deloitte-logo.svg", color: "#86bc25" }, // Deloitte Green
  { name: "Accenture", logo: "/logos/accenture.svg", color: "#a100ff" }, // Accenture Purple
  { name: "Zoom", logo: "/logos/zoom.svg", color: "#2d8cff" }, // Zoom Blue
  { name: "Amazon", logo: "/logos/amazon-logo.svg", color: "#ff9900" }, // Amazon Orange
  { name: "Microsoft", logo: "/logos/microsoft-logo.svg", color: "#00bcf2" }, // Microsoft Blue
  { name: "JPMorgan", logo: "/logos/jpmorgan.svg", color: "#005cb9" }, // JPMorgan Blue
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "We move at the speed of innovation. No bureaucracy, no red tape, just results.",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Every action, every decision, every connection is calculated for maximum impact.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our network spans continents. Your ideas will reach the world.",
  },
  {
    icon: Crown,
    title: "Elite Standards",
    description: "We don't just meet expectations. We shatter them. Every single time.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <NeuralNetworkCanvas />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                ELITE ENTREPRENEURSHIP COMMUNITY
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight"
            >
              WE BUILD
              <br />
              <span className="gradient-text">WORLD-CHANGERS.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light"
            >
              UC Berkeley's most exclusive launchpad for the next generation of founders. 
              <br />
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/recruitment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold w-full sm:w-auto animate-pulse-glow"
                >
                  JOIN THE ELITE
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 w-full sm:w-auto bg-transparent backdrop-blur-sm"
                >
                  SEE OUR IMPACT
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-blue-400" />
          </motion.div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                <span className="gradient-text">IMPACT</span> BY THE NUMBERS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our track record speaks for itself. We don't just talk about changing the world. 
                <span className="text-primary font-semibold"> We do it.</span>
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-8 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <stat.icon className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                      <div className="text-5xl md:text-6xl font-black text-foreground mb-3 gradient-text">{stat.number}</div>
                      <div className="text-lg font-bold text-foreground mb-2">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                WHY WE'RE <span className="gradient-text">UNSTOPPABLE</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine elite talent with cutting-edge resources to create unstoppable momentum.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <feature.icon className="h-10 w-10 text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/group_photo_make_sure_its_small.jpg"
                    alt="E&B Achievement Moments"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Achievement Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-black text-2xl text-white mb-2">
                        Excellence in Action
                      </h3>
                      <p className="text-blue-200 text-sm">
                        Every member embodies our commitment to world-class execution and innovation.
                      </p>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                ELITE <span className="gradient-text">COMMUNITY</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                50 hand-selected builders, designers, and founders from UC Berkeley. 
                <span className="text-primary font-semibold"> The best of the best.</span>
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  src: "/202411241117_E@BClubShoot_0551_5D Mark IV.jpg",
                  title: "Elite Collaboration",
                  description: "Building the future together"
                },
                {
                  src: "/panel_of_smart_people.jpg",
                  title: "Industry Leaders",
                  description: "Direct access to top executives"
                },
                {
                  src: "/student_giving_talk.JPG",
                  title: "Member Presentations",
                  description: "Sharing knowledge and insights"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <Image
                    src={item.src || "/placeholder.svg?height=300&width=400&query=community+event"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-bold text-2xl text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-20 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-bold uppercase text-blue-400 tracking-widest mb-4">
                OUR ALUMNI BUILD AT THE BEST
              </h2>
              <p className="text-2xl font-bold text-foreground">
                From startups to <span className="gradient-text">global empires</span>
              </p>
            </motion.div>
          </div>
          
          <div className="w-full relative overflow-hidden py-8">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Infinite scrolling container */}
            <div className="flex animate-infinite-scroll">
              {/* First set of logos */}
              {allCompanies.map((company, index) => (
                <div
                  key={`logo-first-${company.name}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center w-48 h-24"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={180}
                    height={75}
                    className="opacity-60 hover:opacity-90 transition-opacity duration-300 object-contain brightness-0 invert"
                    style={{
                      filter: 'brightness(0) invert(1) opacity(0.6)',
                      maxWidth: '180px',
                      maxHeight: '75px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {allCompanies.map((company, index) => (
                <div
                  key={`logo-second-${company.name}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center w-48 h-24"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={180}
                    height={75}
                    className="opacity-60 hover:opacity-90 transition-opacity duration-300 object-contain brightness-0 invert"
                    style={{
                      filter: 'brightness(0) invert(1) opacity(0.6)',
                      maxWidth: '180px',
                      maxHeight: '75px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
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
                READY TO <span className="gradient-text">CHANGE THE WORLD?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Join Berkeley's most exclusive entrepreneurship community and transform your ideas into reality.
                <br />
                <span className="text-primary font-semibold">The future belongs to those who build it.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/recruitment">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                  >
                    APPLY NOW
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                  >
                    LEARN MORE
                  </Button>
                </Link>
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
              <div className="flex items-center space-x-3 mb-6">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 relative">
                    <Image src="/eb-logo.png" alt="E@B Logo" fill className="rounded-md object-contain" />
                  </div>
                  <span className="font-bold text-xl">Entrepreneurs @ Berkeley</span>
                </Link>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Forging the future, one startup at a time. 
                <span className="text-primary font-semibold"> We mean business.</span>
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {["About", "Projects", "Join Us"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-blue-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
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
                  <Button
                    key={social}
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground hover:text-blue-400 hover:border-blue-500/50 bg-transparent"
                  >
                    {social}
                  </Button>
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
