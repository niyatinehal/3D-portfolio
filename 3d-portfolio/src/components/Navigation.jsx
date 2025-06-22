import { motion } from 'framer-motion'

const Navigation = ({ sections, currentSection, onSectionChange }) => {
    return (
        <motion.nav
            className="navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            {sections.map((section) => (
                <motion.button
                    key={section.id}
                    className={`nav-button ${currentSection === section.id ? 'active' : ''}`}
                    onClick={() => onSectionChange(section.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    {section.label}
                </motion.button>
            ))}
        </motion.nav>
    )
}

export default Navigation 