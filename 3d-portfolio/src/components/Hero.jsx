import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

const Hero = ({ data }) => {
    const groupRef = useRef()
    const sphereRef = useRef()
    const boxRef = useRef()
    const cylinderRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
        }

        if (sphereRef.current) {
            sphereRef.current.position.y = Math.sin(time * 2) * 0.5 + 2
            sphereRef.current.rotation.x = time * 0.5
        }

        if (boxRef.current) {
            boxRef.current.position.y = Math.sin(time * 1.5 + 1) * 0.3 + 1
            boxRef.current.rotation.z = time * 0.3
        }

        if (cylinderRef.current) {
            cylinderRef.current.position.y = Math.sin(time * 1.8 + 2) * 0.4 + 0.5
            cylinderRef.current.rotation.y = time * 0.4
        }
    })

    return (
        <group ref={groupRef}>
            {/* Floating Sphere */}
            <Sphere
                ref={sphereRef}
                args={[0.5, 32, 32]}
                position={[-2, 2, 0]}
            >
                <meshStandardMaterial
                    color="#ff6b9d"
                    transparent
                    opacity={0.9}
                    metalness={0.3}
                    roughness={0.1}
                />
            </Sphere>

            {/* Floating Box */}
            <Box
                ref={boxRef}
                args={[0.8, 0.8, 0.8]}
                position={[2, 1, 0]}
            >
                <meshStandardMaterial
                    color="#4ecdc4"
                    transparent
                    opacity={0.8}
                    metalness={0.4}
                    roughness={0.2}
                />
            </Box>

            {/* Floating Cylinder */}
            <Cylinder
                ref={cylinderRef}
                args={[0.3, 0.3, 1, 32]}
                position={[0, 0.5, -1]}
            >
                <meshStandardMaterial
                    color="#45b7d1"
                    transparent
                    opacity={0.7}
                    metalness={0.2}
                    roughness={0.3}
                />
            </Cylinder>

            {/* Additional decorative elements */}
            <Sphere
                args={[0.2, 16, 16]}
                position={[-1.5, -1, 1]}
            >
                <meshStandardMaterial
                    color="#96ceb4"
                    transparent
                    opacity={0.6}
                />
            </Sphere>

            <Box
                args={[0.4, 0.4, 0.4]}
                position={[1.5, -1.5, 0.5]}
            >
                <meshStandardMaterial
                    color="#feca57"
                    transparent
                    opacity={0.7}
                />
            </Box>

            <Cylinder
                args={[0.15, 0.15, 0.8, 16]}
                position={[0.5, -2, -0.5]}
            >
                <meshStandardMaterial
                    color="#ff9ff3"
                    transparent
                    opacity={0.6}
                />
            </Cylinder>
        </group>
    )
}

export default Hero 