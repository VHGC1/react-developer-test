import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentCategory } from "../../store/category";
import { CategoryButton } from "./Filter.styled";
//TODO set categories in redux
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
          onClick={({ target }) => this.props.setCurrentCategory(target.value)}
          category={currentCategory}
        >
          All
        </CategoryButton>
        {categories?.map((category) => (
          <CategoryButton
            key={category}
            value={category}
            onClick={({ target }) => this.props.setCurrentCategory(target.value)}
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
  console.log(state)
  return {
    products,
    category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentCategory: (props) => dispatch(setCurrentCategory(props)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
