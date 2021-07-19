import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const NewProduct = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const handleNewProductSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description,
        };

        axios
            .post("http://localhost:5000/api/products", newProduct)
            .then((res) => {
                console.log(res);
                navigate("/products");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">New Product</h3>

            <form
                onSubmit={(e) => {
                    handleNewProductSubmit(e);
                }}
            >
            <div className="form-group">
                <label className="h6">Title</label>
                <input
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="h6">Price</label>
                <input
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="h6">Description</label>
                <input
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default NewProduct;