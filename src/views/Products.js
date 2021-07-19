import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import "../App.css";

const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
            console.log(res);
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
    <div className="App">
        <h2>Products</h2>

    {products.map((prod) => {
        <h4></h4>
        return (
            <div key={prod._id} className="App">
                <h4><Link to={`/products/${prod._id}`}> {prod.title}</Link></h4>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
            </div>
        );
        })}
    </div>
    );
};

export default Products;