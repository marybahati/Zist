import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import {Shopping} from './components/ShoppingPage/Shopping'
import history from './History';
import { SignupButtonSection } from './components/LandingPage/SignupButtonSection';
import { LoginButtonSection } from './components/LandingPage/LoginButtonSection'
import { Cards } from './components/ShoppingPage/Cards';
function App() {
  return (
    <Router history={history} >
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/shopping' component={Shopping} />
      <Route exact path='/bs' component={Cards} />
    </Router>
  );
}

export default App;
