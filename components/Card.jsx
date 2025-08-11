import React from "react";


const Card = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body text-center ">
          <h5 className="card-title ">{product.name}</h5>
          <p className="card-text ">{product.description}</p>

          {product.discount > 0 ? (
            <p>
              price :₹<del>{product.price}</del>
              <span className="ps-3">₹{product.discountedPrice}</span>
            </p>
          ) : (
            <p>price :₹{product.price}</p>
          )}
          <a href="#" className="btn btn-outline-success" type="submit"> View More</a>
            <button className="btn btn-outline-primary ms-2" type="submit">Add To Cart</button>
          
        </div>
      </div>
    </>
  );
};

export default Card;