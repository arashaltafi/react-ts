import React from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const NotistackSample = () => {

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col gap-32'>
            <SnackbarProvider />
            <button className='btnSuccess' onClick={() => enqueueSnackbar('Sample Text 1')}>Show snackbar</button>
            <button className='btnError' onClick={() => enqueueSnackbar('Sample Text 2')}>Show snackbar</button>
        </div>
    )
}

export default NotistackSample