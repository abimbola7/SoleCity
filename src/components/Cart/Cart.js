import React, { Fragment } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Text from "../UI/Text/Text";

const Cart = () => {
    const cartItems = useSelector(state=>state.cart.cart);

    return  (
        <Fragment>
            {
                cartItems.length === 0 ? 
                <h1 className="mt-32 text-4xl text-center text-orangeDark">Your Cart is Empty</h1> : 
                <section className="w-11/12 py-5 mx-auto mt-12 text-white">       
                    <Text className="mb-5 text-4xl tracking-wider text-orangeDark w-fit">Your Cart</Text>
                    <p className="tracking-wider">You are eligible for free standard shipping in the US</p>
                    <CartItems/>
                </section>
            }
        </Fragment>
    )  
};

export default Cart;