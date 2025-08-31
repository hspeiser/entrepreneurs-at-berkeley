"use client"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"

export default function ChatsPage() {
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
                Connect with E@B Members
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                COFFEE <span className="gradient-text">CHATS</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                Connect with E@B members and learn about our community!
                <br />
                <span className="text-blue-300 font-semibold">Schedule Coffee Chats Below. Please limit to 3 chats. </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Airtable Embed Section */}
        <section className="py-24 bg-gradient-to-b from-background/95 to-background backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
            </motion.div>

            {/* Airtable Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <iframe
                  className="airtable-embed w-full"
                  src="https://airtable.com/embed/apph2byC1IzesgfgC/shrFCyuCjSaIpEL28"
                  frameBorder="0"
                  width="100%"
                  height="800"
                  style={{ background: 'transparent', border: '1px solid #ccc' }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
