"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ChatsPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0b1c3d] overflow-x-hidden selection:bg-[#1b44b5] selection:text-white">

      <main className="relative pt-24 pb-0">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-24 bg-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/group-pictures/fit-group.jpg"
              alt="E@B Group Photo"
              fill={false}
              width={1600}
              height={900}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0b1c3d] mb-6 leading-tight mix-blend-color-burn">
                COFFEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b44b5] to-[#3b82f6]">CHATS</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto font-medium">
                Connect with E@B members and learn about our community!
                <br />
                <span className="text-[#1b44b5] font-semibold">Schedule Coffee Chats Below. Please limit to 3 chats. </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Airtable Embed Section */}
        <section className="py-24 bg-white">
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
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
                <iframe
                  className="airtable-embed w-full"
                  src="https://airtable.com/embed/apph2byC1IzesgfgC/shrFCyuCjSaIpEL28"
                  frameBorder="0"
                  width="100%"
                  height="800"
                  style={{ background: 'transparent', border: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
