import { Profile, countries } from './pages/Profile';
import Home from './pages/Home';
import { Suspense, useEffect, useId } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CustomHook from './pages/CustomHook';
import Form from './pages/Form';
import UseParams from './pages/UseParams';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReduxSample from './pages/ReduxSample';
import UseMemoSample from './pages/UseMemoSample';
import Formik from './pages/Formik';
import LocaleLanguage from './pages/LocaleLanguage';
import CustomIDB from './pages/CustomIDB';
import ZustandSample from './pages/ZustandSample';
import Neshan from './pages/Neshan';
import Hoc from './Components/Hoc';
import MapBox from './pages/MapBox';
import LocationSample from './pages/LocationSample';
import StyledComponents from './Components/StyledComponents';
import Libraries from './pages/Libraries';
import ReactIcons from './Components/ReactIcons';
import Bootstrap from './Components/Bootstrap';
import ChakraUI from './Components/ChakraUI';
import MaterialUI from './Components/MaterialUI';
import FramerMotion from './Components/FramerMotion';
import CustomHooks from './Components/CustomHooks';
import ReactPdf from './Components/ReactPdf';
import Axios from './Components/Axios';
import ReCaptcha from './Components/ReCaptchaSample';
import I8NextSample from './Components/I8NextSample';
import './localiztion/i18nextSetting';
import { useTranslation } from 'react-i18next';
import RechartsSample from './Components/RechartsSample';
import SwalSample from './Components/SwalSample';
import Swal2Sample from './Components/Swal2Sample';
import ReactSpinners from './Components/ReactSpinners';
import CustomHover from './Components/CustomHover';
import ScrollToTop from './utils/ScrollToTop';
import AwesomeReveal from './Components/AwesomeReveal';
import ParticlesPages from './pages/ParticlesPages';
import ParticlesBubbles from './particlesPages/ParticlesBubbles';
import ParticlesLinks from './particlesPages/ParticlesLinks';
import ParticlesSnow from './particlesPages/ParticlesSnow';
import ParticlesConfetti from './particlesPages/ParticlesConfetti';
import ParticlesFire from './particlesPages/ParticlesFire';
import ParticlesFirefly from './particlesPages/ParticlesFirefly';
import ParticlesFireworks from './particlesPages/ParticlesFireworks';
import ParticlesFountain from './particlesPages/ParticlesFountain';
import ParticlesHyperspace from './particlesPages/ParticlesHyperspace';
import ParticlesTriangles from './particlesPages/ParticlesTriangles';
import ParticlesStars from './particlesPages/ParticlesTriangles copy';
import NotistackSample from './Components/NotistackSample';
import LottieSample from './Components/LottieSample';
import ReactourSample from './Components/ReactourSample';
import VibrateSample from './Components/VibrateSample';
import SpringBottomSheet from './Components/SpringBottomSheet';
import ReactVirtualized from './Components/ReactVirtualized';
import ReactWindow from './Components/ReactWindow';
import CryptoSample from './Components/CryptoSample';
import Animation from './Components/Animation';
import DownloadSample1 from './Components/DownloadSample1';
import DownloadSample2 from './Components/DownloadSample2';
import DownloadSample3 from './Components/DownloadSample3';
import AudioPlayer from './pages/AudioPlayer';
import SpeedMeter from './Components/SpeedMeter';
import Index from './backgroundAnimation/Index';
import Sample1 from './backgroundAnimation/Sample1';
import BestReference from './Components/BestReference';
import ReactIconSax from './Components/ReactIconSax';
import ScrollableFeedSample from './Components/ScrollableFeedSample';
import CircularProgressbarSample from './Components/CircularProgressbarSample';
import FirebaseSample from './firebase/FirebaseSample';
import AnimationSamples from './AnimationSamples/AnimationSamples';
import AnimationSamples1 from './AnimationSamples/AnimationSamples1';
import AnimationSamples2 from './AnimationSamples/AnimationSamples2';
import AnimationSamples3 from './AnimationSamples/AnimationSamples3';
import AnimationSamples4 from './AnimationSamples/AnimationSamples4';
import AnimationSamples5 from './AnimationSamples/AnimationSamples5';
import AnimationSamples6 from './AnimationSamples/AnimationSamples6';
import AnimationSamples7 from './AnimationSamples/AnimationSamples7';
import ParticlesMouse1 from './particlesPages/ParticlesMouse1';
import ParticlesMouse2 from './particlesPages/ParticlesMouse2';
import ParticlesMouse3 from './particlesPages/ParticlesMouse3';
import VideoPlayer from './pages/VideoPlayer';
import HorizontalList from './pages/HorizontalList';
import ToolbarCollapse from './pages/ToolbarCollapse';
import SideBar1 from './pages/SideBar1';
import SideBar2 from './pages/SideBar2';
import SwipeableListSample from './Components/SwipeableListSample';
import MenuSample from './Components/MenuSample';
import TripleToggleSwitch from './Components/TripleToggleSwitch';
import Night from "./Night.svg";
import Sun from "./Sun.svg";
import Auto from "./Auto.svg";
import FilePickerSample from './Components/FilePickerSample';
import SnackbarSample from './Components/SnackbarSample';
import SnackBarInAllApp from './Components/SnackBarInAllApp';
import PagingApiSample from './pages/PagingApiSample';
import SwipeRefresh1 from './Components/SwipeRefresh1';
import SwipeRefresh2 from './Components/SwipeRefresh2';
import OtpInputSample from './Components/OtpInputSample';
import { customLog } from './utils/CustomConsole';
import PeerJsSample from './pages/PeerJsSample';
import SpringSample1 from './pages/SpringSample1';
import SpringSample2 from './pages/SpringSample2';

function App() {

  const { t, i18n } = useTranslation();
  const location = useLocation()

  const useId1 = useId();
  const useId2 = useId();
  const useId3 = useId();
  customLog("idUnique 1", useId1)
  customLog("idUnique 2", useId2)
  customLog("idUnique 3", useId3)

  useEffect(() => {
    customLog(location);
    customLog('i18n', i18n.languages);
  }, [location])

  //TripleToggleSwitch
  const labels = {
    left: {
      icon: Night,
      value: "left",
    },
    right: {
      icon: Sun,
      value: "right",
    },
    center: {
      icon: Auto,
      value: "center",
    },
  };

  const handleChangeTripleSwitch = (value: any) => {
    switch (value) {
      case "left": //dark
        customLog('dark')
        break;
      case "center": //auto
        customLog('auto')
        break;
      case "right": //light
        customLog('light')
        break;
      default:
        break;
    }
  }

  return (
    <div className="h-screen w-full">
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <>
            <SnackBarInAllApp />
            <Routes>
              <Route element={<ScrollToTop />}>
                <Route element={<Hoc />}>
                  <Route path='/bestReference' element={
                    <BestReference />
                  } />
                  <Route path='/test'>
                    <Route path='test2' element={
                      <div>Test 2</div>
                    } />
                  </Route>
                  <Route path='/' element={
                    <Home />
                  } />
                  <Route path='/customHook' element={
                    <CustomHook />
                  } />
                  <Route path='/profile' element={
                    <Profile
                      name={'arash'}
                      family={'altafi'}
                      age={26}
                      language={['javascript', 'html', 'css', 'typescript', 'react', 'nodejs']}
                      isSingle={true}
                      country={countries.iran} />
                  } />
                  <Route path='/form' element={
                    <Form />
                  } />
                  <Route path='/redux' element={<ReduxSample />} />
                  <Route path='/zustand' element={<ZustandSample />} />
                  <Route path='/useMemo' element={<UseMemoSample />} />
                  <Route path='/formik' element={<Formik />} />
                  <Route path='/localeLanguage' element={<LocaleLanguage />} />
                  <Route path='/customIDB' element={<CustomIDB />} />
                  <Route path='/neshan' element={<Neshan />} />
                  <Route path='/mapbox' element={<MapBox />} />
                  <Route path='/locationSample' element={<LocationSample />} />
                  <Route path='/firebaseSample' element={<FirebaseSample />} />
                  <Route path='/videoPlayer' element={<VideoPlayer />} />
                  <Route path='/audioPlayer' element={<AudioPlayer sounds={
                    [
                      { url: 'https://dls.music-fa.com/tagdl/1402/Reza%20Bahram%20-%20Mane%20Divane%20(320).mp3', volume: 1, isPlaying: false },
                      { url: 'https://dls.music-fa.com/tagdl/ati/Behnam%20Bani%20-%20Zakhm%20Kari%20(128).mp3', volume: 1, isPlaying: false },
                      { url: 'https://dls.music-fa.com/tagdl/downloads/Behnam%20Bani%20-%20Ghorse%20Ghamar%20(128).mp3', volume: 1, isPlaying: false },
                    ]
                  } />} />
                  <Route path='/libraries'>
                    <Route path='' element={<Libraries />} />
                    <Route path='styledComponents' element={<StyledComponents />} />
                    <Route path='reactIcons' element={<ReactIcons />} />
                    <Route path='reactIconSax' element={<ReactIconSax />} />
                    <Route path='bootstrap' element={<Bootstrap />} />
                    <Route path='chakraUI' element={<ChakraUI />} />
                    <Route path='materialUI' element={<MaterialUI />} />
                    <Route path='framerMotion' element={<FramerMotion />} />
                    <Route path='customHooks' element={<CustomHooks />} />
                    <Route path='reactPdf' element={<ReactPdf />} />
                    <Route path='axios' element={<Axios />} />
                    <Route path='reCaptcha' element={<ReCaptcha />} />
                    <Route path='i8Next' element={<I8NextSample />} />
                    <Route path='recharts' element={<RechartsSample />} />
                    <Route path='swal' element={<SwalSample />} />
                    <Route path='swal2' element={<Swal2Sample />} />
                    <Route path='reactSpinners' element={<ReactSpinners />} />
                    <Route path='customHover' element={<CustomHover />} />
                    <Route path='awesomeReveal' element={<AwesomeReveal />} />
                    <Route path='notistackSample' element={<NotistackSample />} />
                    <Route path='lottieSample' element={<LottieSample />} />
                    <Route path='reactourSample' element={<ReactourSample />} />
                    <Route path='vibrateSample' element={<VibrateSample />} />
                    <Route path='springBottomSheet' element={<SpringBottomSheet />} />
                    <Route path='reactVirtualized' element={<ReactVirtualized />} />
                    <Route path='scrollableFeedSample' element={<ScrollableFeedSample />} />
                    <Route path='reactWindow' element={<ReactWindow />} />
                    <Route path='cryptoSample' element={<CryptoSample />} />
                    <Route path='animation' element={<Animation />} />
                    <Route path='download1' element={<DownloadSample1 />} />
                    <Route path='download2' element={<DownloadSample2 />} />
                    <Route path='download3' element={<DownloadSample3 />} />
                    <Route path='speedMeter' element={<SpeedMeter />} />
                    <Route path='circularProgressbarSample' element={<CircularProgressbarSample percentage={60} />} />
                    <Route path='swipeableList' element={<SwipeableListSample />} />
                    <Route path='menuSample' element={<MenuSample />} />
                    <Route path='tripleToggleSwitch' element={<TripleToggleSwitch
                      labels={labels}
                      onChange={handleChangeTripleSwitch}
                    />} />
                    <Route path='filePickerSample' element={<FilePickerSample />} />
                    <Route path='snackbarSample' element={<SnackbarSample />} />
                    <Route path='otpInputSample' element={<OtpInputSample />} />
                  </Route>
                  <Route path='/animationSamples'>
                    <Route path='' element={<AnimationSamples />} />
                    <Route path='sample1' element={<AnimationSamples1 />} />
                    <Route path='sample2' element={<AnimationSamples2 />} />
                    <Route path='sample3' element={<AnimationSamples3 />} />
                    <Route path='sample4' element={<AnimationSamples4 />} />
                    <Route path='sample5' element={<AnimationSamples5 />} />
                    <Route path='sample6' element={<AnimationSamples6 />} />
                    <Route path='sample7' element={<AnimationSamples7 />} />
                  </Route>
                  <Route path='/particles'>
                    <Route path='' element={<ParticlesPages />} />
                    <Route path='snow' element={<ParticlesSnow />} />
                    <Route path='bubbles' element={<ParticlesBubbles />} />
                    <Route path='confetti' element={<ParticlesConfetti />} />
                    <Route path='fire' element={<ParticlesFire />} />
                    <Route path='firefly' element={<ParticlesFirefly />} />
                    <Route path='fireworks' element={<ParticlesFireworks />} />
                    <Route path='fountain' element={<ParticlesFountain />} />
                    <Route path='hyperspace' element={<ParticlesHyperspace />} />
                    <Route path='triangles' element={<ParticlesTriangles />} />
                    <Route path='links' element={<ParticlesLinks />} />
                    <Route path='stars' element={<ParticlesStars />} />
                    <Route path='mouse1' element={<ParticlesMouse1 />} />
                    <Route path='mouse2' element={<ParticlesMouse2 />} />
                    <Route path='mouse3' element={<ParticlesMouse3 />} />
                  </Route>
                  <Route path='/backgroundAnimation'>
                    <Route path='' element={<Index />} />
                    <Route path='sample1' element={<Sample1 />} />
                  </Route>
                  <Route path='/useParams/:name?/:family?' element={<UseParams />} />
                  <Route path='horizontalList' element={<HorizontalList />} />
                  <Route path='toolbarCollapse' element={<ToolbarCollapse />} />
                  <Route path='sideBar1' element={<SideBar1 />} />
                  <Route path='sideBar2' element={<SideBar2 />} />
                  <Route path='pagingApiSample' element={<PagingApiSample />} />
                  <Route path='swipeRefresh1' element={<SwipeRefresh1 />} />
                  <Route path='swipeRefresh2' element={<SwipeRefresh2 />} />
                  <Route path='peerJsSample' element={<PeerJsSample />} />
                  <Route path='springSample1' element={<SpringSample1 />} />
                  <Route path='springSample2' element={<SpringSample2 />} />
                  <Route path='*' element={<div className='title flex justify-center items-center w-full h-full'> Not Found 404 </div>} />                
                </Route>
              </Route>
            </Routes>
          </>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;