import React, { Component } from "react";
import { connect } from "react-redux";
import PRODUCT_QUERY from "../../query";
import { fetchProducts } from "../../store/products";
import ProductsCard from "./ProductsCard";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts(PRODUCT_QUERY);
  }

  render() {
    const { category } = this.props;
    const title =
      category.length > 0
        ? category[0].toUpperCase() + category.substring(1)
        : "All";

    return (
      <section
        className="container animeLeft"
        style={{
          margin: "7rem auto 5rem",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h1>{title}</h1>
        </div>
        <ProductsCard />
      </section>
    );
  }
}

const mapActionsToPros = {
  fetchProducts,
};

function mapStateToProps(state) {
  const products = state.products;
  const { category } = state.category;

  return {
    products,
    category,
  };
}

export default connect(mapStateToProps, mapActionsToPros)(Products);
