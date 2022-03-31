import React, { useState } from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import State from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import "./App.css";
function App() {
  const [ele, setEle] = useState("");
  const [products, setProducts] = useState(State.products);

  return (
    <BrowserRouter>
      <Sidebar ele={ele} setEle={setEle} />
      <Navbar ele={ele} />
      <Routes>
        {/* This Route For Display The Shop Component in any page without route and start page  */}
        <Route
          path="/"
          element={<Products products={products} filltiration={setProducts} />}
        />
        {/* This Route For Display The Shop Component in Route */}
        <Route
          path="/ecommerce/shop"
          element={<Products products={products} filltiration={setProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
