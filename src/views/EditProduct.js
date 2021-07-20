import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import "../App.css"

const EditProduct = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const [errors, setErrors] = useState(null);


    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products/" + props.id)
            .then((res) => {
                console.log(res);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleEditProductSubmit = (event) => {
        event.preventDefault();

        const editedProduct = {
            title: title,
            price: price,
            description: description,
        };

        axios
            .put(
                `http://localhost:5000/api/products/${props.id}`,
                editedProduct
            )
            .then((res) => {
                console.log(res);
                navigate("/products/" + props.id)
            })
            .catch((err) => {
                setErrors(err.response?.data?.errors);
                console.log(err);
            });
    };

    return (
        <div className="App">
            <h3 className="">Update your product:</h3>

            <form
                onSubmit={(e) => {
                    handleEditProductSubmit(e);
                }}
            >
            <div className="form-group">
                <label className="h6">Title</label>
                {errors?.title && (
                    <span className="text-danger">{errors?.title?.message}</span>
                )}
                <input
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>

            <div className="form-group">
                <label className="h6">Price</label>
                {errors?.price && (
                    <span className="text-danger">{errors?.price?.message}</span>
                )}
                <input
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    value={price}
                />
            </div>

            <div className="form-group">
                <label className="h6">Description</label>
                {errors?.description && (
                    <span className="text-danger">{errors?.description?.message}</span>
                )}
                <input
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}  
                    type="text"
                    className="form-control"
                    value={description}
                />
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default EditProduct;