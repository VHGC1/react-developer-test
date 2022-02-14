import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PRODUCT_QUERY from "../../query";
import Clothes from "../Categories/Clothes";
import Tech from "../Categories/Tech";
import CategoriesNav from "../CategoriesNav/CategoriesNav";
import {fetchProducts} from "../../store/products"

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts(PRODUCT_QUERY)
  }

  render() {
    return (
      <section
        style={{
          margin: "5rem auto",
          padding: "150px 150px 0",
        }}
      >
        <h1 onClick={this.handleClick}>Header</h1>
        <CategoriesNav />
        <Routes>
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </section>
    );
  }
}

const mapActionsToPros = {
  fetchProducts,
}

function mapStateToProps(state) {
  const products = state.products;

  return {
    products,
  };
}

export default connect(mapStateToProps, mapActionsToPros)(Products);
