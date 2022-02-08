import './index.css'
import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/product/ProductScreen';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">wholesalery</a>
        </div>
        <div>
          <a className="button1" href="/signin">Sign In</a>
          <a className="button2" href="/register">Register</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        {/* <div id="bgslider">
          <figure>
            <img src="./images/image1.jpg" alt="Slider" />
            <img src="./images/image2.jpg" alt="Slider" />
            <img src="./images/image3.jpg" alt="Slider" />
            <img src="./images/image4.jpg" alt="Slider" />
            <img src="./images/image5.jpg" alt="Slider" />
          </figure>
        </div>
        <div className="recommend">
          <a>Recommend Products</a>
        </div>

        <div className="row center">
          {
            data.product.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          }

        </div> */}
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
