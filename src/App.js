import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Cart from "./Page/CartPage";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cartList.cartItems);
  console.log(cartItems);

  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <Link style={{color: "black"}} className="brand" to="/">Kabra</Link>
        </div>
        <div>
          <Link style={{color: "black"}} to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
        </div>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
