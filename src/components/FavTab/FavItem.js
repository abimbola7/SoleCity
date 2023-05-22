import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../../store/cart-slice";
import { shoeAction } from "../../store/shoe-slice";
import { useDispatch } from "react-redux";
import useToggle from "../../hooks/use-toggle";

const FavItem = (props) => {
    const dispatch = useDispatch();
    const removeHandler = () => {
        // const { id, name, desc } = props;
        console.log(props.price);
        dispatch(shoeAction.toggleHeartIcon(props.id));
        dispatch(cartActions.removeFromFav(props.id));
    };
    
    return (
        <div className="relative flex flex-row h-40 gap-x-2">
            <img src={props.image} alt="" width={150}/>
            <div className="flex flex-col justify-center flex-1 space-y-3"
            >
                <h1
                className="text-2xl font-semibold uppercase "
                >{props.name}</h1>                
                <p>{props.desc}</p>
                <p>${props.price}</p>
            </div>
            <div className="">
                <button
                className="px-2 py-1 my-auto mt-16 mr-2 border-none rounded-lg text-[#F9BA15]"
                >
                <FontAwesomeIcon 
                    className="text-xl"
                    icon={faTimes} 
                    onClick={removeHandler}
                    />
                </button>
            </div>
        </div>
    )
};

export default FavItem;