import './App.css';
import { Profile, countries } from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        name={'arash'}
        family={'altafi'}
        age={26}
        language={['javascript', 'html', 'css', 'typescript', 'react', 'nodejs']}
        isSingle={true}
        country={countries.iran} />
    </div>
  );
}

export default App;
