"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Footer() {
  const pathname = usePathname()
  // Only use dark footer on home page
  const isDarkFooter = pathname === "/"

  return (
    <footer className={cn(
      "py-20 border-t relative z-10 backdrop-blur-sm transition-colors duration-300",
      isDarkFooter 
        ? "bg-gradient-to-b from-background/95 to-background text-foreground border-blue-500/20" 
        : "bg-[#fcfcfc] text-[#0b1c3d] border-slate-200"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-32 h-32 relative">
                  <Image 
                    src="/logo_footer.png" 
                    alt="E@B Logo" 
                    fill 
                    className={cn(
                      "rounded-md object-contain",
                      !isDarkFooter && "invert brightness-0 opacity-80" 
                    )} 
                  />
                </div>
              </Link>
              <div>
                <p className={cn("text-xs leading-relaxed", isDarkFooter ? "text-muted-foreground" : "text-slate-500")}>
                The Leading entrepreneurship org at UC Berkeley. 
                </p>
                <div className="mt-3">
                  <p className={cn("text-xs", isDarkFooter ? "text-muted-foreground" : "text-slate-500")}>Sponsored by</p>
                  <div className="mt-2 w-32 h-10 relative">
                    <Image src="/partners/haas.svg" alt="Haas logo" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Join Us", href: "/recruitment" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors text-sm",
                      isDarkFooter 
                        ? "text-muted-foreground hover:text-blue-400" 
                        : "text-slate-500 hover:text-[#1b44b5]"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Contact</h3>
            <ul className={cn("space-y-3 text-sm", isDarkFooter ? "text-muted-foreground" : "text-slate-500")}>
              <li>For any club inquiries:</li>
              <li>Email</li>
              <li className="text-blue-400"> deeya@berkeley.edu or chenle27@berkeley.edu</li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Follow Us</h3>
            <div className="flex space-x-3">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/company/entrepreneurs-berkeley/posts/?feedView=all" },
                { name: "Instagram", href: "https://www.instagram.com/entrepreneursatberkeley/" },
                { name: "Twitter", href: "https://x.com/berkeleyhustle" }
              ].map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "bg-transparent transition-colors",
                      isDarkFooter
                        ? "text-muted-foreground hover:text-blue-400 hover:border-blue-500/50"
                        : "text-slate-500 border-slate-200 hover:text-[#1b44b5] hover:border-[#1b44b5]/50 hover:bg-slate-50"
                    )}
                  >
                    {social.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className={cn(
          "pt-8 text-center text-sm border-t",
          isDarkFooter 
            ? "border-blue-500/20 text-muted-foreground" 
            : "border-slate-200 text-slate-400"
        )}>
          <p>&copy; {new Date().getFullYear()} Entrepreneurs @ Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
