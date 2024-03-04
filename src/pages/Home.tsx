import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import snackBarSlice from '../redux/snackBarSlice';
import NetworkListener from '../Components/NetworkListener';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [orientation, setOrientation] = useState<number | null>(null);

  useEffect(() => {
    setOrientation(window.orientation);
    window.addEventListener('orientationchange', () => {
      setOrientation(window.orientation);
    });
  }, [])

  const showSnackBar = () => {
    dispatch(snackBarSlice.actions.setSnackBar({
      isOpen: true,
      message: 'this is test message to show snackbar with mui',
      duration: 3000,
    }))
  }

  return (
    <div className='py-16 px-8 flex flex-col justify-center items-center gap-16 bg-zinc-200'>
      <div className='absolute left-10 top-8'>
        <NetworkListener />
      </div>
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

      <p onClick={showSnackBar} className='cursor-pointer text-lg bg-pink-500 text-white text-center p-4 rounded-lg -mb-4'>Show SnackBar</p>

      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with useNavigate</p>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/bestReference')}>BestReference</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/customHook')}>CustomHook</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/profile')}>Profile</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/form')}>Form</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/firebaseSample')}>FirebaseSample</button>
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
      <button className='text-2xl btnSuccess' onClick={() => navigate('/animationSamples')}>AnimationSamples</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/backgroundAnimation')}>BackgroundAnimation</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/audioPlayer')}>AudioPlayer</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/videoPlayer')}>VideoPlayer</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/horizontalList')}>HorizontalList</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/toolbarCollapse')}>ToolbarCollapse</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/sideBar1')}>SideBar 1</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/sideBar2')}>SideBar 2</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/pagingApiSample')}>PagingApiSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/swipeRefresh1')}>SwipeRefresh1</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/swipeRefresh2')}>SwipeRefresh2</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/peerJsSample')}>PeerJsSample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/springSample1')}>SpringSample 1</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/springSample2')}>SpringSample 2</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/lenisSample')}>Lenis Sample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/gsapSample')}>Gsap Sample</button>
      <button className='text-2xl btnSuccess' onClick={() => navigate('/swipeDetect')}>Swipe Detect</button>

      <span className='w-[90%] h-[1px] bg-zinc-800' />

      <p className='text-lg bg-zinc-800 text-white text-center p-4 rounded-lg -mb-4'>Navigate with Link</p>
      <nav>
        <Link to='/bestReference'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>BestReference</h1></Link>
        <Link to='/customHook'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>CustomHook</h1></Link>
        <Link to='/profile'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Profile</h1></Link>
        <Link to='/form'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Form</h1></Link>
        <Link to='/firebaseSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>FirebaseSample</h1></Link>
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
        <Link to='/animationSamples'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>AnimationSamples</h1></Link>
        <Link to='/backgroundAnimation'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>BackgroundAnimation</h1></Link>
        <Link to='/audioPlayer'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>AudioPlayer</h1></Link>
        <Link to='/videoPlayer'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>VideoPlayer</h1></Link>
        <Link to='/horizontalList'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>HorizontalList</h1></Link>
        <Link to='/toolbarCollapse'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>ToolbarCollapse</h1></Link>
        <Link to='/sideBar1'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SideBar 1</h1></Link>
        <Link to='/sideBar2'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SideBar 2</h1></Link>
        <Link to='/pagingApiSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>PagingApiSample</h1></Link>
        <Link to='/swipeRefresh1'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SwipeRefresh1</h1></Link>
        <Link to='/swipeRefresh2'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SwipeRefresh2</h1></Link>
        <Link to='/peerJsSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>PeerJsSample</h1></Link>
        <Link to='/springSample1'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SpringSample 1</h1></Link>
        <Link to='/springSample2'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>SpringSample 2</h1></Link>
        <Link to='/lenisSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Lenis Sample</h1></Link>
        <Link to='/gsapSample'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Gsap Sample</h1></Link>
        <Link to='/swipeDetect'><h1 className={'text-white text-center rounded-md shadow-lg text-xl m-4 p-4 bg-pink-400'}>Swipe Detect</h1></Link>
      </nav>
    </div>
  )
}

export default Home