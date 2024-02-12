import * as React from 'react'
import useMeasure from 'react-use-measure'
import { useTrail, animated, useSpring, useTransition } from '@react-spring/web'
import './StylesSpring.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const SpringSample = () => {
    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }))
    const [ref, { left, top }] = useMeasure()

    const handleMouseMove = (e: any) => {
        api.start({ xy: [e.clientX - left, e.clientY - top] })
    }

    const springs = useSpring({
        from: { x: 0, opacity: 0 },
        to: { x: -100, opacity: 100 },
        delay: 100,
        loop: true,
        reverse: true
    })

    const [trails] = useTrail(
        2,
        () => ({
            from: { opacity: 0 },
            to: { opacity: 100 },
            delay: 100,
            loop: true,
            reverse: true
        }),
        []
    )

    const [transitions] = useTransition(2, () => ({
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
    }))

    return (
        <div className='overflow-x-hidden'>
            <h1>React Spring Sample</h1>

            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
                    />
                </filter>
            </svg>
            <div ref={ref} className={`hooksMain`} onMouseMove={handleMouseMove}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
                ))}
            </div>

            <animated.div
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 80,
                    height: 80,
                    marginTop: 16,
                    background: '#EF4444',
                    borderRadius: 8,
                    ...springs,
                }}
            />

            <div>
                {trails.map(props => (
                    <animated.div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 100,
                            marginTop: 16,
                            borderRadius: 8,
                            ...props,
                        }}
                    >
                        useTrail
                    </animated.div>
                ))}
            </div>



            <div> {
                transitions((style, item) => (
                    <animated.div style={style}>
                        useTransition
                    </animated.div>
                ))
            }
            </div>

        </div>
    )
}

export default SpringSample