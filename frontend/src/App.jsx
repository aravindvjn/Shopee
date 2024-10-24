import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MobileFooter from "./Components/MobileFooter/MobileFooter";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Category from "./Pages/Category/Category";
import "aos/dist/aos.css";
import AOS from "aos";
import Auth from "./Pages/Auth/Auth";
import Account from "./Pages/Account/Account";
import UserProvider, { UserContext } from "./Global/UserContext";
import Cart from "./Pages/Cart/Cart";
import { useContext } from "react";
import PleaseLogin from "./Components/Warnings/PleaseLogin";
import Notification from "./Components/Notification/Notification";
import Address from "./Pages/Address/Address";
import EditAccount from "./Pages/EditAccount/EditAccount";
import AddAddress from "./Pages/Address/AddAddress/AddAddress";
import EditAddress from "./Pages/Address/AddAddress/EditAddress";
AOS.init();
function App() {
  const location = useLocation();
  const { user, notification, setNotification } = useContext(UserContext);
  const noFooterPaths = ["login", "register"];
  return (
    <>
      {notification && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/account" element={user ? <Account /> : <PleaseLogin />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/cart" element={user ? <Cart /> : <PleaseLogin />} />
        <Route path="/address" element={user ? <Address /> : <PleaseLogin />} />
        <Route
          path="/edit-profile"
          element={user ? <EditAccount /> : <PleaseLogin />}
        />
        <Route
          path="/add-address"
          element={user ? <AddAddress /> : <PleaseLogin />}
        />
        <Route
          path="/edit-address/:address_id"
          element={user ? <EditAddress /> : <PleaseLogin />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname.replace(/\//g, "")) && (
        <MobileFooter />
      )}
    </>
  );
}

const MainApp = () => (
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);

export default MainApp;
