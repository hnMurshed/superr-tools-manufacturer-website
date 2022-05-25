import logo from './logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import auth from './firebase.config';

function App() {
  const [user] = useAuthState(auth);
  console.log(auth);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-red-500'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button class="inline-block cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold uppercase text-secondary transition duration-200 ease-in-out hover:bg-blue-900">Daisy apa connected</button>

      </header>
    </div>
  );
}

export default App;
