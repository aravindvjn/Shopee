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
AOS.init();
function App() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const noFooterPaths = ["login", "register"];
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/account" element={user ? <Account /> : <PleaseLogin />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/cart" element={user ? <Cart /> : <PleaseLogin />} />
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
