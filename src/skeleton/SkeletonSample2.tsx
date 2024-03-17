import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Divider from '../Components/Divider'
import { Typography } from '@material-ui/core'

const SkeletonSample2 = () => {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <div className="w-full py-8 flex flex-col gap-16">
            <h1 className='title'>SkeletonSample2</h1>
            <button
                className={`${loading ? 'btnSuccess' : 'btnError'} w-1/3 mx-auto`}
                onClick={() => setLoading(!loading)}
            >
                {loading ? 'Hide Skeleton' : 'Show Skeleton'}
            </button>
            <div className='w-full flex items-center justify-center flex-col gap-6 mt-16'>
                <div className='w-1/2 flex flex-col gap-2'>
                    {/* For variant="text", adjust the height via font-size */}
                    <p className='subtitle'>{loading ? <Skeleton /> : 'Skeleton Title'}</p>

                    {/* For other variants, adjust the size with `width` and `height` */}
                    {
                        loading
                            ?
                            <Skeleton circle={true} width={200} height={200} />
                            : <img src='https://arashaltafi.ir/arash_circle.png' width={200} height={200} />
                    }

                    <h2>{loading ? <Skeleton count={5} width={210} height={50} /> : 'Title'}</h2>
                    <h4>{loading ? <Skeleton count={5} width={210} height={30} /> : 'sub title'}</h4>
                </div>

                <Divider />

                <div className='w-1/2 flex flex-col gap-2'>
                    <Typography variant="h1">{loading ? <Skeleton height={100} /> : 'h1'}</Typography>
                    <Typography variant="h2">{loading ? <Skeleton height={80} /> : 'h2'}</Typography>
                    <Typography variant="h3">{loading ? <Skeleton height={60} /> : 'h3'}</Typography>
                    <Typography variant="h4">{loading ? <Skeleton height={40} /> : 'h4'}</Typography>
                </div>

            </div>
        </div>
    )
}

export default SkeletonSample2