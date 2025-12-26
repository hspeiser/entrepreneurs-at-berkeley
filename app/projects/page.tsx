"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Layout, Sparkles, MessageSquare, CheckCircle2, ArrowUpRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    client: "LinkedIn",
    title: "Gen Z User Acquisition",
    description: "Reimagined the mobile experience for the Japanese market. Designed a new 'Lite' interface.",
    image: "/linkedin.png", 
    tags: ["UI/UX", "Strategy"],
    color: "#0077b5",
    year: "2024"
  },
  {
    client: "Tesla",
    title: "Predictive Maintenance",
    description: "Anomaly detection pipeline for Powerwall. Identifies voltage irregularities 2 weeks early.",
    image: "/logos/tesla.svg",
    tags: ["ML", "Python"],
    color: "#cc0000",
    year: "2023"
  },
  {
    client: "PBS",
    title: "AI Content Strategy",
    description: "Recommendation engine aligning educational goals with viewing trends.",
    image: "/pbs.png",
    tags: ["AI", "Data"],
    color: "#00aeef",
    year: "2024"
  }
]

const processSteps = [
  {
    id: "01",
    title: "Scope & Squad",
    shortDesc: "Embed PM & Tech Lead",
    description: "We don't just take a ticket. We embed a PM and Tech Lead to challenge your assumptions, refine the problem statement, and define clear success metrics before writing a single line of code.",
    icon: MessageSquare,
    color: "bg-blue-500"
  },
  {
    id: "02",
    title: "Sprint Zero",
    shortDesc: "Setup & Architecture",
    description: "Week 1 is pure intensity. We align on the technical stack, set up the repo and CI/CD pipelines, and deliver initial high-fidelity mocks. We ship to production from day one.",
    icon: Sparkles,
    color: "bg-purple-500"
  },
  {
    id: "03",
    title: "Build & Iterate",
    shortDesc: "2-Week Sprints",
    description: "We run rigorous two-week sprints with live demos. We work directly in your Slack, push code to your GitHub, and pivot fast based on your real-time feedback.",
    icon: Code2,
    color: "bg-indigo-500"
  },
  {
    id: "04",
    title: "Handoff",
    shortDesc: "Docs & Transfer",
    description: "We don't lock you in. You get the code, the documentation, the design files, and a clean IP transfer. We often onboard your full-time engineers to take over the codebase.",
    icon: CheckCircle2,
    color: "bg-emerald-500"
  }
]

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0b1c3d] overflow-x-hidden selection:bg-[#1b44b5] selection:text-white" ref={containerRef}>
      <Navbar />
      
      {/* Smooth Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#1b44b5] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="relative pt-24 pb-0">
        
        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-[3rem] mb-20">
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 z-0">
              <Image 
                src="/group-pictures/epsilon-alpha-beta.jpg"
                alt="E@B Group Photo"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
           </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-[#0b1c3d] mb-8 mix-blend-color-burn opacity-90">
              WE SHIP<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b44b5] to-[#3b82f6] animate-gradient-x">
                FUTURE
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mt-12">
              <p className="text-xl md:text-3xl font-medium text-slate-800 max-w-xl leading-relaxed">
                A high-velocity product studio at UC Berkeley. We build software that matters.
              </p>
              
              <div className="flex gap-4">
                 <MagneticButton>
                    <Link href="mailto:contact@entrepreneursatberkeley.com" className="flex items-center gap-2 px-8 py-4 bg-[#0b1c3d] text-white rounded-full font-bold text-lg hover:bg-[#1b44b5] transition-colors shadow-2xl shadow-blue-900/20">
                      Start a Project <ArrowUpRight className="w-5 h-5" />
                    </Link>
                 </MagneticButton>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Client Logos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
               <h3 className="text-sm font-bold tracking-[0.2em] text-[#1b44b5] uppercase">Sample of our past clients</h3>
               <div className="h-px flex-1 bg-slate-100 hidden md:block ml-8" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <Image 
                src="/clients.png" 
                alt="Our Clients: Google, Tesla, Spotify, etc." 
                width={1200}
                height={600}
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
              />
            </motion.div>
          </div>
        </section>

        {/* Interactive Process (Swapped Position) */}
        <section className="py-32 bg-[#0b1c3d] text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 relative overflow-hidden mb-32">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1b44b5]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
              <div className="lg:sticky lg:top-32 h-fit">
                <h2 className="text-5xl md:text-7xl font-black mb-6">How We <br /><span className="text-[#3b82f6]">Ship.</span></h2>
                <p className="text-xl text-slate-300 max-w-md leading-relaxed mb-8">
                   We've refined our process over 60+ projects. Click through our sprint cycle to see how we deliver.
                </p>
                <div className="hidden lg:block">
                   <Link href="mailto:contact@entrepreneursatberkeley.com">
                      <Button className="bg-white text-[#0b1c3d] hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-white/10">
                        Start a Sprint
                      </Button>
                   </Link>
                </div>
              </div>

              {/* Interactive Component */}
              <InteractiveProcessList />
            </div>
          </div>
        </section>

        {/* Selected Work (Swapped Position) */}
        <section className="py-32 bg-[#fcfcfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#0b1c3d] tracking-tight mb-4">Selected Work</h2>
              <p className="text-slate-500 text-lg">Case studies from our recent sprints.</p>
            </div>
            <div className="hidden md:flex gap-2">
               <ArrowRight className="w-6 h-6 text-slate-300" />
            </div>
          </div>

          <div className="overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 scrollbar-hide">
             <div className="flex gap-6 w-max mx-auto lg:mx-0">
               {projects.map((project, i) => (
                 <ProjectCard key={i} project={project} index={i} />
               ))}
               
               {/* "More" Card */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="w-[300px] md:w-[350px] aspect-[4/5] rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8 hover:bg-slate-50 transition-colors cursor-pointer group"
               >
                 <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-[#0b1c3d]">View Archive</h3>
                 <p className="text-sm text-slate-500 mt-2">Explore 50+ past projects</p>
               </motion.div>
             </div>
          </div>
        </section>

      </main>
    </div>
  )
}

function InteractiveProcessList() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.id}
          className={cn(
            "relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer",
            activeIndex === index 
              ? "bg-white/10 border-white/20" 
              : "bg-transparent border-white/5 hover:bg-white/5"
          )}
          onClick={() => setActiveIndex(index)}
          initial={false}
          animate={{
             height: activeIndex === index ? "auto" : "100px" 
          }}
        >
          <div className="p-8 flex items-start gap-6">
            <div className={cn(
               "w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-colors duration-500",
               activeIndex === index ? step.color : "bg-white/10"
            )}>
              <step.icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
               <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                     <span className="text-sm font-bold text-white/40 uppercase tracking-widest">{step.id}</span>
                     <h3 className={cn(
                        "text-2xl font-bold transition-colors duration-300",
                        activeIndex === index ? "text-white" : "text-white/60"
                     )}>
                        {step.title}
                     </h3>
                  </div>
                  <ChevronRight className={cn(
                     "w-6 h-6 text-white/40 transition-transform duration-300",
                     activeIndex === index ? "rotate-90" : "rotate-0"
                  )} />
               </div>
               
               <AnimatePresence>
                 {activeIndex === index && (
                   <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: "auto" }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <p className="text-xl text-slate-300 leading-relaxed mt-4 pb-2">
                       {step.description}
                     </p>
                   </motion.div>
                 )}
               </AnimatePresence>
               
               {activeIndex !== index && (
                  <motion.p 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-slate-500 mt-1"
                  >
                     {step.shortDesc}
                  </motion.p>
               )}
            </div>
          </div>
          
          {/* Active Indicator Bar */}
          {activeIndex === index && (
             <motion.div 
               layoutId="active-bar"
               className={cn("absolute left-0 top-0 bottom-0 w-1", step.color)}
             />
          )}
        </motion.div>
      ))}
    </div>
  )
}


function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative w-[300px] md:w-[400px] h-[500px] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 cursor-pointer"
    >
      <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0b1c3d]">
        {project.year}
      </div>
      
      {/* Image Area */}
      <div className="h-[60%] bg-slate-50 relative p-8 flex items-center justify-center group-hover:bg-[#f5f7ff] transition-colors duration-500">
        <Image 
          src={project.image} 
          alt={project.client} 
          width={180} 
          height={180}
          className="object-contain w-32 h-32 md:w-40 md:h-40 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Area */}
      <div className="h-[40%] p-8 flex flex-col justify-between bg-white relative">
        <div>
          <div className="flex gap-2 mb-3">
             {project.tags.map((tag: string) => (
               <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[#1b44b5] border border-[#1b44b5]/20 px-2 py-1 rounded-full">
                 {tag}
               </span>
             ))}
          </div>
          <h3 className="text-2xl font-black text-[#0b1c3d] mb-2 leading-tight group-hover:text-[#1b44b5] transition-colors">{project.client}</h3>
          <p className="text-sm text-slate-500 line-clamp-2">{project.description}</p>
        </div>
        
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <div className="w-10 h-10 rounded-full bg-[#0b1c3d] flex items-center justify-center text-white">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
