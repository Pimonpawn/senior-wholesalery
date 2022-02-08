import React from "react";
import Rating from "../../components/Rating";
import data from "../../data";

export default function ProductScreen(props) {
    const product = data.product.find(x => x._id === props.match.params.id);
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <div className="row">
                    <div className="col-2">
                        <img className="large" src={product.Image} alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating />
                            </li>
                            <li>
                                price : {product.price} ฿
                            </li>
                            <li>Description
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">{product.price} ฿</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock > 0 ? (<span className="success">In Stock</span>
                                            ) : (
                                                <span className="error">Unavaliable</span>
                                            )}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="addtocart">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
}




// import React, { useState } from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import "../product/style.css";
// import data from "../../data";

// export default function Product(props) {
//   const [color, setColor] = useState("#80CED7");
//   const product = data.product.find(x => x._id === props.match.params.id);
//     if (!product) {
//         return <div>Product Not Found</div>
//     }

//   return (
//     <Row className="item" key={product._id}>
//       <Col sm={6}>
//         <img className="large" src={product.Image} alt={product.name}></img>
//       </Col>
//       <Col className="info">
//         <h2>{product.name}</h2>
//         <br />
//         <br />
//         <p>{product.description}</p>
//         <Row className="buttonRow">
//           <Col>
//             <p>Available Colors:</p>
//             <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
//             <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
//             <Button id="red" onClick={() => setColor("#BF211E")}></Button>
//           </Col>
//           <Col style={{ textAlign: "right" }}>
//             <p>Price: {product.price}</p>
//             <a href="/checkout">
//               <Button id="buy" variant="primary">
//                 Buy Now
//               </Button>
//             </a>
//           </Col>
//         </Row>
//       </Col>
//     </Row>
//   );
// }

// import React from "react";
// // import Rating from "../components/Rating";
// import data from "../../data";
// export default function ProductScreen(props) {
//     const product = data.product.find(x => x._id === props.match.params.id);
//     if (!product) {
//         return <div>Product Not Found</div>
//     }
//     return (
//         <div className="container">
//             <div className="carousel">
//                 <input type="radio" name="slides" checked="checked" id="slide-1"></input>
//                 <input type="radio" name="slides" id="slide-2"></input>
//                 <input type="radio" name="slides" id="slide-3"></input>
//                 <ul class="carousel__slides">
//                     <li class="carousel__slide">
//                         <figure>
//                             <div>
//                                 <img src={product.Image} alt={product.name}></img>
//                             </div>
//                             <figcaption>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 <span class="credit">Photo: Christian Joudrey</span>
//                             </figcaption>
//                         </figure>
//                     </li>
//                     <li class="carousel__slide">
//                         <figure>
//                             <div>
//                                 <img src={product.Image} alt={product.name}></img>
//                             </div>
//                             <figcaption>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 <span class="credit">Photo: Christian Joudrey</span>
//                             </figcaption>
//                         </figure>
//                     </li>
//                     <li class="carousel__slide">
//                         <figure>
//                             <div>
//                                 <img src={product.Image} alt={product.name}></img>
//                             </div>
//                             <figcaption>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                 <span class="credit">Photo: Christian Joudrey</span>
//                             </figcaption>
//                         </figure>
//                     </li>
//                 </ul>
//                 <ul class="carousel__thumbnails">
//                     <li>
//                         <label for="slide-1"><img src={product.Image} alt=""/></label>
//                     </li>
//                     <li>
//                         <label for="slide-1"><img src={product.Image} alt=""/></label>
//                     </li>
//                     <li>
//                         <label for="slide-1"><img src={product.Image} alt=""/></label>
//                     </li>
//                 </ul>
//             </div>
//         </div>


        // <div class="container">
        //     <div class="carousel">
        //         <input type="radio" name="slides" checked="checked" id="slide-1">
        //             <input type="radio" name="slides" id="slide-2">
        //                 <input type="radio" name="slides" id="slide-3">
        //                     <input type="radio" name="slides" id="slide-4">
        //                         <input type="radio" name="slides" id="slide-5">
        //                             <input type="radio" name="slides" id="slide-6">
        //                                 <ul class="carousel__slides">
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1041/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Tim Marshall</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1043/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Christian Joudrey</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1044/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Steve Carter</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1045/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Aleksandra Boguslawska</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1049/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Rosan Harmens</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                     <li class="carousel__slide">
        //                                         <figure>
        //                                             <div>
        //                                                 <img src="https://picsum.photos/id/1052/800/450" alt="">
        //                                             </div>
        //                                             <figcaption>
        //                                                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                                                 <span class="credit">Photo: Annie Spratt</span>
        //                                             </figcaption>
        //                                         </figure>
        //                                     </li>
        //                                 </ul>
        //                                 <ul class="carousel__thumbnails">
        //                                     <li>
        //                                         <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
        //                                     </li>
        //                                     <li>
        //                                         <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""></label>
        //                                     </li>
        //                                     <li>
        //                                         <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""></label>
        //                                     </li>
        //                                     <li>
        //                                         <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""></label>
        //                                     </li>
        //                                     <li>
        //                                         <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""></label>
        //                                     </li>
        //                                     <li>
        //                                         <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""></label>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         </div>

//     )
// }
