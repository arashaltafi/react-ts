import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const AnimationSamples4 = () => {

  return (
    <div className="w-full py-8 flex flex-col gap-16">
      <h1 className='title'>AnimationSamples 4</h1>
      <div className='w-full h-full flex items-center justify-center flex-col gap-8 pb-8'>

        <JackInTheBox triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </JackInTheBox>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Bounce triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Bounce>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Fade triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Fade>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Roll triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Roll>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Flip triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Flip>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Slide triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Slide>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Zoom triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Zoom>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Hinge triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Hinge>

        <span className='w-[80%] h-px bg-slate-800 my-8 opacity-50' />

        <Rotate triggerOnce={true} cascade>
          <h4 className="w-full subtitle">Sample 1</h4>
          <h4 className="w-full subtitle">Sample 2</h4>
          <h4 className="w-full subtitle">Sample 3</h4>
        </Rotate>

      </div>
    </div>
  )
}

export default AnimationSamples4