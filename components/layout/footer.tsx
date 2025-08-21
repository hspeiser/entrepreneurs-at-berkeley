import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background/95 to-background text-foreground py-20 border-t border-blue-500/20 relative z-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-32 h-32 relative">
                  <Image src="/logo_footer.png" alt="E@B Logo" fill className="rounded-md object-contain" />
                </div>
              </Link>
              <div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                The Leading entrepreneurship org at UC Berkeley. 
                </p>
                <div className="mt-3">
                  <p className="text-muted-foreground text-xs">Sponsored by</p>
                  <div className="mt-2 w-32 h-10 relative">
                    <Image src="/partners/haas.svg" alt="Haas logo" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
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
              <li>For any club inquiries:</li>
              <li>Email</li>
              <li className="text-blue-400"> vihaanm@berkeley.edu or calebyanchan@berkeley.edu</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Follow Us</h3>
            <div className="flex space-x-3">
              <Link href="https://www.linkedin.com/company/entrepreneurs-berkeley/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-muted-foreground hover:text-blue-400 hover:border-blue-500/50 bg-transparent"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://www.instagram.com/entrepreneursatberkeley/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-muted-foreground hover:text-blue-400 hover:border-blue-500/50 bg-transparent"
                >
                  Instagram
                </Button>
              </Link>
              <Link href="https://x.com/berkeleyhustle" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-muted-foreground hover:text-blue-400 hover:border-blue-500/50 bg-transparent"
                >
                  Twitter
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Entrepreneurs @ Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
