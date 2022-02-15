import React, { Component } from "react";
import { connect } from "react-redux";

class Clothes extends Component {
  state = {
    pathname: null
  }

  componentDidMount() {
    this.setState({pathname: window.location.pathname.replace("/", "")})
  }

  render() {
    const { data, loading, error } = this.props.products;

    if (loading) return "Carregando...";
    if (error) return <p>{error}</p>;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {console.log(this.state.pathname)}
        {data
          ?.filter(({ category }) => category === this.state.pathname)
          .map(
            ({
              id,
              name,
              brand,
              category,
              description,
              attributes,
              gallery,
              inStock,
              prices,
            }) => {
              return (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img src={gallery[0]} alt="" />
                  {name}

                  <button
                    style={{
                      background: !inStock ? "black" : "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {inStock ? "out of stock" : "add to cart"}
                  </button>
                </div>
              );
            }
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const products = state.products;

  return {
    products,
  };
}

export default connect(mapStateToProps)(Clothes);
