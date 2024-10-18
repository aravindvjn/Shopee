import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MobileFooter from "./Components/MobileFooter/MobileFooter";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
      <MobileFooter />
    </BrowserRouter>
  );
}

export default App;
