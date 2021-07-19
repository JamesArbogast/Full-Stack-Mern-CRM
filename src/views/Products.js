import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="w-50 mx-auto text-center">
        <h2>Products</h2>

    {products.map((prod) => {
        <h4></h4>
        return (
            <div key={prod._id} className="shadow mb-4 rounded border p-4">
                <h4>{prod.title}</h4>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
            </div>
        );
        })}
    </div>
    );
};

export default Products;