import React from 'react';
import logo from './logo.svg';
import './App.css';
import './features/counter/cart/Cart.css'
import './features/counter/products/Product.css'
import './features/counter/sizes/Size.css'
import Cart from './features/counter/cart/Cart';
import Products from './features/counter/products/Products'
import Sizes from './features/counter/sizes/Sizes'

function App() {
  return (
    <div className="App">
      <Sizes/>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
