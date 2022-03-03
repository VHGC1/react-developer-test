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

    return (
      <div>
        <div>ProductsCard</div>
        <WrapperProducts>
          {data?.map(({ id, name, gallery, attributes, inStock, prices }) => (
            <CardWrapper key={id}>
              <Link to={`/products/${id}`}>
                <Slider photos={gallery} alt={id} attributes={attributes} />
              </Link>

              <WrapperCardInfo>
                <ShoppingCartLine />
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

  return {
    products,
  };
}

export default connect(mapStateToProps)(ProductsCard);
