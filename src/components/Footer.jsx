import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1430] text-white/60 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Engineering Animation Portfolio</p>
        <div className="text-sm">
          Built with precision • Rendered with imagination
        </div>
      </div>
    </footer>
  )
}
