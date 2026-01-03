"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 border-t relative z-10 backdrop-blur-xl bg-background/90 text-foreground border-blue-500/20">
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
                    className="rounded-md object-contain"
                  />
                </div>
              </Link>
              <div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                The Leading entrepreneurship org at UC Berkeley. 
                </p>
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground">Sponsored by</p>
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
                    className="transition-colors text-sm text-muted-foreground hover:text-blue-400"
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
            <ul className="space-y-3 text-sm text-muted-foreground">
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
                    className="bg-transparent transition-colors text-muted-foreground hover:text-blue-400 hover:border-blue-500/50"
                  >
                    {social.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm border-t border-blue-500/20 text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Entrepreneurs @ Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
