import React from "react"

const CartButton = (props) => {
    return (
        <button
        {...props.values}
        >
            {props.children}
        </button>
    )
};

export default CartButton;