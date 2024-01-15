import { useEffect } from 'react';
import { Animate, AnimateGroup, AnimateKeyframes, useAnimate } from 'react-simple-animate';

//npm i react-simple-animate
const AnimationSamples3 = () => {

  const { play, isPlaying, style } = useAnimate({
    start: { opacity: 0 },
    end: { opacity: 1 }
  });

  useEffect(() => {
    play(true);
  }, []);


  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>AnimationSamples 3</h1>
      <div className='w-full h-full flex items-center justify-center flex-col gap-8 pb-8'>

        <div style={style}>
          <h1 className='subtitle w-full'>Sample Opacity with hook</h1>
        </div>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Animate play={true} start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <h1 className='subtitle w-full'>Sample Opacity with component</h1>
        </Animate>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <div>
          <AnimateGroup play>
            <Animate duration={0.5} start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
              <h3>play first</h3>
            </Animate>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
              <h3>play second</h3>
            </Animate>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
              <h3>play last</h3>
            </Animate>
          </AnimateGroup>
        </div>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <AnimateKeyframes
          play
          duration={1}
          direction='alternate'
          keyframes={['opacity: 0', 'opacity: 1']} // same as CSS @keyframes { 0% { ... } 100% { ... }}
        >
          <h3>AnimateKeyframes Sample 1</h3>
        </AnimateKeyframes>

        <AnimateKeyframes
          play
          duration={0.5}
          direction='alternate-reverse'
          keyframes={[
            { 0: 'opacity: 0' }, // 0%
            { 50: 'opacity: 0.5' }, // 50%
            { 100: 'opacity: 1' } // 100%
          ]}
        >
          <h3>AnimateKeyframes Sample 2</h3>
        </AnimateKeyframes>

      </div>
    </div>
  )
}

export default AnimationSamples3