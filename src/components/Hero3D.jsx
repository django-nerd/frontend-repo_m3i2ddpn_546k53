import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Cpu, Cog, Drone, Armchair } from 'lucide-react'

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#071227] via-[#0b1c3d] to-[#0b1c3d]">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tu1yYfmgsnYCLUIx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft neon gradient tint */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,197,255,0.25)_0%,rgba(0,0,0,0)_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_2px_rgba(34,197,255,0.6)]" />
            <span className="text-xs tracking-widest uppercase text-white/80">Futuristic Engineering Portfolio</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
            Precision in Motion
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
            High-detail mechanical animation — gears, robotic arms, drones and exploded assemblies blending engineering rigor with cinematic lighting.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Cog, label: 'Gears' },
              { icon: Drone, label: 'Autonomous Drones' },
              { icon: Cpu, label: 'Control Systems' },
              { icon: Armchair, label: 'Robotic Arms' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-white/80 backdrop-blur">
                <Icon className="h-4 w-4 text-cyan-300" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
