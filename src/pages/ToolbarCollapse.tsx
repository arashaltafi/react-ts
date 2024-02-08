import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';

const ToolbarCollapse = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Define the animation properties for the header height
    const { height } = useSpring({
        height:
            scrollPosition > 100
                ? scrollPosition > 150
                    ? scrollPosition > 200
                        ? scrollPosition > 250
                            ? scrollPosition > 300
                                ? scrollPosition > 350
                                    ? scrollPosition > 400
                                        ? scrollPosition > 450
                                            ? scrollPosition > 500
                                                ? 500
                                                : 500
                                            : 450
                                        : 400
                                    : 350
                                : 300
                            : 250
                        : 200
                    : 150
                : 100,
    });

    return (
        <div>
            <animated.header
                style={{
                    height,
                }}
                className="bg-blue-500 p-4 fixed w-full z-10"
            >
                <div className="h-full w-full flex items-center justify-center">
                    <img
                        className='h-full rounded-full'
                        src="https://arashaltafi.ir/arash.jpg"
                        alt="arash"
                    />
                </div>
            </animated.header>

            {/* Your other content goes here */}
            <div id="section1" className="h-screen bg-gray-100">
                Section 1 Content
            </div>
            <div id="section2" className="h-screen bg-gray-200">
                Section 2 Content
            </div>
        </div>
    );
};

export default ToolbarCollapse