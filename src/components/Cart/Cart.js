import React, { Fragment } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";


const Cart = () => {
    const cartItems = useSelector(state=>state.cart.cart);

    return  (
        <Fragment>
            {
                cartItems.length === 0 ? 
                <h1 className="text-4xl text-orangeDark text-center mt-32">Your Cart is Empty</h1> : 
                <section className="mt-12 py-5 w-11/12 mx-auto text-white">       
                    <h1 className="text-orangeDark text-4xl tracking-wider pb-5">Your Cart</h1>
                    <p className="tracking-wider">You are eligible for free standard shipping in the US</p>
                    <CartItems/>
                </section>
            }
        </Fragment>
    )  
};

export default Cart;