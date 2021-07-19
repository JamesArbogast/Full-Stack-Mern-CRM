import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Products from "./views/Products";
import Product from "./views/Product";
import NewProduct from "./views/NewProduct";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className="nav">
      <nav className="nav">
        <h1 className="navbar-brand mb-0">Products</h1>
        <div className="nav">
          <Link
            to="/products"
            className="nav"
          >
            All Products
          </Link>
          <Link
            to="/products/new"
            className="nav"
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
