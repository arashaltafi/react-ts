import { Profile, countries } from './pages/Profile';
import Home from './pages/Home';
import { useEffect, useId } from 'react';
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

function App() {

  const { t, i18n } = useTranslation();
  const location = useLocation()

  const useId1 = useId();
  const useId2 = useId();
  const useId3 = useId();
  console.log("idUnique 1", useId1)
  console.log("idUnique 2", useId2)
  console.log("idUnique 3", useId3)

  useEffect(() => {
    console.log(location);
    console.log('i18n', i18n.languages);
  }, [location])

  return (
    <div className="h-screen w-full">
      <Provider store={store}>
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route element={<Hoc />}>
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
              <Route path='/libraries'>
                <Route path='' element={<Libraries />} />
                <Route path='styledComponents' element={<StyledComponents />} />
                <Route path='reactIcons' element={<ReactIcons />} />
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
                <Route path='reactWindow' element={<ReactWindow />} />
                <Route path='cryptoSample' element={<CryptoSample />} />
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
              </Route>
              <Route path='/useParams/:name?/:family?' element={<UseParams />} />
              <Route path='*' element={<div className='title flex justify-center items-center w-full h-full'> Not Found 404 </div>} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;