import React from 'react'
import { useNavigate } from 'react-router'

const AnimationSamples = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>AnimationSamples</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>

                <button
                    onClick={() => handleNavigate('sample1')}
                    className='btnSuccess bg-red-500 text-2xl px-8 py-4'
                >
                    Sample 1
                </button>
                <button
                    onClick={() => handleNavigate('sample2')}
                    className='btnSuccess bg-sky-500 text-2xl px-8 py-4'
                >
                    Sample 2
                </button>
                <button
                    onClick={() => handleNavigate('sample3')}
                    className='btnSuccess bg-teal-500 text-2xl px-8 py-4'
                >
                    Sample 3
                </button>

            </div>
        </div>
    )
}

export default AnimationSamples