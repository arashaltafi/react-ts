import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const ParallaxSample1 = () => {
    const [reset, setReset] = useState<any>(true)
    const [tiltReverse, setTiltReverse] = useState<any>(true)
    const [tiltEnable, setTiltEnable] = useState<any>(true)
    const [scale, setScale] = useState<any>(1)

    return (
        <div className='flex flex-col gap-8 items-center justify-center w-full bg-pink-500 text-white'>
            <h1 className='text-5xl'>ParallaxSample 1</h1>
            <span className='w-full h-px bg-white rounded-full' />
            <div className='flex flex-col items-center justify-stretch gap-4 w-full'>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <label htmlFor='reset-tilt' className='text-lg cursor-pointer font-bold'>Reset Tilt:</label>
                    <input
                        alt='reset tilt'
                        id='reset-tilt'
                        about='reset tilt'
                        type='checkbox'
                        className='w-8 h-8'
                        defaultChecked
                        value={reset}
                        onChange={() => setReset(!reset)}
                    />
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <label htmlFor='tilt-reverse' className='text-lg cursor-pointer font-bold'>Reverse Tilt:</label>
                    <input
                        alt='reverse tilt'
                        id='reverse-tilt'
                        about='reverse tilt'
                        type='checkbox'
                        className='w-8 h-8'
                        defaultChecked
                        value={tiltReverse}
                        onChange={() => setTiltReverse(!tiltReverse)}
                    />
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <label htmlFor='enable-reverse' className='text-lg cursor-pointer font-bold'>Enable Tilt:</label>
                    <input
                        alt='enable tilt'
                        id='enable-tilt'
                        about='enable tilt'
                        type='checkbox'
                        className='w-8 h-8'
                        defaultChecked
                        value={tiltEnable}
                        onChange={() => setTiltEnable(!tiltEnable)}
                    />
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <label htmlFor='tilt-reverse' className='w-full text-lg cursor-pointer font-bold'>Scale Tilt:</label>
                    <input
                        alt='scale tilt'
                        id='scale-tilt'
                        about='scale tilt'
                        type='range'
                        max={2}
                        min={0}
                        step={0.1}
                        value={scale}
                        onChange={(e) => setScale(e.target.value)}
                    />
                </div>

            </div>

            <Tilt
                reset={reset}
                tiltReverse={tiltReverse}
                scale={scale}
                tiltEnable={tiltEnable}
                transitionSpeed={2500}
                perspective={500}

                className='mt-32 background-stripes'
                style={{
                    transformStyle: 'preserve-3d'
                }}
                gyroscope={true}
                glareEnable={true}
                glareMaxOpacity={0.45}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
            >
                <div style={{
                    transform: 'translateZ(60px)'
                }} className='bg-green-500 rounded-lg shadow-xl shadow-white flex flex-col gap-2 items-center justify-center px-16 py-32'>
                    <h2>React Parallax Tilt</h2>
                    <h4>👀</h4>
                </div>
            </Tilt>
        </div>
    )
}

export default ParallaxSample1