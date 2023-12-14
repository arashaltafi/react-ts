import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { BiAdjust } from "react-icons/bi";
import { IoIosChatbubbles } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const ReactIcons = () => {

  const handleClick = (e: any) => {
    e.preventDefault()
    window.open("https://react-icons.github.io/react-icons/", "_blank")
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='title py-12 no-underline'>ReactIcons</div>

      <div className='flex flex-col gap-8 items-center justify-center text-center'>
        <BiAdjust className='w-12 h-12 hover:text-zinc-500' />
        <BiBookmark className='w-12 h-12 hover:text-red-500' />
        <CiHome className='w-12 h-12 hover:text-red-500' />
        <IoIosChatbubbles className='w-12 h-12 hover:text-red-500' />
        <IoSettingsSharp className='w-12 h-12 hover:text-red-500' />
        <CgProfile className='w-12 h-12 hover:text-red-500' />
        <AiFillLike className='w-12 h-12 hover:text-green-500' />
        <AiFillDislike className='w-12 h-12 hover:text-red-500' />
      </div>

      <div className='flex items-end justify-center flex-grow pb-16'>
        <a className='subtitle text-center hover:text-sky-500 hover:underline'
          onClick={(e) => handleClick(e)}
          href="https://react-icons.github.io/react-icons/">React Icons</a>
      </div>
    </div>
  )
}

export default ReactIcons