import React from 'react'
import { EmojiHappy, Add, AddCircle, Call, Dislike, Like1, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'iconsax-react';

const ReactIconSax = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        window.open("https://iconsax-react.pages.dev/", "_blank")
      }
    
      return (
        <div className='w-full h-full flex flex-col gap-8'>
          <div className='title py-12 no-underline'>ReactIcons</div>
    
          <div className='flex flex-col gap-8 items-center justify-center text-center'>
            <EmojiHappy className='w-12 h-12 hover:text-red-500' />
            <Add className='w-12 h-12 hover:text-red-500' />
            <AddCircle className='w-12 h-12 hover:text-red-500' />
            <Call className='w-12 h-12 hover:text-red-500' />
            <Like1 className='w-12 h-12 hover:text-red-500' />
            <Dislike className='w-12 h-12 hover:text-red-500' />
            <ArrowRight className='w-12 h-12 hover:text-red-500' />
            <ArrowLeft className='w-12 h-12 hover:text-red-500' />
            <ArrowUp className='w-12 h-12 hover:text-red-500' />
            <ArrowDown className='w-12 h-12 hover:text-red-500' />
          </div>
    
          <div className='flex items-end justify-center flex-grow pb-16'>
            <a className='subtitle text-center hover:text-sky-500 hover:underline'
              onClick={(e) => handleClick(e)}
              href="https://iconsax-react.pages.dev/">React Icons</a>
          </div>
        </div>
      )
}

export default ReactIconSax