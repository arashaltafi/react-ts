import React from 'react'
import { Bounce, Flip, Slide, toast, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ReactToastifySample = () => {

    const showToast1 = () => {
        toast('🦄 Wow so easy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
    }

    const showToast2 = () => {
        toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    const showToast3 = () => {
        toast.warn('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
        });
    }

    const showToast4 = () => {
        toast.success('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    }

    const showToast5 = () => {
        toast.info('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        });
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>React Toastify Sample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>

                <button className='btnSuccess bg-red-500' onClick={showToast1}>toast sample 1</button>
                <button className='btnSuccess bg-green-500' onClick={showToast2}>toast sample 2</button>
                <button className='btnSuccess bg-blue-500' onClick={showToast3}>toast sample 3</button>
                <button className='btnSuccess bg-pink-500' onClick={showToast4}>toast sample 4</button>
                <button className='btnSuccess bg-yellow-500' onClick={showToast5}>toast sample 5</button>


                <ToastContainer limit={5} />

                <div className='flex items-end justify-center flex-grow py-16'>
                    <a className='w-full subtitle text-center no-underline line-clamp-1  hover:text-sky-500 hover:underline'
                        target='_blank'
                        href="https://fkhadra.github.io/react-toastify/introduction">
                        React Toastify
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReactToastifySample