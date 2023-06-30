import React from "react"
import text from "./Text.module.css"


const Text = props => {
    const classes = `${text.title} ${props.className} relative`
    return (
        <h1
        className={classes}
        >{props.children}</h1>
    )
};

export default Text;