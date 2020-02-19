import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import aadharUpload from './components/aadharUpload'
import capturedoc from './components/captureDoc'
import uploadscreen from './components/uploadScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aadharupload' component={aadharUpload}/>
        <Route exact path='/capturedoc' component={capturedoc}/>
        <Route exact path='/uploadscreen' component={uploadscreen}/>
      </Switch>
    </Router>
  );
}

export default App;
