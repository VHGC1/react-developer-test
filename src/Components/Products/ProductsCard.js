import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import {
  CardWrapper,
  ShoppingCartLine,
  WrapperCardInfo,
  WrapperProducts,
} from "./ProductsCard.styled";

class ProductsCard extends Component {
  render() {
    const data = this.props.products;
    const currentCategory = this.props.category;

    return (
      <div>
        <div>ProductsCard</div>
        <WrapperProducts>
          {data
            ?.filter(({ category }) => category.includes(currentCategory))
            .map(({ id, name, gallery, attributes, inStock, prices }) => (
              <CardWrapper key={id}>
                <Link to={`/products/${id}`}>
                  <Slider photos={gallery} alt={id} attributes={attributes} />
                </Link>

                <WrapperCardInfo>
                  <Link to={`/products/${id}`}>
                    <ShoppingCartLine />
                  </Link>

                  <p>{name}</p>
                  <span>
                    {prices[0].currency.symbol} {prices[0].amount}
                  </span>
                </WrapperCardInfo>
              </CardWrapper>
            ))}
        </WrapperProducts>
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

export default connect(mapStateToProps)(ProductsCard);
