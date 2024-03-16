import { Skeleton } from '@mui/material'
import Divider from '../Components/Divider'
import { Typography } from '@material-ui/core'
import { useState } from 'react'

const SkeletonSample1 = () => {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <div className="w-full py-8 flex flex-col gap-16">
            <h1 className='title'>SkeletonSample1</h1>
            <button
                className={`${loading ? 'btnSuccess' : 'btnError'} w-1/3 mx-auto`}
                onClick={() => setLoading(!loading)}
            >
                {loading ? 'Hide Skeleton' : 'Show Skeleton'}
            </button>
            <div className='w-full flex items-center justify-center flex-col gap-6 mt-16'>
                <div className='w-1/2 flex flex-col gap-2'>
                    {/* For variant="text", adjust the height via font-size */}
                    <p className='subtitle'>{loading ? <Skeleton animation="pulse" variant="text" sx={{ fontSize: '2rem' }} /> : 'Skeleton Title'}</p>

                    {/* For other variants, adjust the size with `width` and `height` */}
                    {
                        loading
                            ?
                            <Skeleton animation="wave" variant="circular" width={200} height={200} />
                            : <img src='https://arashaltafi.ir/arash_circle.png' width={200} height={200} />
                    }

                    <h2>{loading ? <Skeleton animation="wave" variant="rectangular" width={210} height={50} /> : 'Title'}</h2>
                    <h4>{loading ? <Skeleton animation="wave" variant="rounded" width={210} height={40} /> : 'sub title'}</h4>
                </div>

                <Divider />

                <div className='w-1/2 flex flex-col gap-2'>
                    {loading ? <Skeleton sx={{ bgcolor: '#64748B' }} animation="pulse" variant='rounded' /> : ''}
                    {loading ? <Skeleton animation="wave" variant='rectangular' /> : ''}
                    {loading ? <Skeleton sx={{ bgcolor: '#64748B' }} animation={false} /> : ''}
                </div>

                <Divider />

                <div className='w-1/2 flex flex-col gap-2'>
                    <Typography variant="h1">{loading ? <Skeleton animation="wave" /> : 'h1'}</Typography>
                    <Typography variant="h2">{loading ? <Skeleton animation="pulse" /> : 'h2'}</Typography>
                    <Typography variant="h3">{loading ? <Skeleton animation={false} /> : 'h3'}</Typography>
                    <Typography variant="h4">{loading ? <Skeleton animation="wave" /> : 'h4'}</Typography>
                </div>

            </div>
        </div>
    )
}

export default SkeletonSample1