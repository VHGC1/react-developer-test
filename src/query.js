const PRODUCT_QUERY = `
  {
    category {
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

  export default PRODUCT_QUERY;