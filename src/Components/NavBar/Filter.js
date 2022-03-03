import React, { Component } from "react";
import { connect } from "react-redux";
import { setCategory } from "../../store/category";
import { CategoryButton } from "./Filter.styled";

class Filter extends Component {
  render() {
    const categories = [
      ...new Set(this.props.products?.map((i) => i.category)),
    ];

    const currentCategory = this.props.category;

    return (
      <div>
        <CategoryButton
          value=""
          onClick={({ target }) => this.props.setCategory(target.value)}
          category={currentCategory}
        >
          All
        </CategoryButton>
        {categories?.map((category) => (
          <CategoryButton
            key={category}
            value={category}
            onClick={({ target }) => this.props.setCategory(target.value)}
            category={currentCategory}
          >
            {category.toUpperCase()}
          </CategoryButton>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const products = state.products.data;
  const { category } = state.category;

  return {
    products,
    category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCategory: (props) => dispatch(setCategory(props)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
