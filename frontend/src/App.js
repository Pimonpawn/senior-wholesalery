import './index.css'
import React from 'react';
import data from './data';
function App() {
  return (
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
        <div id="bgslider">
          <figure>
            <img src="./images/image1.jpg" alt="Slider" />
            <img src="./images/image2.jpg" alt="Slider" />
            <img src="./images/image3.jpg" alt="Slider" />
            <img src="./images/image4.jpg" alt="Slider" />
            <img src="./images/image5.jpg" alt="Slider" />
          </figure>
        </div>
        <div>
          <a className="recommend">Recommend Products</a>
        </div>

        <div className="row center">
          {
            data.products.map((products) => (
              <div key={products._id} className="card">
                <a href={`/product/${products._id}`}>
                  <img className="medium" src={products.Image} alt={products.name}/>
                </a>
                <div className="card-bady">
                <a href={`/product/${products._id}`}>
                    <h2>{products.name}</h2>
                  </a>
                  <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                  </div>
                  <div className="price">{products.price}฿</div>
                </div>
              </div>
            ))
          }

        </div>
      </main>
    </div>
  );
}

export default App;
