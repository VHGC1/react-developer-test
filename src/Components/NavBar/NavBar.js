import React, { Component } from "react";
import { Container, Header, Nav, Wrapper } from "./NavBar.styled";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Cart from "../Cart/Cart";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      cart: false,
      currency: false,
    };
  }

  handler(event) {
    if (event.target === event.currentTarget) {
      this.setState({
        cart: false,
      });
    }
  }

  render() {
    return (
      <>
        <Header>
          <Container>
            <Nav className="container">
              <div>Logo</div>
              <Wrapper>
                <div
                  onClick={() =>
                    this.setState((prevState) => ({
                      currency: !prevState.currency,
                    }))
                  }
                >
                  <BsCurrencyDollar />
                  <IoIosArrowDown />
                </div>
                <div
                  onClick={() =>
                    this.setState((prevState) => ({
                      cart: !prevState.cart,
                    }))
                  }
                >
                  <RiShoppingCartLine />
                </div>
              </Wrapper>
            </Nav>
          </Container>
        </Header>
        {this.state.cart && <Cart action={this.handler} />}
      </>
    );
  }
}
