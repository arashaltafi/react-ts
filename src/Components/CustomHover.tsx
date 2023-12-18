import { useEffect } from 'react'
import { CustomHoverUtils, CustomHoverUtilsBest } from '../utils/CustomHoverUtils'
import Divider from './Divider'

const CustomHover = () => {
  useEffect(() => {
    CustomHoverUtils()
  }, [])

  useEffect(() => {
    CustomHoverUtilsBest()
  }, []);

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='title py-12 no-underline'>CustomHover</div>

      <div className='flex flex-col gap-8 items-center justify-center text-center'>
        <button className="customHover p-8"><span>Hover!</span></button>

        <Divider />

        <div id='customHoverBest' className='rounded-xl overflow-hidden w-52 h-52'>
          <img src="https://arashaltafi.ir/arash.jpg" alt="arash" />
        </div>

        <Divider />

        <div id='customHoverBest' className='rounded-xl overflow-hidden'>
          <button className='btnSuccess px-8 py-4'>Test</button>
        </div>

      </div>
    </div>
  )
}

export default CustomHover