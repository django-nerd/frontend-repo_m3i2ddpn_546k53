import React from 'react'

// Subtle blueprint-style overlay with grid and markers
export default function BlueprintOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-70">
      {/* Grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Markers */}
        {[...Array(12)].map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          return (
            <g key={i} transform={`translate(${x}%, ${y}%)`}>
              <circle r="2" fill="rgba(255,255,255,0.9)" />
              <text x="6" y="4" fontSize="10" fill="rgba(255,255,255,0.8)" style={{fontFamily: 'monospace'}}>
                {`#${(Math.random()*999|0).toString().padStart(3,'0')}`}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
