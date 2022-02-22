import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import { CardWrapper, WrapperProducts } from "./ProductsCard.styled";
import { RiShoppingCartLine } from "react-icons/ri";

class ProductsCard extends Component {
  render() {
    const data = this.props.products;

    return (
      <div>
        <div>ProductsCard</div>
        <WrapperProducts>
          {data?.map(({ id, name, gallery, attributes, inStock, prices }) => (
            <CardWrapper>
              <Link key={id} to={`/products/${id}`}>
                <Slider photos={gallery} alt={id} attributes={attributes} />
              </Link>

              <div style={{ position: "relative" }}>
                <RiShoppingCartLine
                  style={{
                    display: "none",
                    cursor: "pointer",
                    position: "absolute",
                    top: "-1.5rem",
                    right: ".1rem",
                    background: "#5ECE7B",
                    color: "#fff",
                    borderRadius: "50%",
                    height: "2.5rem",
                    width: "2.5rem",
                    padding: ".45rem",
                  }}
                />

                <p>{name}</p>
                <span>
                  {prices[0].currency.symbol} {prices[0].amount}
                </span>
              </div>
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
