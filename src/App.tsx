import { Profile, countries } from './pages/Profile';
import Home from './pages/Home';
import { useEffect } from 'react';
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

function App() {

  const { t, i18n } = useTranslation();
  const location = useLocation()

  useEffect(() => {
    console.log(location);
    console.log('i18n', i18n.languages);
  }, [location])

  return (
    <div className="h-screen w-full">
      <Provider store={store}>
        <Routes>
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
            </Route>
            <Route path='/useParams/:name?/:family?' element={<UseParams />} />
            <Route path='*' element={<div className='title flex justify-center items-center w-full h-full'> Not Found 404 </div>} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;