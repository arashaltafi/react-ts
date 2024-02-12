import { useState } from 'react'
import { useTrail, animated, useSpring, useTransition } from '@react-spring/web'
import './StylesSpring.css'

const SpringSample2 = () => {
    //useSpring
    const [isHappy, setIsHappy] = useState<boolean>(false);
    const [isSad, setIsSad] = useState<boolean>(false);
    const [isAngry, setIsAngry] = useState<boolean>(false);

    // Happy animation
    const happyProps = useSpring({
        opacity: isHappy ? 1 : 0,
        transform: isHappy ? 'translateY(0)' : 'translateY(-100px)',
        color: isHappy ? '#FFD700' : '#000000',
        from: { opacity: 0, transform: 'translateY(-100px)', color: '#000000' },
    });

    // Sad animation
    const sadProps = useSpring({
        opacity: isSad ? 1 : 0,
        transform: isSad ? 'translateY(0)' : 'translateY(-100px)',
    });

    // Angry animation
    const angryProps = useSpring({
        opacity: isAngry ? 1 : 0,
        transform: isAngry ? 'translateY(0)' : 'translateY(-100px)',
    });






    //useTransition
    const [mood, setMood] = useState<string>('');

    const transitions = useTransition(mood, {
        from: { opacity: 0, transform: 'translateY(-100px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(100px)' },
    });

    const handleClick = (selectedMood: string) => {
        setMood(selectedMood);
    };





    //useTrail
    const [moods1, setMoods1] = useState<string[]>([]);

    const handleClick1 = (selectedMood: string) => {
        setMoods1([...moods1, selectedMood]);
    };

    const trail = useTrail(moods1.length, {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });



    return (
        <div className='flex flex-col w-full items-center justify-center gap-8'>
            <h1>SpringSample2</h1>
            <div className='flex flex-row gap-8 items-center justify-center'>
                <button className='btnSuccess' onClick={() => setIsHappy(!isHappy)}>Toggle Happy</button>
                <button className='btnSuccess' onClick={() => setIsSad(!isSad)}>Toggle Sad</button>
                <button className='btnSuccess' onClick={() => setIsAngry(!isAngry)}>Toggle Angry</button>
            </div>
            <div className='flex flex-row gap-8 items-center justify-center'>
                <animated.div style={happyProps}>😊 Happy</animated.div>
                <animated.div style={sadProps}>😢 Sad</animated.div>
                <animated.div style={angryProps}>😡 Angry</animated.div>
            </div>





            <div className='flex flex-row gap-8 items-center justify-center'>
                <button onClick={() => handleClick('happy')}>Happy</button>
                <button onClick={() => handleClick('sad')}>Sad</button>
                <button onClick={() => handleClick('angry')}>Angry</button>
            </div>

            <div className='flex flex-row gap-8 items-center justify-center'>
                {transitions((style, item) => (
                    item && (
                        <animated.div style={style}>
                            {item === 'happy' && (
                                <div>
                                    <h1>😊 Happy</h1>
                                    <p>Yay! You're happy!</p>
                                </div>
                            )}
                            {item === 'sad' && (
                                <div>
                                    <h1>😢 Sad</h1>
                                    <p>Oh no, you're sad!</p>
                                </div>
                            )}
                            {item === 'angry' && (
                                <div>
                                    <h1>😡 Angry</h1>
                                    <p>Don't mess with me, I'm angry!</p>
                                </div>
                            )}
                        </animated.div>
                    )
                ))}
            </div>





            <div className='flex flex-row gap-8 items-center justify-center'>
                <button onClick={() => handleClick1('happy')}>Happy</button>
                <button onClick={() => handleClick1('sad')}>Sad</button>
                <button onClick={() => handleClick1('angry')}>Angry</button>
            </div>

            <div className='flex flex-row gap-8 items-center justify-center'>
                {trail.map((style, index) => (
                    <animated.div key={index} style={style}>
                        {moods1[index]}
                    </animated.div>
                ))}
            </div>

        </div>
    )
}

export default SpringSample2