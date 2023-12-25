import React from 'react'
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import Divider from './Divider';

const AwesomeReveal = () => {
    return (
        <div className='flex items-center justify-normal flex-col gap-8 py-16'>
            <div className='w-full'>
                <Bounce triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Bounce>
            </div>

            <Divider />

            <div className='w-full'>
                <Fade triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Fade>
            </div>

            <Divider />

            <div className='w-full'>
                <Flip triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Flip>
            </div>

            <Divider />

            <div className='w-full'>
                <Hinge triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Hinge>
            </div>

            <Divider />

            <div className='w-full'>
                <JackInTheBox triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </JackInTheBox>
            </div>

            <Divider />

            <div className='w-full'>
                <Roll triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Roll>
            </div>

            <Divider />

            <div className='w-full'>
                <Rotate triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Rotate>
            </div>

            <Divider />

            <div className='w-full'>
                <Slide triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Slide>
            </div>

            <Divider />

            <div className='w-full'>
                <Zoom triggerOnce={false} cascade>
                    <p className='subtitle'>Test Fade 1</p>
                    <p className='subtitle'>Test Fade 2</p>
                    <p className='subtitle'>Test Fade 3</p>
                </Zoom>
            </div>
        </div>
    )
}

export default AwesomeReveal