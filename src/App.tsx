import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
