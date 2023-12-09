import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='py-16 px-8 flex flex-col justify-center items-center gap-16 bg-zinc-200'>
      <p
        style={{ color: 'red', backgroundColor: 'yellow', padding: '10px', borderRadius: '10px', fontWeight: 'bold', fontSize: '20px' }}>
        Welcome to Home
      </p>
      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with useNavigate</p>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/customHook')}>CustomHook</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/profile')}>Profile</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/form')}>Form</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/redux')}>ReduxSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/useMemo')}>useMemoSample</button>

      <span className='w-[90%] h-[1px] bg-zinc-800' />

      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with Link</p>
      <nav>
        <Link to='/customHook'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>CustomHook</h1></Link>
        <Link to='/profile'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Profile</h1></Link>
        <Link to='/form'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Form</h1></Link>
        <Link to='/redux'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>ReduxSample</h1></Link>
        <Link to='/useMemo'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>useMemoSample</h1></Link>
      </nav>
    </div>
  )
}

export default Home