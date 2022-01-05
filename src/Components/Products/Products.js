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
      	currency
      	amount
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
      <div>
        {/* {console.log(this.state.products.products)} */}
        {this.state.products.products &&
          this.state.products.products
            .filter(({ inStock }) => inStock)
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
                  <div key={id}>
                    {category}
                    {name}
                    {brand}
                  </div>
                );
              }
            )}
      </div>
    );
  }
}
