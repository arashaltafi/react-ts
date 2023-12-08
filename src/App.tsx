import { Profile, countries } from './pages/Profile';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import CustomHook from './pages/CustomHook';
import Form from './pages/Form';

function App() {
  return (
    <div className="h-screen w-full">
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
          <Route path='*' element={<div className='title flex justify-center items-center w-full h-full'> Not Found 404 </div>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
