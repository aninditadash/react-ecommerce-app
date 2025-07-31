import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import {
  GreetingComponent,
  GreetingPureComponent,
  GreetingPureComponentFunction,
} from './components/Greeting/Greeting';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Gallery />
      <h3>Validating the behaviour of Pure Components in React</h3>
      <label>
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <GreetingComponent name={name} />
      <GreetingPureComponent name={name} />
      <GreetingPureComponentFunction name={name} />
    </>
  );
}

export default App;
