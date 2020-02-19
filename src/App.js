import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import aadharUpload from './components/aadharUpload'
import capturedoc from './components/captureDoc'
import uploadscreen from './components/uploadScreen'
import consent from './components/consent'
import result_screen from './components/result_screen'
import pan_card from './components/pan_card'
import proceed_camara from './components/proceed_camara'
import sigin from './components/sigin'
import starting from './components/starting'
import waiting from './components/waiting'
import selfie_capture from './components/selfie_capture'
import dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aadharupload' component={aadharUpload}/>
        <Route exact path='/capturedoc' component={capturedoc}/>
        <Route exact path='/uploadscreen' component={uploadscreen}/>
        <Route exact path='/consent' component={consent}/>
        <Route exact path='/result_screen' component={result_screen}/>
        <Route exact path='/pan_card' component={pan_card}/>
        <Route exact path='/proceed_camara' component={proceed_camara}/>
        <Route exact path='/sigin' component={sigin}/>
        <Route exact path='/starting' component={starting}/>
        <Route exact path='/waiting' component={waiting}/>
        <Route exact path='/selfie_capture' component={selfie_capture}/>
        <Route exact path='/dashboard' component={dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
