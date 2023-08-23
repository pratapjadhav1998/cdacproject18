import React, { Component } from 'react'

import Card from "../cards/Card";
import Data from "../data/Data";
import cartList from "../cart/cartList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../redux/actions/CartAction";
import { incrementUnitsCartAction } from "../redux/actions/CartAction";
import { decrementUnitsCartAction } from "../redux/actions/CartAction";
//import { setProductId } from "../redux/actions/CartAction";
import { deleteItemFromCart } from "../redux/actions/CartAction";
import Cart from "../cart/Cart";
import { Redirect } from "react-router";
import ApiService from "../services/ApiService";
import { textAlign } from "@mui/system";

 class orderlist extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        console.log("In order display");

        return (
    <>
    <h1>Hey Akshata !!  Good too see you</h1>
    </>
          
        )
    }
}
export default orderlist
