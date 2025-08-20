"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-500",
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg" 
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-64 h-64 relative group-hover:scale-110 transition-transform duration-300 mt-4">
              <Image src="/logo_header.png" alt="E@B Logo" fill className="rounded-md object-contain" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Chats", href: "/chats" },
              { name: "Join Us", href: "/recruitment" }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors font-semibold text-sm uppercase tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-500/30 text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  Application
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-400">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
