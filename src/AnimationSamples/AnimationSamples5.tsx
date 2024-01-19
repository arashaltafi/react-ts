import { useState } from 'react';
import Confetti from 'react-dom-confetti';

const AnimationSamples5 = () => {
    const [showConfetti, setShowConfetti] = useState<boolean>(false)

    const ConfettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 100,
        dragFriction: 0.12,
        delay: 20,
        duration: 2000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "1000px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };


    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16" onClick={() => setShowConfetti(!showConfetti)}>
            <h1 className='title'>AnimationSamples 5</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8 pb-8'>
                <a className='subtitle' href='https://github.com/daniel-lundin/react-dom-confetti' target='_blank'>
                    github
                </a>
                <a className='subtitle' href='https://www.cssscript.com/confetti-falling-animation/' target='_blank'>
                    Demo Sample
                </a>

                <div className="flex items-center justify-center w-1/2 mx-auto">
                    <Confetti active={showConfetti} config={ConfettiConfig} />
                </div>
            </div>
        </div>
    )
}

export default AnimationSamples5