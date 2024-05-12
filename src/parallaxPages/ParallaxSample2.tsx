import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax"

const ParallaxSample2 = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotateY: [0, 360],
        rotateX: [360, 0],
        speed: 0.1,
    });

    const mage = useParallax<HTMLDivElement>({
        scale: [0.2, 1, 'easeInQuad'],
    });

    const frog = useParallax<HTMLDivElement>({
        scaleX: [1, 0, 'easeInQuad'],
    });

    const moon = useParallax<HTMLDivElement>({
        scale: [2.5, 1, 'easeInQuad'],
    });


    const parallax2 = useParallax<HTMLDivElement>({
        translateX: [0, 100, 'easeOutQuint'],
        translateY: [-100, 100, 'easeInQuint'],
    });

    return (
        <div className="flex flex-col gap-16 items-center justify-center w-full">
            <h1 className="text-5xl">ParallaxSample 2</h1>

            <Parallax speed={-10}>
                <div className="bg-red-500 size-16">
                    test 1
                </div>
            </Parallax>
            <Parallax speed={10}>
                <div className="bg-green-500 size-16">
                    test 2
                </div>
            </Parallax>

            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

            <div ref={parallax.ref} className="flex flex-row gap-4 items-center justify-center">
                <div className="text-3xl">👍🏻</div>
                <div className="text-3xl">👏🏻</div>
                <div className="text-3xl">🙌🏻</div>
                <div className="text-3xl">👎🏻</div>
            </div>

            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="text-5xl" ref={mage.ref}>
                    🧙🏻‍♂️
                </div>
                <div className="text-5xl" ref={frog.ref}>
                    🐸
                </div>
                <div className="text-5xl" ref={moon.ref}>
                    🌚
                </div>
            </div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <ParallaxBanner
                layers={[
                    { image: 'https://arashaltafi.ir/Social_Media/story-02.jpg', speed: -30 },
                    { image: 'https://arashaltafi.ir/Social_Media/story-02.jpg', speed: -10 },
                ]}
                className="w-full h-96"
            />
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <div ref={parallax2.ref} className="w-1/2 flex flex-row gap-4 items-center justify-center">
                <div className="text-5xl">💖</div>
            </div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
        </div>
    )
}

export default ParallaxSample2