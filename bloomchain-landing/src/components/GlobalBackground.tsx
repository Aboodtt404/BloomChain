import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundScene from './BackgroundScene'

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
      </Canvas>
      
      {/* Subtle overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gray-900/20 pointer-events-none" />
    </div>
  )
}

export default GlobalBackground 