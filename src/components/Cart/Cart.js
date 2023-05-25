import React, { Fragment } from "react";
import CartItems from "./CartItems";

const Cart = () => {
    return  (
        <Fragment>
            <section className="mt-12 py-5 w-11/12 mx-auto text-white">       
                <h1 className="text-orangeDark text-4xl tracking-wider pb-5">Your Cart</h1>
                <p className="tracking-wider">You are eligible for free standard shipping in the US</p>
                <CartItems/>
            </section>
        </Fragment>
    )  
};

export default Cart;