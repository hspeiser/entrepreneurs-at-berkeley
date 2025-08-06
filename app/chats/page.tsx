"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User, Search, Filter, Coffee, Users2, Zap } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

interface CoffeeChat {
  id: string
  name: string
  title: string
  company: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  tags: string[]
  status: 'upcoming' | 'completed' | 'cancelled'
}

export default function ChatsPage() {
  const [chats, setChats] = useState<CoffeeChat[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Mock data - replace with Airtable integration
  const mockChats: CoffeeChat[] = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Product Manager",
      company: "Google",
      date: "2024-01-15",
      time: "2:00 PM",
      location: "Blue Bottle Coffee, Berkeley",
      description: "Discussing product strategy for AI-powered search features and career paths in product management.",
      image: "/placeholder-user.jpg",
      tags: ["Product Management", "AI", "Google", "Career"],
      status: "completed"
    },
    {
      id: "2",
      name: "Alex Rodriguez",
      title: "Founder & CEO",
      company: "TechFlow (YC W23)",
      date: "2024-01-20",
      time: "10:30 AM",
      location: "Philz Coffee, Downtown Berkeley",
      description: "Founder insights on building B2B SaaS products and navigating Y Combinator.",
      image: "/placeholder-user.jpg",
      tags: ["Entrepreneurship", "YC", "B2B SaaS", "Funding"],
      status: "upcoming"
    },
    {
      id: "3",
      name: "Dr. Maria Santos",
      title: "Research Scientist",
      company: "Tesla",
      date: "2024-01-25",
      time: "4:00 PM",
      location: "Café Strada, UC Berkeley",
      description: "Exploring applications of ML in autonomous vehicle perception and robotics research opportunities.",
      image: "/placeholder-user.jpg",
      tags: ["Machine Learning", "Autonomous Vehicles", "Research", "Tesla"],
      status: "upcoming"
    }
  ]

  useEffect(() => {
    const fetchChats = async () => {
      setLoading(true)
      try {
        // Try to fetch from Airtable API route
        const response = await fetch('/api/chats')
        if (response.ok) {
          const data = await response.json()
          setChats(data)
        } else {
          // Fallback to mock data if API fails
          console.log("API unavailable, using mock data")
          setChats(mockChats)
        }
      } catch (error) {
        console.error("Error fetching chats:", error)
        // Fallback to mock data
        setChats(mockChats)
      } finally {
        setLoading(false)
      }
    }

    fetchChats()
  }, [])

  const filteredChats = chats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chat.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chat.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesFilter = filterStatus === "all" || chat.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'cancelled': return 'bg-red-500/10 text-red-400 border-red-500/20'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

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
              src="/club_photo_laughing_chat_page.jpg"
              alt="E&B Community Coffee Chat"
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
                <Coffee className="w-4 h-4 mr-2" />
                INDUSTRY CONNECTIONS
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                COFFEE <span className="gradient-text">CHATS</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                Connect with industry leaders, successful founders, and experienced professionals.
                <br />
                <span className="text-blue-300 font-semibold">Real conversations, real insights, real impact.</span>
              </p>
            </motion.div>

          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-16 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search chats by name, company, or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card/50 border-blue-500/20 focus:border-blue-500/40"
                  />
                </div>
                <div className="flex gap-2">
                  {["all", "upcoming", "completed"].map((status) => (
                    <Button
                      key={status}
                      variant={filterStatus === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterStatus(status)}
                      className={`capitalize ${
                        filterStatus === status 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "border-blue-500/20 hover:border-blue-500/40"
                      }`}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coffee Chats Gallery */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <Card className="p-6 bg-card/50 border-blue-500/20">
                      <div className="h-48 bg-muted rounded-lg mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredChats.map((chat, index) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="p-0 bg-gradient-to-br from-card to-card/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full group">
                      <CardContent className="p-0">
                        {/* Header with Image and Status */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full bg-card/80 backdrop-blur-sm border-2 border-blue-500/30 flex items-center justify-center">
                                {chat.image ? (
                                  <Image
                                    src={chat.image}
                                    alt={chat.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                  />
                                ) : (
                                  <User className="h-8 w-8 text-blue-400" />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className={`${getStatusColor(chat.status)} backdrop-blur-sm`}>
                              {chat.status}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <Coffee className="h-6 w-6 text-blue-400" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="text-xl font-black text-foreground mb-1">
                              {chat.name}
                            </h3>
                            <p className="text-sm text-blue-400 font-semibold">
                              {chat.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              @ {chat.company}
                            </p>
                          </div>

                          <div className="space-y-2 mb-4 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(chat.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2" />
                              {chat.time}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2" />
                              {chat.location}
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {chat.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {chat.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-blue-500/20 text-blue-400 hover:border-blue-500/40"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {chat.tags.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-blue-500/20 text-blue-400"
                              >
                                +{chat.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredChats.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <Coffee className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No coffee chats found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
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
                WANT TO <span className="gradient-text">CONNECT?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Ready to learn from industry leaders and expand your network?
                <br />
                <span className="text-primary font-semibold">Great conversations start with great coffee.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-8 font-bold animate-pulse-glow"
                  >
                    <Users2 className="mr-3 h-6 w-6" />
                    JOIN A CHAT
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-8 font-bold border-2 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent backdrop-blur-sm"
                  >
                    <Coffee className="mr-3 h-6 w-6" />
                    HOST A CHAT
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