import React from 'react'
import Hero3D from './components/Hero3D'
import HoloPanels from './components/HoloPanels'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#071227] text-white">
      {/* Hero with Spline cover */}
      <Hero3D />

      {/* Blueprint-style info panels showcasing skills and features */}
      <HoloPanels />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
