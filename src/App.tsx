import { Profile, countries } from './pages/Profile';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import CustomHook from './pages/CustomHook';
import Form from './pages/Form';
import UseParams from './pages/UseParams';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <div className="h-screen w-full">
      <Provider store={store}>
        <Router>
          <Routes>
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
            <Route path='/useParams/:name?/:family?' element={<UseParams />} />
            <Route path='*' element={<div className='title flex justify-center items-center w-full h-full'> Not Found 404 </div>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
