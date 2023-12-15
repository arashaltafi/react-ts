import React from 'react'
import { Link } from 'react-router-dom'

const Libraries = () => {
    return (
        <>
            <div className="title no-underline py-16">Libraries</div>

            <div className='flex flex-col gap-8 items-center justify-center'>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/styledComponents">Styled Components</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/reactIcons">React Icons</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/bootstrap">React Bootstrap</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/chakraUI">ChakraUI</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/materialUI">MaterialUI</Link>
            </div>
        </>
    )
}

export default Libraries