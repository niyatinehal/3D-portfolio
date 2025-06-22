import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Text, Sphere, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

const Contact = ({ data }) => {
    const groupRef = useRef()
    const contactItemsRef = useRef([])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.05
        }

        contactItemsRef.current.forEach((item, index) => {
            if (item) {
                const angle = (index / 4) * Math.PI * 2
                const radius = 3
                item.position.x = Math.cos(angle + time * 0.2) * radius
                item.position.z = Math.sin(angle + time * 0.2) * radius
                item.position.y = Math.sin(time * 1.5 + index * 0.5) * 0.3
                item.rotation.y = Math.sin(time * 0.4 + index * 0.3) * 0.1
            }
        })
    })

    const contactInfo = [
        { label: 'Email', value: data.email, icon: '✉️' },
        { label: 'Phone', value: data.phone, icon: '📞' },
        { label: 'Location', value: data.location, icon: '📍' },
        { label: 'LinkedIn', value: data.linkedin, icon: '💼' },
        { label: 'GitHub', value: data.github, icon: '🐙' }
    ]

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
                <group key={index} ref={(el) => (contactItemsRef.current[index] = el)}>
                    {/* Contact Card */}
                    <Box
                        args={[2.2, 1.8, 0.1]}
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

                    {/* Card Border */}
                    <Box
                        args={[2.3, 1.9, 0.05]}
                        position={[0, 0, -0.03]}
                    >
                        <meshStandardMaterial
                            color={index % 5 === 0 ? "#ffd1dc" :
                                index % 5 === 1 ? "#b8d4e3" :
                                    index % 5 === 2 ? "#e6d7ff" :
                                        index % 5 === 3 ? "#d4f0c5" : "#fffacd"}
                            transparent
                            opacity={0.8}
                        />
                    </Box>

                    {/* Icon */}
                    <Text
                        position={[0, 0.4, 0.06]}
                        fontSize={0.2}
                        color="#4a4a4a"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {info.icon}
                    </Text>

                    {/* Label */}
                    <Text
                        position={[0, 0.1, 0.06]}
                        fontSize={0.08}
                        color="#6b6b6b"
                        anchorX="center"
                        anchorY="middle"
                        textTransform="uppercase"
                    >
                        {info.label}
                    </Text>

                    {/* Value */}
                    <Text
                        position={[0, -0.2, 0.06]}
                        fontSize={0.07}
                        color="#4a4a4a"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={1.8}
                    >
                        {info.value}
                    </Text>
                </group>
            ))}

            {/* Central Hub */}
            <Sphere
                args={[0.7, 32, 32]}
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
                position={[0, 0.1, 0.71]}
                fontSize={0.14}
                color="#4a4a4a"
                anchorX="center"
                anchorY="middle"
            >
                CONTACT
            </Text>

            {/* Subtitle */}
            <Text
                position={[0, -0.1, 0.71]}
                fontSize={0.08}
                color="#6b6b6b"
                anchorX="center"
                anchorY="middle"
            >
                Let's Connect!
            </Text>

            {/* Connecting Lines */}
            {contactInfo.map((_, index) => {
                const angle = (index / contactInfo.length) * Math.PI * 2
                const radius = 3
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius

                return (
                    <Box
                        key={`line-${index}`}
                        args={[0.02, 0.02, 3]}
                        position={[x * 0.5, 0, z * 0.5]}
                        rotation={[0, Math.atan2(z, x), 0]}
                    >
                        <meshStandardMaterial
                            color="#c1f4cd"
                            transparent
                            opacity={0.4}
                        />
                    </Box>
                )
            })}

            {/* Decorative Elements */}
            <Cylinder
                args={[0.1, 0.1, 0.8, 8]}
                position={[0, -2, 0]}
            >
                <meshStandardMaterial
                    color="#ffdab9"
                    transparent
                    opacity={0.6}
                />
            </Cylinder>

            <Sphere
                args={[0.2, 16, 16]}
                position={[2, 1, 0]}
            >
                <meshStandardMaterial
                    color="#d4f0c5"
                    transparent
                    opacity={0.5}
                />
            </Sphere>

            <Sphere
                args={[0.15, 16, 16]}
                position={[-2, -1, 0]}
            >
                <meshStandardMaterial
                    color="#b8d4e3"
                    transparent
                    opacity={0.5}
                />
            </Sphere>

            <Box
                args={[0.3, 0.3, 0.3]}
                position={[1.5, -1.5, 0]}
            >
                <meshStandardMaterial
                    color="#fffacd"
                    transparent
                    opacity={0.6}
                />
            </Box>

            <Box
                args={[0.25, 0.25, 0.25]}
                position={[-1.5, 1.5, 0]}
            >
                <meshStandardMaterial
                    color="#e6d7ff"
                    transparent
                    opacity={0.6}
                />
            </Box>
        </group>
    )
}

export default Contact 