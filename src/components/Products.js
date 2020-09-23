import React from "react";
import store from "../store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { titles: [] };
  componentDidMount = () => {
    const products = store.map((product) => {
      return (
        <div style={{display:"flex", margin:`0.1rem`}} key={product.id}>
          <Link
            style={{ padding: `1rem`, margin: `1rem` }}
            to={`/ProductDetail/${product.id}`}
          >
            {" "}
            {product.title}
          </Link>
        </div>
      );
    });
    this.setState({ titles: products });
  };
  render() {
    return (
      <div>
        {this.state.titles}
       
      </div>
    );
  }
}

export default Products;
