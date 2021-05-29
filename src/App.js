import './App.css';
import 'antd/dist/antd.css';
import Kalendar from './components/calendar';
import React from 'react'
import Training from './components/training';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <h1><img src="favicon.png"></img>Kalendar treninga</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Training />
          </Route>
          <Route path="/calendar">
            <Kalendar />
          </Route>

        </Switch>
      </Router>
      <footer>
        <p>Tomislav Katalenić • 2021</p>
      </footer>
    </div>
  );
}

export default App;
