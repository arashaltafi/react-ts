import React from 'react'
import { Link } from 'react-router-dom'

const Libraries = () => {
    return (
        <>
            <div className="title no-underline py-16">Libraries</div>

            <div className='flex flex-col gap-8 items-center justify-center py-8'>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/styledComponents">Styled Components</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/reactIcons">React Icons</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/bootstrap">React Bootstrap</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/chakraUI">ChakraUI</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/materialUI">MaterialUI</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/framerMotion">FramerMotion</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/customHooks">CustomHooks</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/reactPdf">ReactPdf</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/axios">Axios</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/reCaptcha">ReCaptcha</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/i8Next">I8Next</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/recharts">Recharts</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/swal">Swal</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/swal2">Swal2</Link>
                <Link className='btnSuccess text-xl text-center py-6 bg-pink-500 w-96' to="/libraries/reactSpinners">ReactSpinners</Link>
            </div>
        </>
    )
}

export default Libraries