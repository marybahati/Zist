import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import {Shopping} from './components/ShoppingPage/Shopping'
import history from './History';
import { Cards } from './components/ShoppingPage/Cards';
import { VendorRegistration } from './components/Vendor/VendorRegistration';

function App() {
  return (
    <Router history={history} >
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/shopping' component={Shopping} />
      <Route exact path='/bs' component={Cards} />
      <Route exact path='/vendor' component={VendorRegistration} />
    </Router>
  );
}

export default App;
