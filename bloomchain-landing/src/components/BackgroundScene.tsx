import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

// Floating Gem Component
const FloatingGem: React.FC<{ position: [number, number, number]; color: string; size: number }> = ({ 
  position, 
  color, 
  size 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

// Blockchain Block Component
const BlockchainBlock: React.FC<{ position: [number, number, number]; color: string }> = ({ 
  position, 
  color 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  )
}

// Particle System Component
const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    const colors = new Float32Array(200 * 3)
    
    const colorPalette = [
      new THREE.Color('#4CAF50'), // Earth green
      new THREE.Color('#FFD700'), // Golden
      new THREE.Color('#2196F3'), // Web3 blue
      new THREE.Color('#03DAC6'), // Accent cyan
    ]
    
    for (let i = 0; i < 200; i++) {
      // Random positions in a large sphere around the camera
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.5} 
        transparent 
        opacity={0.6}
        vertexColors
        sizeAttenuation
      />
    </points>
  )
}

// Connection Lines Component
const ConnectionLines: React.FC = () => {
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const lineGeometry = useMemo(() => {
    const points = []
    const colors = []
    
    // Create some connection lines between random points
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      )
      
      points.push(start, end)
      
      // Gradient colors for connections
      const color1 = new THREE.Color('#4CAF50')
      const color2 = new THREE.Color('#2196F3')
      colors.push(color1, color2)
    }
    
    return { points, colors }
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lineGeometry.points.length}
          array={new Float32Array(lineGeometry.points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={lineGeometry.colors.length}
          array={new Float32Array(lineGeometry.colors.flatMap(c => [c.r, c.g, c.b]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial transparent opacity={0.3} vertexColors />
    </lineSegments>
  )
}

// Main Background Scene Component
const BackgroundScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Very subtle global rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.5} 
        color="#4CAF50"
      />
      <directionalLight 
        position={[-10, -10, -5]} 
        intensity={0.3} 
        color="#2196F3"
      />
      
      {/* Point lights for magical effect */}
      <pointLight position={[20, 20, 20]} intensity={0.5} color="#FFD700" />
      <pointLight position={[-20, -20, 20]} intensity={0.3} color="#03DAC6" />

      {/* Floating Gems */}
      <FloatingGem position={[15, 10, -10]} color="#4CAF50" size={1.2} />
      <FloatingGem position={[-18, -8, -15]} color="#FFD700" size={0.8} />
      <FloatingGem position={[12, -15, -8]} color="#2196F3" size={1.0} />
      <FloatingGem position={[-10, 12, -20]} color="#03DAC6" size={1.5} />
      <FloatingGem position={[8, 18, -12]} color="#4CAF50" size={0.6} />
      <FloatingGem position={[-15, 5, -25]} color="#FFD700" size={1.1} />

      {/* Blockchain Blocks */}
      <BlockchainBlock position={[25, 5, -15]} color="#4CAF50" />
      <BlockchainBlock position={[-20, 15, -10]} color="#2196F3" />
      <BlockchainBlock position={[10, -12, -18]} color="#FFD700" />
      <BlockchainBlock position={[-12, -5, -22]} color="#03DAC6" />

      {/* Particle Field */}
      <ParticleField />
      
      {/* Connection Lines */}
      <ConnectionLines />

      {/* Large Background Spheres */}
      <Float speed={0.2} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh position={[40, 20, -40]}>
          <sphereGeometry args={[8]} />
          <meshStandardMaterial 
            color="#4CAF50" 
            transparent 
            opacity={0.05}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.8}>
        <mesh position={[-35, -25, -35]}>
          <sphereGeometry args={[6]} />
          <meshStandardMaterial 
            color="#2196F3" 
            transparent 
            opacity={0.08}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  )
}

export default BackgroundScene 