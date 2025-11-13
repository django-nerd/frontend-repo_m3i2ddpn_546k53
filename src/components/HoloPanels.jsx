import React from 'react'
import { motion } from 'framer-motion'
import { Play, Layers, ScanLine, Ruler, Grid3X3 } from 'lucide-react'

const panelVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1, duration: 0.6 } })
}

export default function HoloPanels() {
  const panels = [
    {
      title: 'CAD Diagram',
      lines: ['Orthographic views', 'Parametric constraints', 'ISO tolerances'],
      icon: Layers,
    },
    {
      title: 'Exploded Assembly',
      lines: ['Bill of materials', 'Fasteners and sub-assemblies', 'Explode-steps timeline'],
      icon: Grid3X3,
    },
    {
      title: 'Animation Frames',
      lines: ['Easing curves', 'Inverse kinematics', 'Spline-based motion'],
      icon: Play,
    },
    {
      title: 'Blueprint Specs',
      lines: ['Scale 1:5', 'Tolerance ±0.01mm', 'Surface finish Ra 0.8'],
      icon: Ruler,
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0b1c3d] to-[#0a1430] py-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,rgba(2,6,23,0)_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {panels.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={panelVariants}
              className="group relative overflow-hidden rounded-xl border border-cyan-300/20 bg-white/[0.04] p-5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-cyan-400/10 to-transparent" />
              <div className="flex items-center gap-3">
                <p.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-white font-semibold tracking-wide">{p.title}</h3>
              </div>
              <div className="mt-4 space-y-2">
                {p.lines.map((line) => (
                  <div key={line} className="flex items-center gap-2 text-white/70">
                    <ScanLine className="h-3 w-3 text-cyan-400" />
                    <span className="text-sm">{line}</span>
                  </div>
                ))}
              </div>
              {/* Floating scanline */}
              <div className="absolute -inset-x-4 -inset-y-4">
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[scan_4s_linear_infinite]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scan{0%{transform:translateY(-150%)}100%{transform:translateY(150%)}}`}</style>
    </section>
  )
}
