import { Link } from 'react-router-dom'

const ParallaxPage = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-8 py-8'>
            <h1>ParallaxSample</h1>
            <Link to={'/parallax/sample1'} className='btnSuccess bg-red-500'>Sample 1</Link>
        </div>
    )
}

export default ParallaxPage