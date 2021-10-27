import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import UpdateUserProfile from './components/LandingPage/UpdateUserProfile';
import Aisles from './components/ShoppingPage/Aisles';
import SearchBar from './components/ShoppingPage/SearchBar';
import Shopping from './components/ShoppingPage/Shopping';
import UserList from './components/ShoppingPage/UserList';
import { Analytics } from './components/Vendor/Analytics';
import { Announcements } from './components/Vendor/Announcements';
import CreateList from './components/Vendor/CreateList';
import InventoryAddCategory from './components/Vendor/InventoryAddCategory';
import CreateProduct from './components/Vendor/InventoryAddProduct';
import InventoryEditProduct from './components/Vendor/InventoryEditProduct';
import OrderDetails from './components/ShoppingPage/OrderDetails';
import PaymentDetails from './components/Vendor/PaymentDetails';
import { ServiceDesk } from './components/Vendor/ServiceDesk';
import { Settings } from './components/Vendor/Settings';
import Storefront from './components/Vendor/Storefront';
import Suppliers from './components/Vendor/Suppliers';
import { Transcations } from './components/Vendor/Transcations';
import VendorDashboard from './components/Vendor/Vendor-Dashboard';
import VendorIntro from './components/Vendor/Vendor-Intro';
import VendorProducts from './components/Vendor/VendorProducts';
import VendorRegistration from './components/Vendor/VendorRegistration';
import history from './History';
import SelectedAisle from './components/ShoppingPage/SelectedAisle';
import OrdersDashboard from './components/ShoppingOrders/OrdersDashboard';


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
      <Route exact path='/vendor-service-desk' component={ServiceDesk} />
      <Route exact path='/vendor-settings' component={Settings} />  
      <Route exact path='/vendor-announcements' component={Announcements} />
      <Route exact path='/vendor-transcations' component={Transcations} />
      <Route exact path='/user-list' component={UserList} />
      <Route exact path='/create-list' component={CreateList} />
      <Route exact path='/order-details' component={OrderDetails} />
      <Route exact path='/payment-details' component={PaymentDetails} />
      <Route exact path='/update-profile' component={UpdateUserProfile} />
      <Route exact path='/suppliers' component={Suppliers}/>
      <Route exact path='/inventory-create-product' component={CreateProduct}/>
      <Route exact path='/inventory-add-category' component={InventoryAddCategory}/>
      <Route exact path='/vendor-products' component={VendorProducts}/>
      <Route exact path='/vendor-product/edit' component={InventoryEditProduct}/>
      <Route exact path='/shopping/categories' component={Aisles}/>
      <Route exact path='/shopping/single/category' component={SelectedAisle} />
      <Route exact path='/shopping/orders' component={OrdersDashboard} />
    </Router>
    </SnackbarProvider>
  );
}

export default App;
