import React, { Component } from "react";
import { connect } from "react-redux";
import { closeCartModal, openCartModal } from "../../store/modal";
import { Skeleton, WrapperCart } from "./Cart.styled";

class Cart extends Component {
  render() {
    const { cartModal, closeCartModal } = this.props;

    function handleClick(event) {
      event.preventDefault();
      if (event.target === event.currentTarget) {
        closeCartModal()
      }
    }

    if(!cartModal) return null;
    return (
      <Skeleton onClick={handleClick}>
        <WrapperCart>
          <div
            style={{ color: "#fff", background: "#000", textAlign: "center" }}
          >
            <h1>Cart</h1>
            <span>1 item</span>
          </div>

          <ul>
            <li style={{ display: "flex" }}>
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

function mapStateToProps(state) {
  const cartModal = state.modal.cartModal;

  return {
    cartModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openCartModal: () => dispatch(openCartModal()),
    closeCartModal: () => dispatch(closeCartModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
