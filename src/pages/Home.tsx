import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-8 gap-16 bg-zinc-200'>
      <button className='btnSuccess' onClick={() => navigate('/customHook')}>CustomHook</button>
      <button className='btnSuccess' onClick={() => navigate('/profile')}>Profile</button>
      <button className='btnSuccess' onClick={() => navigate('/form')}>Form</button>
    </div>
  )
}

export default Home