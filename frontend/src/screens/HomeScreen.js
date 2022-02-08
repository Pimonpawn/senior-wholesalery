import React from "react";
import data from '../data.js';
import Product from '../components/Product.js';

export default function HomeScreen() {
    return (
        <div>
            <div id="bgslider">
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

            </div>
        </div>
    );
}