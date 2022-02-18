import React, { Component } from "react";
import { connect } from "react-redux";
import PRODUCT_QUERY from "../../query";
import CategoriesNav from "../CategoriesNav/CategoriesNav";
import { fetchProducts } from "../../store/products";
import ProductsCard from "./ProductsCard";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts(PRODUCT_QUERY);
  }

  render() {
    return (
      <section
        style={{
          margin: "5rem auto",
          padding: "150px 150px 0",
        }}
      >
        <h1>Header</h1>
        <CategoriesNav />
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

  return {
    products,
  };
}

export default connect(mapStateToProps, mapActionsToPros)(Products);
