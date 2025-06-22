import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Text, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

const Education = ({ data }) => {
    const groupRef = useRef()
    const diplomasRef = useRef([])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.05
        }

        diplomasRef.current.forEach((diploma, index) => {
            if (diploma) {
                diploma.position.y = Math.sin(time * 1.2 + index * 0.8) * 0.3 + index * 2
                diploma.rotation.z = Math.sin(time * 0.6 + index * 0.4) * 0.1
            }
        })
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {data.map((edu, index) => (
                <group key={index} ref={(el) => (diplomasRef.current[index] = el)}>
                    {/* Diploma Base */}
                    <Box
                        args={[2.5, 3, 0.1]}
                        position={[0, index * 2, 0]}
                    >
                        <meshStandardMaterial
                            color="#ffffff"
                            transparent
                            opacity={0.9}
                            metalness={0.1}
                            roughness={0.2}
                        />
                    </Box>

                    {/* Diploma Border */}
                    <Box
                        args={[2.6, 3.1, 0.05]}
                        position={[0, index * 2, -0.03]}
                    >
                        <meshStandardMaterial
                            color="#b8d4e3"
                            transparent
                            opacity={0.8}
                        />
                    </Box>

                    {/* Degree */}
                    <Text
                        position={[0, index * 2 + 1, 0.06]}
                        fontSize={0.12}
                        color="#4a4a4a"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={2.2}
                    >
                        {edu.degree}
                    </Text>

                    {/* School */}
                    <Text
                        position={[0, index * 2 + 0.6, 0.06]}
                        fontSize={0.1}
                        color="#e6d7ff"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {edu.school}
                    </Text>

                    {/* Duration */}
                    <Text
                        position={[-0.8, index * 2 + 0.2, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="left"
                        anchorY="middle"
                    >
                        {edu.duration}
                    </Text>

                    {/* GPA */}
                    <Text
                        position={[0.8, index * 2 + 0.2, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="right"
                        anchorY="middle"
                    >
                        GPA: {edu.gpa}
                    </Text>

                    {/* Location */}
                    <Text
                        position={[0, index * 2 - 0.2, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {edu.location}
                    </Text>

                    {/* Courses Preview */}
                    <Text
                        position={[0, index * 2 - 0.8, 0.06]}
                        fontSize={0.06}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.2}
                    >
                        {edu.relevantCourses.slice(0, 3).join(', ')}
                    </Text>
                </group>
            ))}

            {/* Academic Achievement Pillars */}
            {data.map((_, index) => (
                <Cylinder
                    key={`pillar-${index}`}
                    args={[0.1, 0.1, 0.5, 8]}
                    position={[1.8, index * 2, 0]}
                >
                    <meshStandardMaterial
                        color="#d4f0c5"
                        transparent
                        opacity={0.7}
                    />
                </Cylinder>
            ))}

            {/* Achievement Caps */}
            {data.map((_, index) => (
                <Cylinder
                    key={`cap-${index}`}
                    args={[0.15, 0.1, 0.1, 8]}
                    position={[1.8, index * 2 + 0.3, 0]}
                >
                    <meshStandardMaterial
                        color="#ffd1dc"
                        transparent
                        opacity={0.8}
                    />
                </Cylinder>
            ))}

            {/* Connecting Lines */}
            <Box
                args={[0.02, data.length * 2, 0.02]}
                position={[1.8, (data.length - 1), 0]}
            >
                <meshStandardMaterial
                    color="#fffacd"
                    transparent
                    opacity={0.5}
                />
            </Box>
        </group>
    )
}

export default Education 