import React from 'react'
import BarLoader from 'react-spinners/BarLoader'

const ReactSpinners = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        window.open("https://www.davidhu.io/react-spinners/", "_blank")
    }

    const handleClick1 = () => {
        
    }

    const handleClick2 = () => {

    }

    const handleClick3 = () => {

    }

    const handleClick4 = () => {

    }

    const handleClick5 = () => {

    }

    const handleClick6 = () => {

    }

    const handleClick7 = () => {

    }

    const handleClick8 = () => {

    }

    const handleClick9 = () => {

    }

    const handleClick10 = () => {

    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='title py-12 no-underline'>React Spinners</div>

            <div className='flex flex-col gap-8 items-center justify-center text-center'>
            <BarLoader color="#36d7b7" />
                <button className='btnSuccess bg-red-500' onClick={handleClick1}>Sample 1</button>
                <button className='btnSuccess bg-blue-500' onClick={handleClick2}>Sample 2</button>
                <button className='btnSuccess bg-green-500' onClick={handleClick3}>Sample 3</button>
                <button className='btnSuccess bg-yellow-500' onClick={handleClick4}>Sample 4</button>
                <button className='btnSuccess bg-purple-500' onClick={handleClick5}>Sample 5</button>
                <button className='btnSuccess bg-orange-500' onClick={handleClick6}>Sample 6</button>
                <button className='btnSuccess bg-sky-500' onClick={handleClick7}>Sample 7</button>
                <button className='btnSuccess bg-zinc-500' onClick={handleClick8}>Sample 8</button>
                <button className='btnSuccess bg-pink-500' onClick={handleClick9}>Sample 9</button>
                <button className='btnSuccess bg-lime-500' onClick={handleClick10}>Sample 10</button>
            </div>

            <div className='flex items-end justify-center flex-grow py-16'>
                <a className='subtitle text-center hover:text-sky-500 hover:underline'
                    onClick={(e) => handleClick(e)}
                    href="https://www.davidhu.io/react-spinners/">Swal</a>
            </div>
        </div>
    )
}


export default ReactSpinners