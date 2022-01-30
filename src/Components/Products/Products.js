import React, { Component } from "react";

const PRODUCT_QUERY = `
{
  category {
    name
    products {
      id
    	name
    	inStock
    	description
    	category
    	brand
    	gallery
			attributes {
      	id
      	name
      	type
      	items {
        	displayValue
        	value
        	id
     	 }
    	}
    	prices {
        amount
      	currency {
          label
          symbol
        }
    	}
  	}
  }
}
`;

export default class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCT_QUERY }),
    })
      .then((response) => response.json())
      .then(({ data }) => this.setState({ products: data.category }));
  }

  render() {
    return (
      <div
        style={{
          margin: "5rem auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          padding: "150px 150px 0",
        }}
      >
        {/* {console.log(this.state.products.products)} */}
        {this.state.products.products?.map(
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
                <img
                  src={gallery[0]}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "320px" }}
                />
                {name}
                <button
                  style={{
                    background: inStock ? "black" : "red",
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
