import React from 'react';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Shopping from './components/ShoppingPage/Shopping'
import history from './History';
import Cards from './components/ShoppingPage/Cards';
import  VendorRegistration  from './components/Vendor/VendorRegistration';
import  { VendorDashboard }  from './components/Vendor/VendorDashboard';
import { Analytics } from './components/Vendor/Analytics';
import { Storefront } from './components/Vendor/Storefront';
import { Inventory } from './components/Vendor/Inventory';
import { ServiceDesk } from './components/Vendor/ServiceDesk';
import { Settings } from './components/Vendor/Settings';
import { Announcements } from './components/Vendor/Announcements';
import { Transcations } from './components/Vendor/Transcations'
import EditProducts from './components/Vendor/EditProducts';
import AddProduct from './components/Vendor/AddProduct';
import SearchBar from './components/ShoppingPage/SearchBar';
import UserList from './components/Vendor/UserList';
import CreateList from './components/Vendor/CreateList';
import OrderDetails from './components/Vendor/OrderDetails';
import EditShoppingList from './components/Vendor/EditShoppingList';
import UpdateUserProfile from './components/LandingPage/UpdateUserProfile';
import PersonalInfo from './Zister/PersonalInfo';
import VehicleInfo from './Zister/VehicleInfo';

function App() {
  return (
    <Router history={history} >
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/shopping' component={Shopping} />
      <Route exact path='/search' component={SearchBar} />
      <Route exact path='/vendor' component={VendorRegistration} />
      <Route exact path='/vendor-dashboard' component={VendorDashboard} />
      <Route exact path='/vendor-analytics' component={Analytics} />
      <Route exact path='/vendor-store-front' component={Storefront} />
      <Route exact path='/vendor-inventory' component={Inventory} />
      <Route exact path='/vendor-service-desk' component={ServiceDesk} />
      <Route exact path='/vendor-settings' component={Settings} />  
      <Route exact path='/vendor-announcements' component={Announcements} />
      <Route exact path='/vendor-transcations' component={Transcations} />
      <Route exact path='/vendor-products-edit' component={EditProducts} />
      <Route exact path='/vendor-add-product' component={AddProduct} />
      <Route exact path='/user-list' component={UserList} />
      <Route exact path='/create-list' component={CreateList} />
      <Route exact path='/order-details' component={OrderDetails} />
      <Route exact path='/edit-shopping-list' component={EditShoppingList} />
      <Route exact path='/update-profile' component={UpdateUserProfile} />
      <Route exact path='/zister-vehicle-info' component={VehicleInfo} />
      <Route exact path='/zister-personal-info' component={PersonalInfo} />
    </Router>
  );
}

export default App;
