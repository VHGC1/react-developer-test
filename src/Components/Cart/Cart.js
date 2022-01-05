import React, { Component } from "react";
import { Skeleton, WrapperCart } from "./Cart.styled";

export default class Cart extends Component {
  render() {
    return (
      <Skeleton onClick={this.props.action}>
        <WrapperCart>
          <div style={{color: "#fff", background: "#000", textAlign: "center"}}>
            <h1>Cart</h1>
            <span>1 item</span>
          </div>

          <ul>
            <li style={{display: "flex"}}>
              <img src="" alt="img" />
              <div>
                <span>name</span>
                <span>price</span>
                <span>options</span>
                <span>quantity</span>
              </div>
            </li>
          </ul>
        </WrapperCart>
      </Skeleton>
    );
  }
}
