import { useState } from 'react'
import { login, logout } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import GoBack from '../Components/GoBack';

const ReduxSample = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.user);

    const [newUsername, setNewUsername] = useState('');

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-16'>
                <div className='title'>ReduxSample</div>
                <input className='p-4 m-2 text-lg bg-gray-300 rounded-lg text-center' onChange={(e) => setNewUsername(e.target.value)} type="text" />
                <div className='flex flex-row items-center justify-center gap-8'>
                    <button className='rounded-lg shadow-lg m-2 p-4 bg-sky-500 text-white text-xl' onClick={() => dispatch(login({ username: newUsername }))}>login</button>
                    <button className='rounded-lg shadow-lg m-2 p-4 bg-purple-500 text-white text-xl' onClick={() => dispatch(logout())}>logout</button>
                </div>
                <p className='subtitle'>{selector.username}</p>
                <GoBack class="btnError mt-16 flex mx-auto" />
            </div>
        </>
    )
}

export default ReduxSample