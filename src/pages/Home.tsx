import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MultiSoundPlayer from '../Components/MultiSoundPlayerProps ';

const Home = () => {

  const navigate = useNavigate();

  const [orientation, setOrientation] = useState<number | null>(null);

  useEffect(() => {
    setOrientation(window.orientation);
    window.addEventListener('orientationchange', () => {
      setOrientation(window.orientation);
    });
  }, [])

  return (
    <div className='py-16 px-8 flex flex-col justify-center items-center gap-16 bg-zinc-200'>
      <p
        style={{ color: 'red', backgroundColor: 'yellow', padding: '10px', borderRadius: '10px', fontWeight: 'bold', fontSize: '20px' }}>
        Welcome to Home
      </p>
      <div>
        {orientation ? (
          <p>Landscape</p>
        ) : (
          <p>Portrait</p>
        )}
      </div>

      <div>
        <h1>Multi-Sound Player</h1>
        <MultiSoundPlayer sounds={
          [
            { url: 'https://dls.music-fa.com/tagdl/1402/Reza%20Bahram%20-%20Mane%20Divane%20(320).mp3', volume: 1, isPlaying: false },
            { url: 'https://dls.music-fa.com/tagdl/ati/Behnam%20Bani%20-%20Zakhm%20Kari%20(128).mp3', volume: 1, isPlaying: false },
            { url: 'https://dls.music-fa.com/tagdl/downloads/Behnam%20Bani%20-%20Ghorse%20Ghamar%20(128).mp3', volume: 1, isPlaying: false },
          ]
        } />
      </div>

      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with useNavigate</p>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/customHook')}>CustomHook</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/profile')}>Profile</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/form')}>Form</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/redux')}>ReduxSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/zustand')}>ZustandSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/useMemo')}>useMemoSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/formik')}>Formik</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/localeLanguage')}>LocaleLanguage</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/customIDB')}>CustomIDB</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/neshan')}>Neshan</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/mapbox')}>MapBox</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/locationSample')}>LocationSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/libraries')}>Libraries</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/particles')}>Particles</button>

      <span className='w-[90%] h-[1px] bg-zinc-800' />

      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with Link</p>
      <nav>
        <Link to='/customHook'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>CustomHook</h1></Link>
        <Link to='/profile'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Profile</h1></Link>
        <Link to='/form'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Form</h1></Link>
        <Link to='/redux'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>ReduxSample</h1></Link>
        <Link to='/zustand'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>ZustandSample</h1></Link>
        <Link to='/useMemo'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>useMemoSample</h1></Link>
        <Link to='/formik'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Formik</h1></Link>
        <Link to='/localeLanguage'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>LocaleLanguage</h1></Link>
        <Link to='/customIDB'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>CustomIDB</h1></Link>
        <Link to='/neshan'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Neshan</h1></Link>
        <Link to='/mapbox'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>MapBox</h1></Link>
        <Link to='/locationSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>LocationSample</h1></Link>
        <Link to='/libraries'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Libraries</h1></Link>
        <Link to='/particles'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Particles</h1></Link>
      </nav>
    </div>
  )
}

export default Home