import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Text, Box } from '@react-three/drei'
import * as THREE from 'three'

const Skills = ({ data }) => {
    const groupRef = useRef()
    const orbsRef = useRef([])
    const categoriesRef = useRef([])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
        }

        orbsRef.current.forEach((orb, index) => {
            if (orb) {
                const angle = (index / orbsRef.current.length) * Math.PI * 2
                const radius = 3
                orb.position.x = Math.cos(angle + time * 0.5) * radius
                orb.position.z = Math.sin(angle + time * 0.5) * radius
                orb.position.y = Math.sin(time * 1.5 + index * 0.3) * 0.5
                orb.rotation.y = time * 0.3 + index * 0.2
            }
        })

        categoriesRef.current.forEach((category, index) => {
            if (category) {
                category.position.y = Math.sin(time * 1.2 + index * 0.5) * 0.3 + index * 1.5
                category.rotation.y = Math.sin(time * 0.4 + index * 0.3) * 0.1
            }
        })
    })

    const skillCategories = Object.entries(data)
    const allSkills = Object.values(data).flat()

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Floating Skill Orbs */}
            {allSkills.map((skill, index) => (
                <Sphere
                    key={`skill-${index}`}
                    ref={(el) => (orbsRef.current[index] = el)}
                    args={[0.3, 16, 16]}
                    position={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        color={index % 6 === 0 ? "#ffd1dc" :
                            index % 6 === 1 ? "#b8d4e3" :
                                index % 6 === 2 ? "#e6d7ff" :
                                    index % 6 === 3 ? "#d4f0c5" :
                                        index % 6 === 4 ? "#fffacd" : "#ffdab9"}
                        transparent
                        opacity={0.7}
                        metalness={0.2}
                        roughness={0.3}
                    />
                </Sphere>
            ))}

            {/* Skill Categories */}
            {skillCategories.map(([category, skills], index) => (
                <group key={category} ref={(el) => (categoriesRef.current[index] = el)}>
                    {/* Category Card */}
                    <Box
                        args={[2.5, 2, 0.1]}
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

                    {/* Category Border */}
                    <Box
                        args={[2.6, 2.1, 0.05]}
                        position={[0, index * 1.5, -0.03]}
                    >
                        <meshStandardMaterial
                            color={index % 6 === 0 ? "#ffd1dc" :
                                index % 6 === 1 ? "#b8d4e3" :
                                    index % 6 === 2 ? "#e6d7ff" :
                                        index % 6 === 3 ? "#d4f0c5" :
                                            index % 6 === 4 ? "#fffacd" : "#ffdab9"}
                            transparent
                            opacity={0.8}
                        />
                    </Box>

                    {/* Category Title */}
                    <Text
                        position={[0, index * 1.5 + 0.6, 0.06]}
                        fontSize={0.12}
                        color="#4a4a4a"
                        anchorX="center"
                        anchorY="middle"
                        textTransform="capitalize"
                    >
                        {category}
                    </Text>

                    {/* Skills List */}
                    <Text
                        position={[0, index * 1.5 + 0.1, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.2}
                    >
                        {skills.slice(0, 6).join(', ')}
                        {skills.length > 6 && '...'}
                    </Text>

                    {/* Skill Count */}
                    <Text
                        position={[0, index * 1.5 - 0.6, 0.06]}
                        fontSize={0.07}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {skills.length} skills
                    </Text>
                </group>
            ))}

            {/* Central Hub */}
            <Sphere
                args={[0.5, 32, 32]}
                position={[0, 0, 0]}
            >
                <meshStandardMaterial
                    color="#e6e6fa"
                    transparent
                    opacity={0.8}
                    metalness={0.3}
                    roughness={0.2}
                />
            </Sphere>

            {/* Hub Text */}
            <Text
                position={[0, 0, 0.51]}
                fontSize={0.1}
                color="#4a4a4a"
                anchorX="center"
                anchorY="middle"
            >
                SKILLS
            </Text>

            {/* Connecting Lines */}
            {skillCategories.map((_, index) => (
                <Box
                    key={`line-${index}`}
                    args={[0.02, 0.02, 2]}
                    position={[0, index * 1.5, 0]}
                >
                    <meshStandardMaterial
                        color="#c1f4cd"
                        transparent
                        opacity={0.4}
                    />
                </Box>
            ))}
        </group>
    )
}

export default Skills 