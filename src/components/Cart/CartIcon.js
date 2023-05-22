import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

// import classes from "../MainHeader/MainHeader.module.css"
const CartIcon = () => {
    const cartItems = useSelector(state=>state.cart.cart);
    const amount = useSelector(state=>state.cart.totalQuantity);
    console.log(cartItems);
    // const amount = cartItems.reduce((prevState, currentState)=>{
    //     return prevState + currentState.amount
    // }, 0)

    return (
        <React.Fragment>
            {
                amount > 0 && <span className="absolute px-2 text-sm bg-white rounded-full -top-2 -right-2 ">{amount}</span>
            }
            <FontAwesomeIcon icon={faCartShopping} className={`text-2xl`}/>
        </React.Fragment>
    )
}

export default CartIcon