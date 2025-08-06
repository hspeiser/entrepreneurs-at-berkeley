"use client"
import { useEffect, useRef } from "react"

// --- Interfaces ---
interface Particle {
  x: number
  y: number
  speed: number
  opacity: number
  size: number
  hue: number
  lightness: number
}

// --- Constants ---
const PARTICLE_COUNT = 200
const BASE_HUE = 210 // A consistent, cool blue from your color scheme
const MAX_SPEED = 0.8
const MIN_SPEED = 0.2
const CONNECTION_DISTANCE = 100

export default function DataStreamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let particles: Particle[] = []

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initializeStream()
    }
    window.addEventListener("resize", handleResize)

    function createParticle(x?: number, y?: number): Particle {
      return {
        x: x ?? Math.random() * width,
        y: y ?? Math.random() * height,
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        opacity: Math.random() * 0.4 + 0.1, // Start with low opacity
        size: Math.random() * 2 + 1,
        hue: BASE_HUE,
        lightness: 60 + Math.random() * 20, // Variations of the blue
      }
    }

    function initializeStream() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle())
      }
    }

    function animate() {
      if (!ctx) return

      // Use a semi-transparent background to create a fading trail effect
      ctx.fillStyle = "rgba(6, 15, 35, 0.1)" // A very dark blue from your theme
      ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach(p => {
        // Move particle
        p.x += p.speed

        // Reset particle when it goes off-screen
        if (p.x > width + 10) {
          p.x = -10
          p.y = Math.random() * height
          p.speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)
          p.opacity = Math.random() * 0.4 + 0.1
        }

        // Fade in particles on the left, and fade out smoothly on the far right
        const fadeInMargin = width * 0.2
        const fadeOutStart = width * 0.9 // Start fading out at 90% of the screen width

        if (p.x < fadeInMargin) {
          // Gradually increase opacity as particles enter from the left
          p.opacity += (0.5 - p.opacity) * 0.02 // A bit faster fade-in
        } else if (p.x > fadeOutStart) {
          // Gradually decrease opacity to zero as particles approach the right edge
          const fadeZoneWidth = width - fadeOutStart
          const distanceIntoFade = p.x - fadeOutStart
          const fadeProgress = distanceIntoFade / fadeZoneWidth
          
          // We assume a max opacity of 0.5 and fade down from there.
          // This ensures all particles fade out completely by the edge.
          const targetOpacity = 0.5 * (1 - fadeProgress)
          p.opacity = Math.min(p.opacity, targetOpacity)
        }
        p.opacity = Math.max(0, p.opacity) // Ensure opacity doesn't go below 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${p.lightness}%, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * Math.min(p1.opacity, p2.opacity) * 0.5
            if (opacity > 0) {
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `hsla(${BASE_HUE}, 100%, 70%, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    initializeStream()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-background" />
} 