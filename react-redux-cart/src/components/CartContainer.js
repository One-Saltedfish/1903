import React from "react"
import { connect } from "react-redux"
import Cart from "./Cart"

const CartContainer = props => <Cart {...props} />
const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  }
}
export default connect(mapStateToProps)(CartContainer)
