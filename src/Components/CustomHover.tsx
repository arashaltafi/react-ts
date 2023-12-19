import { useEffect, useState } from 'react'
import Divider from './Divider'
import { CustomHoverAnimation, CustomMouseMove } from '../utils/CustomHoverUtils'

const CustomHover = () => {

  //customHover
  useEffect(() => {
    CustomHoverAnimation('.customHover')
  }, [])

  //mouse move animation
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    CustomMouseMove(setMousePosition)
  }, []);

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='title py-12 no-underline'>CustomHover</div>

      <div className='flex flex-col gap-8 items-center justify-center text-center'>

        <div className='customHover w-52 h-52'>
          <img src="https://arashaltafi.ir/arash.jpg" alt="arash" />
        </div>

        <Divider />

        <div className='customHover'>
          <button className='btnSuccess px-8 py-4'>Test</button>
        </div>

        <Divider />

        <div
          className='w-52 h-52 overflow-hidden rounded-full border-8 border-solid border-zinc-800 bg-no-repeat'
          style={{
            backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
            backgroundImage: 'url("https://arashaltafi.ir/arash.jpg")',
            backgroundSize: '105% 105%'
          }}>

        </div>

        <Divider />


        <button className="neumorphism mb-16">
          test
        </button>

        <Divider />

        <div className='neumorphism w-64 mb-16'>
          <img src="https://arashaltafi.ir/arash.jpg" alt="arash" className='w-full rounded-xl' />
          <h2 className='mt-2 mx-auto text-3xl font-bold text-center'>Title</h2>
          <h4 className='mt-2 text-lg text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        </div>

        <Divider />

      </div>
    </div>
  )
}

export default CustomHover