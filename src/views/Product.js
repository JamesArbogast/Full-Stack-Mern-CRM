import { useEffect, useState } from "react";
import { navigate} from "@reach/router";
import axios from "axios";

const Product = (props) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products/" + props.id)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id]);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:5000/api/products/" + id)
            .then((res) => {
                console.log(res);
                navigate("/products");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if(product == null) {
        return "Loading..."
    }

    return (
        <div className="App">
            <h4>Product: </h4>
            <div key={product.id} className="shadow mb-4 rounded border p-4">
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
            <div className="mt-3">
                <button
                    onClick={(e) => {
                        handleDelete(product._id);
                    }}
                    className="btn btn-sm btn-outline-danger"
                    >
                    Delete
                </button>
            </div>
            <div className="mt-3">
                <button
                    onClick={(e) => {
                        navigate("/products/" + product._id + "/edit");
                    }}
                    className="btn btn-sm btn-outline-danger"
                    >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Product;