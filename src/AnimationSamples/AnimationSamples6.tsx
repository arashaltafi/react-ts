import { useSpring, animated } from '@react-spring/web'

const AnimationSamples6 = () => {

    // Fade animation
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    // Looping fade with delay
    const advanceFade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        loop: true,
        delay: 2000,
        config: { duration: 1000 },
        immediate: false
    })

    // Sliding animation
    const slide = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        config: { duration: 1000 },
    });

    // Scaling animation
    const scale = useSpring({
        from: { transform: 'scale(0)' },
        to: { transform: 'scale(1)' },
        config: { duration: 1000 },
    });

    // Rotating animation
    const rotate = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
        config: { duration: 1000 },
    });

    // Background color change
    const bgColorChange = useSpring({
        from: { backgroundColor: 'red' },
        to: { backgroundColor: 'blue' },
        config: { duration: 1000 },
    });

    // Bouncing animation
    const bounce = useSpring({
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-50px)' },
        loop: true,
        config: { tension: 200, friction: 10 },
    });

    // Pulse animation
    const pulse = useSpring({
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.2)' },
        loop: true,
        config: { duration: 1000 },
    });

    // Color change animation
    const colorChange = useSpring({
        from: { color: 'red' },
        to: { color: 'green' },
        config: { duration: 1000 },
    });

    // Floating animation
    const float = useSpring({
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-20px)' },
        loop: true,
        config: { tension: 150, friction: 10 },
    });

    // Spinning animation
    const spin = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
        loop: true,
        config: { duration: 2000 },
    });

    // Swaying animation
    const sway = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(10deg)' },
        reverse: true
    });

    // Heartbeat animation
    const heartbeat = useSpring({
        from: { transform: 'scale(1)' },
        to: [
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
        ],
        loop: true,
        config: { duration: 1000 },
    });

    // Staggered animation
    const staggered = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    // Flip animation
    const flip = useSpring({
        from: { transform: 'rotateX(180deg)' },
        to: { transform: 'rotateX(0deg)' },
        config: { duration: 1000 },
    });

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>AnimationSamples 6</h1>
            <div className='w-full h-screen flex items-center justify-center flex-col gap-8 pb-8'>
                <a className='subtitle' href='https://www.react-spring.dev/docs/' target='_blank'>
                    Demo Samples
                </a>

                <div className='w-full h-full grid grid-cols-4 items-center justify-center gap-8 px-16'>
                    {/* Fade Animation */}
                    <animated.div style={fade} className="w-full h-40 bg-red-500" />

                    {/* Looping Fade with Delay */}
                    <animated.div style={advanceFade} className="w-full h-40 bg-blue-500" />

                    {/* Sliding Animation */}
                    <animated.div style={slide} className="w-full h-40 bg-green-500" />

                    {/* Scaling Animation */}
                    <animated.div style={scale} className="w-full h-40 bg-yellow-500" />

                    {/* Rotating Animation */}
                    <animated.div style={rotate} className="w-full h-40 bg-purple-500" />

                    {/* Background Color Change */}
                    <animated.div style={bgColorChange} className="w-full h-40" />

                    {/* Bouncing Animation */}
                    <animated.div style={bounce} className="w-1/2 h-1/2 bg-pink-500" />

                    {/* Pulse Animation */}
                    <animated.div style={pulse} className="w-1/2 h-1/2 bg-cyan-500" />

                    {/* Color Change Animation */}
                    <animated.div style={colorChange} className="w-1/2 h-1/2">
                        Text with color change
                    </animated.div>

                    {/* Floating Animation */}
                    <animated.div style={float} className="w-1/2 h-1/2 bg-indigo-500" />

                    {/* Spinning Animation */}
                    <animated.div style={spin} className="w-1/2 h-1/2 bg-orange-500" />

                    {/* Swaying Animation */}
                    <animated.div style={sway} className="w-1/2 h-1/2 bg-lime-500" />

                    {/* Heartbeat Animation */}
                    <animated.div style={heartbeat} className="w-1/2 h-1/2 bg-teal-500" />

                    {/* Staggered Animation */}
                    <animated.div style={staggered} className="w-1/2 h-1/2 bg-gray-500" />

                    {/* Flip Animation */}
                    <animated.div style={flip} className="w-1/2 h-1/2 bg-pink-500" />
                </div>
            </div>
        </div >
    )
}

export default AnimationSamples6