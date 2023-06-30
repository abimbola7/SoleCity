import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { shoeAction } from "../../store/shoe-slice";
import useToggle from "../../hooks/use-toggle";

const Heart = (props) => {
    // const favAmount = useSelector(state=>state.cart.totalFavorites);
    // const shoeArr = useSelector(state=>state.shoe.shoe);
    // console.log(shoeArr);
    const { heart, id, setShoes, shoe, name, image, price, description } = props;
    // const {toggleHandler:heartHandler} = useToggle({id, setShoes, shoe, heart}, false)
    const dispatch = useDispatch();
    const heartHandler = () => {
        const item = {
            id:id,
            name: name,
            description : description,
            price: price,
            imageUrl: image,
            heartIsClicked : heart
            
        }
        dispatch(shoeAction.toggleHeartIcon(id));
        dispatch(cartActions.addToFavorite(item));
    };
    return (
        <button 
        onClick={heartHandler}
        className="absolute cursor-pointer product-img right-4 top-4 focus:outline-none"
        >
            <i className={`text-3xl hover:scale-110 transition-all duration-150 ${ heart ? 'text-red-500' : 'text text-gray-400' } fa-solid fa-heart`}></i>
         </button>
    )
};

export default Heart;