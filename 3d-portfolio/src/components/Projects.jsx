import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Projects = ({ data }) => {
    const groupRef = useRef()
    const projectsRef = useRef([])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.05
        }

        projectsRef.current.forEach((project, index) => {
            if (project) {
                const angle = (index / data.length) * Math.PI * 2
                const radius = 4
                project.position.x = Math.cos(angle + time * 0.3) * radius
                project.position.z = Math.sin(angle + time * 0.3) * radius
                project.position.y = Math.sin(time * 1.8 + index * 0.5) * 0.4
                project.rotation.y = Math.sin(time * 0.6 + index * 0.3) * 0.2
            }
        })
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Project Cards */}
            {data.map((project, index) => (
                <group key={index} ref={(el) => (projectsRef.current[index] = el)}>
                    {/* Project Card Base */}
                    <Box
                        args={[2.8, 3.5, 0.1]}
                        position={[0, 0, 0]}
                    >
                        <meshStandardMaterial
                            color="#ffffff"
                            transparent
                            opacity={0.9}
                            metalness={0.1}
                            roughness={0.2}
                        />
                    </Box>

                    {/* Project Card Border */}
                    <Box
                        args={[2.9, 3.6, 0.05]}
                        position={[0, 0, -0.03]}
                    >
                        <meshStandardMaterial
                            color="#ffdab9"
                            transparent
                            opacity={0.8}
                        />
                    </Box>

                    {/* Project Title */}
                    <Text
                        position={[0, 1.2, 0.06]}
                        fontSize={0.12}
                        color="#4a4a4a"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={2.5}
                    >
                        {project.name}
                    </Text>

                    {/* Project Description */}
                    <Text
                        position={[0, 0.6, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.4}
                    >
                        {project.description}
                    </Text>

                    {/* Technologies */}
                    <Text
                        position={[0, -0.2, 0.06]}
                        fontSize={0.07}
                        color="#b8d4e3"
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.4}
                    >
                        {project.technologies.slice(0, 4).join(', ')}
                        {project.technologies.length > 4 && '...'}
                    </Text>

                    {/* Features Preview */}
                    <Text
                        position={[0, -0.8, 0.06]}
                        fontSize={0.06}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.4}
                    >
                        {project.features.slice(0, 2).join(', ')}
                        {project.features.length > 2 && '...'}
                    </Text>

                    {/* Links Indicator */}
                    <Text
                        position={[0, -1.4, 0.06]}
                        fontSize={0.07}
                        color="#e6d7ff"
                        anchorX="center"
                        anchorY="middle"
                    >
                        View Project →
                    </Text>
                </group>
            ))}

            {/* Central Hub */}
            <Sphere
                args={[0.6, 32, 32]}
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
                position={[0, 0, 0.61]}
                fontSize={0.12}
                color="#4a4a4a"
                anchorX="center"
                anchorY="middle"
            >
                PROJECTS
            </Text>

            {/* Project Count */}
            <Text
                position={[0, -0.2, 0.61]}
                fontSize={0.08}
                color="#6b6b6b"
                anchorX="center"
                anchorY="middle"
            >
                {data.length} Projects
            </Text>

            {/* Connecting Lines */}
            {data.map((_, index) => {
                const angle = (index / data.length) * Math.PI * 2
                const radius = 4
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius

                return (
                    <Box
                        key={`line-${index}`}
                        args={[0.02, 0.02, 4]}
                        position={[x * 0.5, 0, z * 0.5]}
                        rotation={[0, Math.atan2(z, x), 0]}
                    >
                        <meshStandardMaterial
                            color="#c1f4cd"
                            transparent
                            opacity={0.3}
                        />
                    </Box>
                )
            })}

            {/* Decorative Orbs */}
            {data.map((_, index) => {
                const angle = (index / data.length) * Math.PI * 2
                const radius = 6
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius

                return (
                    <Sphere
                        key={`decor-${index}`}
                        args={[0.15, 16, 16]}
                        position={[x, Math.sin(index * 0.5) * 0.5, z]}
                    >
                        <meshStandardMaterial
                            color={index % 4 === 0 ? "#ffd1dc" :
                                index % 4 === 1 ? "#b8d4e3" :
                                    index % 4 === 2 ? "#d4f0c5" : "#fffacd"}
                            transparent
                            opacity={0.6}
                        />
                    </Sphere>
                )
            })}
        </group>
    )
}

export default Projects 