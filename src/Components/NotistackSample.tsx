import React from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const NotistackSample = () => {

    return (
        <>
            <h1 className='title'>NotistackSample</h1>
            <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center flex-col gap-32'>
                <SnackbarProvider />
                <button className='btnSuccess' onClick={() => enqueueSnackbar('Sample Text 1')}>Show snackbar</button>
                <button className='btnError' onClick={() => enqueueSnackbar('Sample Text 2')}>Show snackbar</button>
            </div>
        </>
    )
}

export default NotistackSample