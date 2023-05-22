import React from "react";
import cart from "../../images/shoe wallpaper.jpg"

const Carousel = () =>{
    return (
        <div className="w-100 border border-red-500 h-[900px] overflow-hidden">
            <img src={cart} alt="" className="object-right object-cover"/>
        </div>
    )
};

export default Carousel;