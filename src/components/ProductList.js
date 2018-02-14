import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';



class ProductItem extends Component {
  render() {
    return (
      <a className="panel-block">
	<span className="panel-icon">
	  <i className="fa fa-book"></i>
	</span>
	{this.props.product.name} ({this.props.product.id})
      </a>
    )
  }
}

const ProductListQuery = gql`
  query {
    getAllProducts{
      id
      name
    }
  }
`

class ProductList extends Component {
  render() {
    if(this.props.data.loading){
      return <div>Loading</div>
    }
    return (
      <div className="panel">
	<p className="panel-heading">
	  Product List
	</p>
	{this.props.data.getAllProducts.map(product => <ProductItem key={product.id} product={product}></ProductItem>)}
      </div>
    );
  }
}

const ProductListWithData = graphql(ProductListQuery)(ProductList)

export default ProductListWithData
