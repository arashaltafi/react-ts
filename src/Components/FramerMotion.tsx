import { motion } from "framer-motion"

const FramerMotion = () => {

    return (
        <>
            <div className='title py-12 no-underline'>FramerMotion</div>
            <div className='flex flex-col gap-8 items-center justify-center text-center'>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                >
                    <h2>animate Example</h2>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <h2>whileHover whileTap Example</h2>
                </motion.button>

                <motion.div
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                >
                    <h2>drag dragConstraints Example</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2>Basic Motion</h2>
                </motion.div>

                {/* Variants Example */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 1 }}
                >
                    <h2>Variants Example</h2>
                </motion.div>

                {/* Hover Animation */}
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2>Hover Animation</h2>
                </motion.div>

                {/* Drag and Drop */}
                <motion.div
                    drag
                    dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
                >
                    <h2>Drag and Drop</h2>
                </motion.div>

                {/* Animate Presence */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <h2>Animate Presence</h2>
                </motion.div>

                {/* Gestures */}
                <motion.div
                    drag
                    dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
                    whileHover={{ scale: 1.2 }}
                    onTap={() => alert('Tap!')}
                >
                    <h2>Gestures</h2>
                </motion.div>
            </div>
        </>
    )
}

export default FramerMotion