import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { IoReloadCircleOutline } from "react-icons/io5";

const FramerMotion = () => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <>
            <button onClick={() => window.location.reload()} className="p-3 m-4 bg-purple-500 rounded-full text-white font-bold text-center text-lg flex flex-col gap-2 items-center justify-center hover:bg-purple-700 transition hover:scale-105">
                reload
                <IoReloadCircleOutline />
            </button>
            <motion.div
                className='title py-12 no-underline'
                initial={{ y: '100px' }}
                animate={{ y: '-10px' }}
            >
                FramerMotion
            </motion.div>
            <motion.div
                className='flex flex-col gap-8 items-center justify-center text-center py-16'
                initial={{ x: '-100px' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.1, delay: 0, type: 'spring', stiffness: 200 }}
            >

                <motion.h2
                    transition={{ duration: 0.5, delay: 0.5 }}
                    animate={{ fontSize: '50px', color: 'red', x: 0, y: 10 }}
                >
                    Welcome To My App
                </motion.h2>

                <motion.button
                    initial={{ scale: 1, opacity: 0.5 }}
                    className="btnSuccess bg-green-500"
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
                    animate={{ scale: 1.5, opacity: 1, margin: '50px' }}
                >
                    Test Button
                </motion.button>

                <motion.h1
                    initial={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                    animate={{ rotateY: 360, rotateX: 360, opacity: 0 }}
                    transition={{ repeat: 1, duration: 2, delay: 1, repeatType: "reverse" }}
                >
                    Test Rotate
                </motion.h1>

                <motion.div
                    className="bg-red-500 px-4 py-2 text-white opacity-90"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                >
                    <h2>animate Example</h2>
                </motion.div>

                <motion.button
                    className="btnSuccess"
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(0,0,0)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.2, delay: 0 }}
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Simple Animation
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >
                    Spring Animation
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                >
                    Tween Animation
                </motion.div>

                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ type: 'tween', duration: 1, repeat: Infinity }}
                >
                    Infinite Rotation
                </motion.div>

                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Hover Animation
                </motion.div>

            </motion.div>

        </>
    )
}

export default FramerMotion