import React, { Component } from "react";
import { Container, Header, Nav, Wrapper } from "./NavBar.styled";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";
import { openCartModal } from "../../store/modal";

class NavBar extends Component {
  render() {
    const { openCartModal } = this.props;

    return (
      <>
        <Header>
          <Container>
            <Nav className="container">
              <div>Logo</div>
              <Wrapper>
                <div>
                  <BsCurrencyDollar />
                  <IoIosArrowDown />
                </div>
                <div onClick={openCartModal}>
                  <RiShoppingCartLine />
                </div>
              </Wrapper>
            </Nav>
          </Container>
        </Header>
        <Cart />
      </>
    );
  }
}

function mapStateToProps(state) {
  const cartModal = state.modal.cartModal;
  const currency = state.currency;
  
  return {
    cartModal,
    currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openCartModal: () => dispatch(openCartModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
