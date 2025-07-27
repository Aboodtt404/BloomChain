import React from 'react'

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Garden-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-emerald-950/30" />
      
      {/* Subtle garden texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px),
                             radial-gradient(circle at 50% 50%, #16a34a 0.5px, transparent 0.5px)`,
            backgroundSize: '200px 200px, 150px 150px, 100px 100px',
            backgroundPosition: '0 0, 50px 50px, 25px 25px'
          }}
        />
      </div>
      
      {/* Subtle overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gray-900/40 pointer-events-none" />
    </div>
  )
}

export default GlobalBackground 