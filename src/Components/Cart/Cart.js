import React, { Component } from "react";
import { connect } from "react-redux";
import { closeCartModal, openCartModal } from "../../store/modal";
import { Skeleton, WrapperCart } from "./Cart.styled";
import { RiCloseFill } from "react-icons/ri";

class Cart extends Component {
  render() {
    const { cartModal, closeCartModal } = this.props;

    function handleClick(event) {
      event.preventDefault();
      if (event.target === event.currentTarget) {
        closeCartModal();
      }
    }

    if (!cartModal) return null;
    return (
      <Skeleton onClick={handleClick}>
        <WrapperCart>
          <div
            style={{
              position: "relative",
              padding: ".5rem",
              color: "#fff",
              background: "#000",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <RiCloseFill
                onClick={closeCartModal}
                style={{
                  position: "absolute",
                  left: ".5rem",
                  cursor: "pointer",
                  fontSize: "2rem"
                }}
              />

              <h1>Cart</h1>
            </div>
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
