import ScrollAnimation from 'react-animate-on-scroll';
import Divider from '../Components/Divider';

// npm install react-animate-on-scroll animate.css --force
const AnimationSamples7 = () => {
    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>AnimationSamples 7</h1>
            <div className='w-full h-screen flex items-center justify-center flex-col gap-32 pb-8'>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <h1>
                        React Animate On Scroll
                    </h1>
                    <h2>
                        Using:
                    </h2>
                </ScrollAnimation>

                
                <Divider />


                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <h2>
                        <a href='https://daneden.github.io/animate.css/'>
                            Animate.css
                        </a>
                    </h2>
                </ScrollAnimation>


                <Divider />


                <ScrollAnimation animateIn='fadeIn'>
                    <h1>
                        animateIn
                    </h1>
                </ScrollAnimation>


                <Divider />


                <ScrollAnimation animateIn='flipInY'
                    animateOut='flipOutY'>
                    <h1>
                        animateOut
                    </h1>
                </ScrollAnimation>


                <Divider />


                <ScrollAnimation animateIn='wobble'
                    initiallyVisible={true}>
                    <h1>
                        initiallyVisible
                    </h1>
                </ScrollAnimation>


                <Divider />


                <ScrollAnimation duration={5}
                    animateIn='hinge'
                    initiallyVisible={true}>
                    <h1>
                        duration
                    </h1>
                </ScrollAnimation>


                <Divider />
                

                <ScrollAnimation delay={4000}
                    animateIn='tada'
                    initiallyVisible={true}>
                    <h1>
                        delay
                    </h1>
                </ScrollAnimation>


                <Divider />

                
                <ScrollAnimation animateIn='bounce'
                    initiallyVisible={true}
                    animateOnce={true}>
                    <h1>
                        animateOnce
                    </h1>
                </ScrollAnimation>



            </div>
        </div>
    )
}

export default AnimationSamples7