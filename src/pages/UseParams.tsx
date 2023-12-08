import { useParams } from 'react-router-dom'
import GoBack from '../Components/GoBack'

const UseParams = () => {

    const { name, family } = useParams()

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-32'>
                <div className='title'>UseParams</div>
                <div className='subtitle'>{name && family ? 'Profile name = ' + name + ' Profile family = ' + family : 'No name'}</div>

                <GoBack class="btnError mt-16 flex mx-auto" />
            </div>
        </>
    )
}

export default UseParams