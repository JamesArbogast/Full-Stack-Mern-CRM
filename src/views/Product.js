import { useEffect, useState } from "react";
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
        }, [props._id]);

        if(product == null) {
            return "Loading..."
        }

    return (
        <div>
            <h4></h4>
            <div key={props.id} className="shadow mb-4 rounded border p-4">
                <h4>{props.title}</h4>
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Product;