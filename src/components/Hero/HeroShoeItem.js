import React from "react"
import Button from "../UI/Button";
import hero from "./Hero.module.css"

const HeroShoeItem = (props) => {
    const itemClass = `max-w-2xl w-11/12  md:w-[30rem] text-white space-y-3 md:space-y-6`
    return (
        <div className={itemClass}>
            <h1 className="text-2xl md:text-3xl text-[#F9BA15]">{props.name}</h1>
            <p className="text-md md:text-xl leading-8">{props.desc}</p>
            <Button/>
        </div>
    )
};

export default HeroShoeItem;