import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Cone } from '@react-three/drei'
import * as THREE from 'three'

// Individual Crop Component
const Crop: React.FC<{ position: [number, number, number]; type: 'carrot' | 'wheat' | 'tomato'; growth: number }> = ({ 
  position, 
  type, 
  growth 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const getCropColor = () => {
    switch (type) {
      case 'carrot': return '#FF5722'
      case 'wheat': return '#FFC107'
      case 'tomato': return '#F44336'
      default: return '#4CAF50'
    }
  }

  const scale = 0.3 + (growth * 0.7)

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef}>
          {type === 'carrot' && (
            <>
              <coneGeometry args={[0.3, 1.2, 6]} />
              <meshStandardMaterial color={getCropColor()} />
            </>
          )}
          {type === 'wheat' && (
            <>
              <cylinderGeometry args={[0.1, 0.1, 1.5]} />
              <meshStandardMaterial color={getCropColor()} />
            </>
          )}
          {type === 'tomato' && (
            <>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={getCropColor()} />
            </>
          )}
        </mesh>
        
        {/* Leaves */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.4, 0.6, 8]} />
          <meshStandardMaterial color="#4CAF50" />
        </mesh>

        {/* Glow Effect */}
        <mesh position={[0, 0.5, 0]} scale={1.2}>
          <sphereGeometry args={[0.6]} />
          <meshBasicMaterial 
            color={getCropColor()} 
            transparent 
            opacity={0.1} 
          />
        </mesh>
      </group>
    </Float>
  )
}

// Sprinkler Component
const Sprinkler: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(50 * 3)
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2
      positions[i * 3 + 1] = Math.random() * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.5
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin(state.clock.elapsedTime + i) * 0.5 + 0.5
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group position={position}>
      {/* Sprinkler Base */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1]} />
        <meshStandardMaterial color="#90A4AE" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Sprinkler Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#607D8B" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Water Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={50}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#03DAC6" transparent opacity={0.6} />
      </points>
    </group>
  )
}

// Garden Tile Component
const GardenTile: React.FC<{ position: [number, number, number] }> = ({ position }) => (
  <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[1.8, 1.8]} />
    <meshStandardMaterial 
      color="#6D4C41" 
      roughness={0.8}
      normalScale={new THREE.Vector2(0.5, 0.5)}
    />
  </mesh>
)

// Main Garden Scene Component
const GardenScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  // Generate 4x4 grid
  const tiles = []
  const crops = []
  const sprinklers = []

  for (let x = 0; x < 4; x++) {
    for (let z = 0; z < 4; z++) {
      const position: [number, number, number] = [(x - 1.5) * 2, 0, (z - 1.5) * 2]
      
      // Add tile
      tiles.push(<GardenTile key={`tile-${x}-${z}`} position={position} />)
      
      // Randomly add crops (70% chance)
      if (Math.random() > 0.3) {
        const cropTypes: ('carrot' | 'wheat' | 'tomato')[] = ['carrot', 'wheat', 'tomato']
        const randomType = cropTypes[Math.floor(Math.random() * cropTypes.length)]
        const growth = 0.5 + Math.random() * 0.5
        crops.push(
          <Crop 
            key={`crop-${x}-${z}`} 
            position={[position[0], 0.1, position[2]]} 
            type={randomType}
            growth={growth}
          />
        )
      }
      
      // Add sprinklers (25% chance)
      if (Math.random() > 0.75) {
        sprinklers.push(
          <Sprinkler 
            key={`sprinkler-${x}-${z}`} 
            position={[position[0], 0, position[2]]} 
          />
        )
      }
    }
  }

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Point light for magical effect */}
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#FFD700" />

      {/* Garden Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#2E7D32" />
      </mesh>

      {/* Garden Tiles */}
      {tiles}

      {/* Crops */}
      {crops}

      {/* Sprinklers */}
      {sprinklers}

      {/* Magical Sparkles */}
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[2, 2.5, -1]}>
          <sphereGeometry args={[0.03]} />
          <meshBasicMaterial color="#03DAC6" transparent opacity={0.6} />
        </mesh>
      </Float>
      
      <Float speed={0.8} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[-2, 2.8, 1]}>
          <sphereGeometry args={[0.04]} />
          <meshBasicMaterial color="#E91E63" transparent opacity={0.7} />
        </mesh>
      </Float>
    </group>
  )
}

export default GardenScene 