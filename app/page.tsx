"use client"
import { Button } from "@/components/ui/button"
import { Users, Rocket, TrendingUp, Award, ChevronDown, ArrowRight, Zap, Target, Globe, Crown, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import NeuralNetworkCanvas from "@/components/ui/neural-network-canvas"
import { Navbar } from "@/components/layout/navbar"
import RotatingText from "@/components/ui/rotating-text"

const stats = [
  { number: "3", label: "YC Acceptances", icon: Rocket, description: "In the last 6 months" },
  { number: "6", label: "Berkeley SkyDeck", icon: TrendingUp, description: "Teams backed by Berkeley's Premier Accelerator" },
  { number: "$8M+", label: "Raised", icon: DollarSign, description: "from Top Silicon Valley VCs " },
  { number: "60+", label: "Startups Launched", icon: Award, description: "Across diverse industries" },
]

const allCompanies = [
  { name: "Google", logo: "/logos/google.svg", color: "#4285f4" }, // Google Blue
  { name: "Salesforce", logo: "/logos/salesforce.svg", color: "#00a1e0" }, // Salesforce Blue
  { name: "NVIDIA", logo: "/logos/nvidia.svg", color: "#76b900" }, // NVIDIA Green
  { name: "TikTok", logo: "/logos/tiktok.svg", color: "#ff0050" }, // TikTok Pink
  { name: "Tesla", logo: "/logos/tesla.svg", color: "#cc0000" }, // Tesla Red
  { name: "Apple", logo: "/logos/apple.svg", color: "#007aff" }, // Apple Blue
  { name: "Rivian", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rivian_logo_and_wordmark.svg", color: "#0073e6" }, // Rivian Blue
  { name: "Nike", logo: "/logos/nike-swoosh.svg", color: "#ff6900" }, // Nike Orange
  { name: "BCG", logo: "/logos/bcg-logo.svg", color: "#0073a8" }, // BCG Blue
  { name: "McKinsey", logo: "/logos/mckinsey-logo.svg", color: "#005587" }, // McKinsey Blue
  { name: "Deloitte", logo: "/logos/deloitte-logo.svg", color: "#86bc25" }, // Deloitte Green
  { name: "Accenture", logo: "/logos/accenture.svg", color: "#a100ff" }, // Accenture Purple
  { name: "Zoom", logo: "/logos/zoom.svg", color: "#2d8cff" }, // Zoom Blue
  { name: "Amazon", logo: "/logos/amazon-logo.svg", color: "#ff9900" }, // Amazon Orange
  { name: "Microsoft", logo: "/logos/microsoft-logo.svg", color: "#00bcf2" }, // Microsoft Blue
  { name: "JPMorgan", logo: "/logos/jpmorgan.svg", color: "#005cb9" }, // JPMorgan Blue
]

const partnerLogos = [
  { name: "Pear VC", logo: "/partners/Pear_VC_logo.svg" },
  { name: "YC", logo: "/yc-logo.png" },
  { name: "SV Angel", logo: "/sv-angels-logo.png" },
  { name: "Haas", logo: "/partners/haas.svg" },
  { name: "Radical Ventures", logo: "/partners/radical-ventures-header-logo.svg" },
  { name: "Techstars", logo: "/partners/techstars-logo-vector-removebg-preview.svg" },
  { name: "The House Fund", logo: "/partners/6628f2d618444e5feea1707d_thf_logo_color.svg" },
  { name: "Delve", logo: "/partners/delve.svg" },
  { name: "Skydeck", logo: "/partners/sky.svg" },
  { name: "DRF", logo: "/partners/drf.svg" },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "We move at the speed of innovation. No bureaucracy, no red tape, just results.",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Every action, every decision, every connection is calculated for maximum impact.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our network spans continents. Your ideas will reach the world.",
  },
  {
    icon: Crown,
    title: "Elite Standards",
    description: "We don't just meet expectations. We shatter them. Every single time.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <NeuralNetworkCanvas />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-32 sm:py-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,42,114,0.12),_transparent_75%)]" aria-hidden="true" />
          <motion.div
            className="absolute inset-x-0 top-12 mx-auto h-72 w-72 rounded-full bg-[#1d34ff]/15 blur-3xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col items-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.9, ease: "easeOut" }}
                className="space-y-6 text-[#0b1c3d]"
              >
                <div className="flex flex-col items-center gap-6">
                  <p className="text-2xl sm:text-4xl font-semibold tracking-[0.85em] text-[#1b44b5] uppercase">
                    WE ARE
                  </p>
                  <RotatingText
                    words={["FOUNDERS", "BUILDERS", "ENGINEERS", "THINKERS", "DESIGNERS", "WORLD-CHANGERS"]}
                    interval={1400}
                    className="text-5xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b1c3d] via-[#1b44b5] to-[#5ca0ff]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, scale: 2.4 }}
                animate={{ opacity: 1, scale: [2.4, 2.4, 1] }}
                transition={{ duration: 2.4, ease: "easeInOut", times: [0, 0.6, 1] }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/eb-logo.png"
                  alt="Entrepreneurs @ Berkeley"
                  width={160}
                  height={160}
                  className="h-24 w-24 sm:h-28 sm:w-28"
                  priority
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl text-lg sm:text-xl text-slate-600"
              >
                We launch products, partner with real clients, and join top accelerators before graduation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.9, ease: "easeOut" }}
              className="mt-16 overflow-hidden rounded-[44px] border border-slate-100 bg-white shadow-2xl"
            >
                  <Image
                    src="/group-pictures/normal-e@b-group.jpg"
                    alt="Entrepreneurs @ Berkeley members"
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover"
                    priority
                  />
            </motion.div>
          </div>
        </section>


        {/* Partners Showcase */}
        <section className="relative overflow-hidden bg-[#f5f7ff] py-20">
          <div className="absolute inset-x-0 top-6 mx-auto h-32 w-[90%] rounded-full bg-[#1d34ff]/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#1b44b5]/70">Trusted by partners + accelerators</p>
            </motion.div>

            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#f5f7ff] to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#f5f7ff] to-transparent pointer-events-none" aria-hidden="true" />
              <div className="flex gap-8 animate-infinite-scroll" style={{ animationDuration: "18s" }}>
                {[...partnerLogos, ...partnerLogos].map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 rounded-2xl border border-[#0b1c3d]/10 bg-white/80 px-8 py-6 flex items-center justify-center shadow-sm min-w-[180px]"
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={160}
                      height={60}
                      className="h-10 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#e9efff] to-transparent" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#1b44b5]/80">Impact by the numbers</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#0b1c3d]">Proof, not promises.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[28px] border border-[#1b44b5]/15 bg-[#f8faff] px-6 py-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-[#1b44b5] text-sm font-semibold uppercase tracking-[0.3em]">
                    <stat.icon className="h-6 w-6" />
                    {stat.label}
                  </div>
                  <div className="mt-6 text-4xl sm:text-5xl font-black text-[#0b1c3d]">{stat.number}</div>
                  <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Community Section */}
        <section className="relative bg-[#f5f7ff] py-24">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#1b44b5]/70">What we do</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#0b1c3d]">Build, launch, and back founders.</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Incubator sprints, client labs, venture dinners, and the pipelines that help Berkeley founders move fast.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/group_photo_make_sure_its_small.jpg", title: "Incubator + Demo Day", description: "12-week build sprints and a packed demo room." },
                { src: "/panel_of_smart_people.jpg", title: "Build Sessions", description: "Product critiques with alumni and visiting partners." },
                { src: "/founder_dinner.jpg", title: "Founder Dinners", description: "Small table conversations with the operators we admire." },
                { src: "/202411241117_E@BClubShoot_0542_5D Mark IV.jpg", title: "Client Lab", description: "Paid engagements with Bay Area startups and funds." },
                { src: "/dude_looking_focused.JPG", title: "Capital Network", description: "SkyDeck, YC, and venture intros when you’re ready." },
                { src: "/techstars.png", title: "Talent Pipeline", description: "We source teams for VC scouts, accelerators, and labs." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-lg"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-2xl font-semibold text-[#0b1c3d]">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="relative bg-white py-24">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#eef2ff] to-transparent" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <p className="text-xs uppercase tracking-[0.5em] text-[#1b44b5]/80">Where our alumni ship</p>
                <h3 className="text-4xl sm:text-5xl font-black text-[#0b1c3d]">From YC to FAANG </h3>
                <p className="text-slate-600">
                  Members build at top accelerators, venture studios, and design forward product teams. We learn from these ecosystems and send founders back with more reps.
                </p>
                <div className="grid grid-cols-2 gap-4 text-left text-sm text-slate-600">
                  <div className="rounded-2xl border border-[#1b44b5]/15 bg-[#f5f7ff] p-4">
                    <p className="text-xl font-bold text-[#0b1c3d]">6</p>
                    <p>SkyDeck-backed teams in 2024</p>
                  </div>
                  <div className="rounded-2xl border border-[#1b44b5]/15 bg-[#f5f7ff] p-4">
                    <p className="text-xl font-bold text-[#0b1c3d]">3</p>
                    <p>YC acceptances from undergrads</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {allCompanies.slice(0, 12).map((company) => (
                  <div
                    key={company.name}
                    className="rounded-2xl border border-[#0b1c3d]/10 bg-[#f8faff] px-4 py-6 flex items-center justify-center"
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-[#0b1c3d] py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,52,255,0.3),_transparent_70%)]" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.6em] text-white/60"
            >
              Ready to build?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black"
            >
              Join the next E@B build cycle.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-lg text-white/80"
            >
              Show us what you're making, or come find your co-founders. We review applications on a rolling basis and tap you for the next sprint.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="https://forms.gle/Py8cwGjt3kJCrRLH7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-[#0b1c3d] px-10 py-6 text-base font-semibold shadow-lg hover:bg-white/90"
                >
                  Apply now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 px-10 py-6 text-base font-semibold"
                >
                  Learn more
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>


    </div>
  )
}
