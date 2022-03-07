import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class ProductPage extends Component {
  render() {
    const { id } = this.props.params;
    //const { data } = this.props.products;

    return (
      <section
        className="container"
        style={{
          margin: "7rem auto 5rem",
        }}
      >
        {id}
      </section>
    );
  }
}

function mapStateToProps(state) {
  const products = state.products;
  return {
    products,
  };
}
// the only way i found to grab the url parameter
//using react class component with react router dom v6
const withRouter = (ProductPage) => (props) => {
  const params = useParams();

  return <ProductPage {...props} params={params} />;
};

export default connect(mapStateToProps)(withRouter(ProductPage));
