import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Kalendar from './components/calendar';
import React from 'react'


function App() {
  return (
    <div className="App">
      <header>
        <h1><img src="favicon.png"></img>Kalendar treninga</h1>
      </header>
      <Kalendar className='calendar-screen' />
      <footer>
        <p>Tomislav Katalenić • 2021</p>
      </footer>
    </div>
  );
}

export default App;
