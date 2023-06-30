import React from "react";
import button from "./Button.module.css"

const Button = (props) => {
    const classes = `${button.cutout} px-4 py-2 font-semibold`
    return (
        <button className={classes}>
            {
                !props.children ? "Add to Cart" : props.children
            }
        </button>
    )
};

export default Button;