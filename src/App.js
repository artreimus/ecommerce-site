import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import SingleProduct from "./pages/SingleProduct";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="shop">
              <Route index element={<Shop />}></Route>
              <Route path="men" element={<Men />}></Route>
              <Route path="women" element={<Women />}></Route>
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
