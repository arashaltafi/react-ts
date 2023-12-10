import { useState } from 'react'
import userSlice from '../redux/userSlice'
import numberSlice from '../redux/numberSlice'
import { useDispatch, useSelector } from 'react-redux'
import GoBack from '../Components/GoBack';

const ReduxSample = () => {
    const dispatch = useDispatch();
    const userSelector = useSelector((state: any) => state.user);
    const numberSelector = useSelector((state: any) => state.number);

    const [newUsername, setNewUsername] = useState('');

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-16'>
                <div className='title'>ReduxSample</div>
                <input className='p-4 m-2 text-lg bg-gray-300 rounded-lg text-center' onChange={(e) => setNewUsername(e.target.value)} type="text" />
                <div className='flex flex-row items-center justify-center gap-8'>
                    <button className='rounded-lg shadow-lg m-2 p-4 bg-sky-500 text-white text-xl' onClick={() => dispatch(userSlice.actions.login({ username: newUsername }))}>login</button>
                    <button className='rounded-lg shadow-lg m-2 p-4 bg-purple-500 text-white text-xl' onClick={() => dispatch(userSlice.actions.logout())}>logout</button>
                </div>
                <p className='subtitle'>{userSelector.username}</p>
                <div className='mt-8 flex flex-row items-center justify-center gap-8'>
                    <button className='btnSuccess' onClick={() => dispatch(userSlice.actions.increment())}>Increment</button>
                    <button className='btnError' onClick={() => dispatch(userSlice.actions.decrement())}>Decrement</button>
                </div>
                <p className='subtitle'>{userSelector.age}</p>

                <br /><hr /><br />
                <button className='btnSuccess bg-green-500' onClick={() => dispatch(numberSlice.actions.addNumbers([7, 8, 9]))}>Add Numbers</button>
                <p className='subtitle'>{numberSelector.numbers}</p>

                <GoBack class="btnError mt-16 flex mx-auto" />
            </div>
        </>
    )
}

export default ReduxSample