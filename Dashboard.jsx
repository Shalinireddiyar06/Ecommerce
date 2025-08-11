import React, { useState } from "react";
// import products from '../data.js'
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";

const Dashboard = ({ products }) => {
    const [productsState, setProductsState] = useState(products);
    return (
        <>
            <Navbar />
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 my-3 ">
                {products.map((product, index) => (
                    <div keys={index}>
                        <div className="badge bg-primary text-wrap" style={{ width: "6rem" }}>
                            {product.category}

                        </div>
                    </div>
                ))}
            </div>
            <div className="container ">
                <div className="row g-3 justify-content-center align-items-center flex-wrap">
                    {productsState.map((product, index) => (
                        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
                            keys={index}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;