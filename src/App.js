import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Products from "./views/Products";
import Product from "./views/Product";
import NewProduct from "./views/NewProduct";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Products</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/products"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Products
          </Link>
          <Link
            to="/products/new"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            New Product
          </Link>
        </div>
      </nav>
      <Router>
        <Products path="/products" />
        <Product path="/products/:id" />
        <EditProduct path="/products/:id/edit" />
        <NewProduct path="/products/new" />
        <Redirect from="/" to="/products" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
