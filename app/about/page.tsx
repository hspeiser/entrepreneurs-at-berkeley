"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb, Rocket, Zap, Award, Globe, Briefcase, Heart, BookOpen, Layers, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { number: "50+", label: "Members", sub: "Hand-picked builders" },
  { number: "10+", label: "Accelerators", sub: "YC, SkyDeck, Pear" },
  { number: "2", label: "Exits", sub: "Acquired by UC Berkeley" },
]

const galleryImages = [
  { src: "/group-pictures/202411241117_E@BClubShoot_0702_5D Mark IV.jpg", alt: "Group Photo" },
  { src: "/group-pictures/calday.JPG", alt: "Cal Day" },
  { src: "/group-pictures/tahoe.jpg", alt: "Tahoe Trip" },
  { src: "/group-pictures/picnic.JPG", alt: "Picnic" },
  { src: "/group-pictures/grad.jpg", alt: "Graduation" },
  { src: "/group-pictures/ski.JPG", alt: "Ski Trip" },
]

const startups = [
  {
    name: "Status",
    description: "Capacity tracking for university libraries. Acquired by UC Berkeley. 3.5K+ MAU.",
    image: "/group-pictures/skydeck_people.jpeg",
    tags: ["Acquired", "EdTech"],
    color: "bg-green-500",
    href: "https://www.instagram.com/moffittstatus/?hl=en"
  },
  {
    name: "Human Behavior",
    description: "AI vision models for user session analytics. YC S25. Raised $5M.",
    image: "/group-pictures/skyler.png",
    tags: ["YC S25", "AI"],
    color: "bg-orange-500",
    href: "https://www.ycombinator.com/companies/human-behavior"
  },
  {
    name: "The Context Company",
    description: "Semantic observability for AI agents to help teams fix failures fast.",
    image: "/group-pictures/rohil-context-company-yc.webp",
    tags: ["YC S25", "AI Infra"],
    color: "bg-purple-500",
    href: "https://www.ycombinator.com/companies/the-context-company"
  },
  {
    name: "Relixir",
    description: "Growth Engine for AI Search.",
    image: "/group-pictures/relixir.jpeg",
    tags: ["YC S25", "AI Search"],
    color: "bg-blue-500",
    href: "https://www.ycombinator.com/companies/relixir"
  }
]

const values = [
  {
    title: "Builder First",
    description: "We don't just talk about ideas. We ship code, design prototypes, and launch products.",
    icon: Layers
  },
  {
    title: "Global Ambition",
    description: "Our members don't just aim for campus success. We aim for massive scale and real impact.",
    icon: Globe
  },
  {
    title: "Tight-Knit Family",
    description: "Your co-founder is sitting next to you. We travel, eat, and build together.",
    icon: Heart
  }
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0b1c3d] overflow-x-hidden selection:bg-[#1b44b5] selection:text-white" ref={containerRef}>
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#1b44b5] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <main className="relative pt-24 pb-0">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-end px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-[3rem] mb-24 bg-white">
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 z-0">
              <Image 
                src="/person_giving_talk.jpg"
                alt="E@B Speaker"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
           </div>

          <div className="relative z-10 p-8 sm:p-16 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-[#0b1c3d] mb-8 leading-[0.9] mix-blend-color-burn">
                WE ARE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b44b5] to-[#3b82f6]">BUILDERS.</span>
              </h1>
              <p className="text-xl sm:text-3xl text-slate-700 font-medium max-w-3xl leading-relaxed">
                Berkeley's premier startup organization. We don't just talk about entrepreneurship; we build the ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction & Stats - Clean Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl font-black text-[#0b1c3d] leading-tight">
                 Not just a club. <br/>
                 A <span className="text-[#1b44b5]">product studio.</span>
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed">
                 We provide members with elite resources to build and grow their startups. We bring together the next generation of world-revolutionizing entrepreneurs and venture capitalists.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-slate-100">
                 {stats.map((stat) => (
                   <div key={stat.label}>
                     <div className="text-4xl font-black text-[#0b1c3d]">{stat.number}</div>
                     <div className="text-sm font-bold uppercase tracking-wider text-[#1b44b5]">{stat.label}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="grid gap-6">
                {values.map((value, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#1b44b5]/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-[#f5f7ff] text-[#1b44b5] group-hover:bg-[#1b44b5] group-hover:text-white transition-colors">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0b1c3d] mb-2">{value.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </section>

        {/* Interactive Marquee */}
        <section className="py-20 bg-[#0b1c3d] overflow-hidden -skew-y-2 transform origin-left">
           <div className="skew-y-2"> {/* Correction for content */}
             <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 text-center">
                <h2 className="text-4xl font-black text-white">Our Family</h2>
             </div>
             <Marquee images={galleryImages} />
             <Marquee images={[...galleryImages].reverse()} direction="right" className="mt-8" />
           </div>
        </section>
        
        {/* Spacer to fix skew layout issues */}
        <div className="h-20" />

        {/* Incubator Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32 pt-20">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-8 sm:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#f5f7ff] text-[#1b44b5] text-xs font-bold uppercase tracking-widest mb-6">
                    Our Flagship Program
                  </div>
                  <h2 className="text-5xl font-black text-[#0b1c3d] mb-6">E@B Incubator</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Sponsored by <span className="font-bold text-[#1b44b5]">Techstars</span>. A ten-week sprint from idea to demo day, designed to get you funded.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Curriculum", desc: "Weekly workshops" },
                      { title: "Mentorship", desc: "1:1 with Founders" },
                      { title: "Demo Day", desc: "Pitch to VCs" },
                      { title: "Funding", desc: "$500k+ raised" },
                    ].map((item) => (
                      <div key={item.title} className="border-l-2 border-[#1b44b5]/20 pl-4">
                        <div className="font-bold text-[#0b1c3d]">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100">
                  <Image 
                    src="/group-pictures/student_giving_talk.JPG"
                    alt="Incubator Pitch"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d]/80 to-transparent flex items-end p-8">
                     <p className="text-white font-medium italic">"The most high-signal program on campus."</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Alumni Success */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
           <div className="mb-12">
              <h2 className="text-4xl font-black text-[#0b1c3d]">Where We Ship</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {startups.map((startup, i) => (
               <Link 
                 key={i}
                 href={startup.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block"
               >
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/9] shadow-xl cursor-pointer"
                 >
                   <Image
                     src={startup.image}
                     alt={startup.name}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d] via-[#0b1c3d]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                   
                   <div className="absolute top-8 right-8">
                      <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" />
                   </div>

                   <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                      <div className="flex gap-2 mb-4">
                        {startup.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{startup.name}</h3>
                      <p className="text-slate-300 text-lg line-clamp-2">{startup.description}</p>
                   </div>
                 </motion.div>
               </Link>
             ))}
           </div>
        </section>

        {/* Simple CTA */}
        <section className="py-24 bg-white border-t border-slate-100 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-5xl font-black text-[#0b1c3d] mb-8">Ready to join?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recruitment">
                <Button size="lg" className="h-14 px-12 rounded-full bg-[#1b44b5] hover:bg-[#0b1c3d] text-white text-lg font-bold">
                  Apply for Spring 2025
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

function Marquee({ images, direction = "left", className }: { images: { src: string; alt: string }[], direction?: "left" | "right", className?: string }) {
  return (
    <div className={cn("relative flex overflow-hidden group", className)}>
      <div 
        className={cn(
          "flex gap-6 py-4 w-max",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
      >
        {[...images, ...images, ...images].map((img, i) => (
          <div key={i} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[280px] rounded-2xl overflow-hidden shrink-0 transition-all duration-500 hover:scale-105">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
