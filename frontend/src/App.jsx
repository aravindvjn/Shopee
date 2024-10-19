import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MobileFooter from "./Components/MobileFooter/MobileFooter";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <MobileFooter />
    </BrowserRouter>
  );
}

export default App;
