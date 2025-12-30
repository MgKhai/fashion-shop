import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/404";
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Router>
          <Header />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
