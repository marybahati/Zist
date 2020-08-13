import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import {Shopping} from './components/ShoppingPage/Shopping'
import history from './History';
import { Cards } from './components/ShoppingPage/Cards';
import  VendorRegistration  from './components/Vendor/VendorRegistration';
import  { VendorDashboard }  from './components/Vendor/VendorDashboard';
import { Analytics } from './components/Vendor/Analytics';
import { Storefront } from './components/Vendor/Storefront';
import { Inventory } from './components/Vendor/Inventory';
import { ServiceDesk } from './components/Vendor/ServiceDesk';
import { Settings } from './components/Vendor/Settings';
import { Announcements } from './components/Vendor/Announcements';
import { Transcations } from './components/Vendor/Transcations'

function App() {
  return (
    <Router history={history} >
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/shopping' component={Shopping} />
      <Route exact path='/bs' component={Cards} />
      <Route exact path='/vendor' component={VendorRegistration} />
      <Route exact path='/vendor-dashboard' component={VendorDashboard} />
      <Route exact path='/vendor-analytics' component={Analytics} />
      <Route exact path='/vendor-store-front' component={Storefront} />
      <Route exact path='/vendor-inventory' component={Inventory} />
      <Route exact path='/vendor-service-desk' component={ServiceDesk} />
      <Route exact path='/vendor-settings' component={Settings} />  
      <Route exact path='/vendor-announcements' component={Announcements} />
      <Route exact path='/vendor-transcations' component={Transcations} />
    </Router>
  );
}

export default App;
