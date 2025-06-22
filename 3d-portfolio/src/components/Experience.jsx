import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Experience = ({ data }) => {
    const groupRef = useRef()
    const cardsRef = useRef([])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.05
        }

        cardsRef.current.forEach((card, index) => {
            if (card) {
                card.position.y = Math.sin(time * 1.5 + index * 0.5) * 0.2 + index * 1.5
                card.rotation.y = Math.sin(time * 0.8 + index * 0.3) * 0.1
            }
        })
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {data.map((exp, index) => (
                <group key={index} ref={(el) => (cardsRef.current[index] = el)}>
                    {/* Experience Card */}
                    <Box
                        args={[3, 2, 0.1]}
                        position={[0, index * 1.5, 0]}
                    >
                        <meshStandardMaterial
                            color="#ffffff"
                            transparent
                            opacity={0.9}
                            metalness={0.1}
                            roughness={0.2}
                        />
                    </Box>

                    {/* Card Border */}
                    <Box
                        args={[3.1, 2.1, 0.05]}
                        position={[0, index * 1.5, -0.03]}
                    >
                        <meshStandardMaterial
                            color="#d4f0c5"
                            transparent
                            opacity={0.8}
                        />
                    </Box>

                    {/* Company Name */}
                    <Text
                        position={[-1.2, index * 1.5 + 0.6, 0.06]}
                        fontSize={0.15}
                        color="#4a4a4a"
                        anchorX="left"
                        anchorY="middle"
                    >
                        {exp.company}
                    </Text>

                    {/* Position */}
                    <Text
                        position={[-1.2, index * 1.5 + 0.3, 0.06]}
                        fontSize={0.12}
                        color="#b8d4e3"
                        anchorX="left"
                        anchorY="middle"
                    >
                        {exp.position}
                    </Text>

                    {/* Duration */}
                    <Text
                        position={[1.2, index * 1.5 + 0.6, 0.06]}
                        fontSize={0.1}
                        color="#6b6b6b"
                        anchorX="right"
                        anchorY="middle"
                    >
                        {exp.duration}
                    </Text>

                    {/* Location */}
                    <Text
                        position={[1.2, index * 1.5 + 0.3, 0.06]}
                        fontSize={0.1}
                        color="#6b6b6b"
                        anchorX="right"
                        anchorY="middle"
                    >
                        {exp.location}
                    </Text>

                    {/* Description Preview */}
                    <Text
                        position={[-1.2, index * 1.5 - 0.2, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="left"
                        anchorY="top"
                        maxWidth={2.2}
                    >
                        {exp.description[0]}
                    </Text>
                </group>
            ))}

            {/* Timeline Connector */}
            <Box
                args={[0.05, data.length * 1.5, 0.05]}
                position={[2.5, (data.length - 1) * 0.75, 0]}
            >
                <meshStandardMaterial
                    color="#e6d7ff"
                    transparent
                    opacity={0.6}
                />
            </Box>

            {/* Timeline Dots */}
            {data.map((_, index) => (
                <Sphere
                    key={`dot-${index}`}
                    args={[0.1, 16, 16]}
                    position={[2.5, index * 1.5, 0]}
                >
                    <meshStandardMaterial
                        color="#ffd1dc"
                        transparent
                        opacity={0.8}
                    />
                </Sphere>
            ))}
        </group>
    )
}

export default Experience 