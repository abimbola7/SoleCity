import React, { useState } from "react";
import hero from "./Hero.module.css"
import heroImg from "../../images/p10.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-regular-svg-icons";
import Button from "../UI/Button";
import HeroShoeItem from "./HeroShoeItem";

const Hero = () => {
    const heroShoe =
        {
            name : "TIMBERLAND | Men's Pit Boss",
            description : "Designed for durability and comfort in tough work environments. It features an anti-fatigue technology to reduce shock and provide support for all day's comfort.",
            price : 300
        }

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center md:flex-row-reverse h-full md:justify-between md:px-12 lg:px-20">
            <img src={heroImg} alt="" className={`${hero.img} -z-1000 w-[30rem] -mt-10 md:w-[30rem] lg:w-[40rem]`}/>
            <HeroShoeItem
            name={heroShoe.name}
            desc={heroShoe.description}
            price={heroShoe.price}
            />
        </div>
    )
}


export default Hero;