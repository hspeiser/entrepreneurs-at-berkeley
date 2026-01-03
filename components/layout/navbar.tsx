"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 10)
      
      // On home page, show navbar after scrolling past hero (~600px)
      if (isHomePage) {
        setShowNavbar(scrollY > 600)
      } else {
        setShowNavbar(true)
      }
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Chats", href: "/chats" },
    { name: "Join Us", href: "/recruitment" }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showNavbar ? 0 : -100, 
          opacity: showNavbar ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-500",
          scrolled 
            ? "bg-background/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg" 
            : "bg-transparent",
          !showNavbar && "pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-64 h-64 relative group-hover:scale-110 transition-transform duration-300 mt-4">
                <Image src="/eb-header-logo.svg" alt="E@B Logo" fill className="rounded-md object-contain" />
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
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
              <Button 
                variant="outline" 
                size="sm" 
                className="mobile-menu-button border-blue-500/30 text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mobile-menu absolute right-0 top-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-blue-500/20 shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mobile-menu-button text-blue-400 hover:text-blue-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={24} />
                  </Button>
                </div>
                
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block text-lg font-semibold text-muted-foreground hover:text-blue-400 transition-colors py-3 border-b border-blue-500/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-blue-500/10"
                  >
                    <Link 
                      href="https://forms.gle/Py8cwGjt3kJCrRLH7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-blue-500/30 text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10 bg-transparent font-semibold py-3 transition-all duration-300"
                      >
                        Application
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
