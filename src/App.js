import React from 'react';
import { Router, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import LandingPage from './components/LandingPage/LandingPage';
import Shopping from './components/ShoppingPage/Shopping'
import history from './History';
import Cards from './components/ShoppingPage/Cards';
import  VendorRegistration  from './components/Vendor/VendorRegistration';
import  VendorDashboard  from './components/Vendor/Vendor-Dashboard';
import { Analytics } from './components/Vendor/Analytics';
import  Storefront  from './components/Vendor/Storefront';
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
import Onboarding from './Zister/Onboarding';
import Progress from './Zister/Stepper';
import RiderDashboard from './Zister/RiderDashboard';
import PaymentDetails from './components/Vendor/PaymentDetails';
import VendorIntro from './components/Vendor/Vendor-Intro';
import Suppliers from './components/Vendor/Suppliers';
import WelcomePage from './Zister/WelcomePage';
import CreateProduct from './components/Vendor/InventoryAddProduct';
import InventoryAddCategory from './components/Vendor/InventoryAddCategory';
function App() {
  const notistackRef = React.createRef()
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key)
  }
  return (
    <SnackbarProvider maxSnack={3}
            // ref={notistackRef}
            color="inherit"
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            autoHideDuration={4000}
            // action={(key) => (
            //   <IconButton onClick={onClickDismiss(key)}>
            //     <CloseIcon />
            //   </IconButton>
            // )}
    >
    <Router history={history} >
      <Route exact path='/vendor-intro' component={VendorIntro}/>
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
      <Route exact path='/payment-details' component={PaymentDetails} />
      <Route exact path='/update-profile' component={UpdateUserProfile} />
      <Route exact path='/zister-vehicle-info' component={VehicleInfo} />
      <Route exact path='/zister-personal-info' component={PersonalInfo} />
      <Route exact path='/zister-onboarding' component={Onboarding} />
      <Route exact path='/zister-progress' component={Progress} />
      <Route exact path='/rider-dashboard' component={RiderDashboard} />
      <Route exact path='/suppliers' component={Suppliers}/>
      <Route exact path='/welcome' component={WelcomePage}/>
      <Route exact path='/inventory-create-product' component={CreateProduct}/>
      <Route exact path='/inventory-add-category' component={InventoryAddCategory}/>
      {/* <VendorIntroduction exact path='/vendor-introduction/' component={VendorIntroduction} /> */}
    </Router>
    </SnackbarProvider>
  );
}

export default App;
