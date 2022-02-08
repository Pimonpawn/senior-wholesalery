import React from "react";
import Rating from "./Rating";
export default function Product(props) {
    const { product } = props;
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.Image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div className="price">{product.price}฿</div>
                <Rating/>
                <button className="addtocart">Add to cart</button>
            </div>
        </div>
    )
}

