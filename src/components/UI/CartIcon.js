import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../hooks/use-toggle";

const CartIcon  = (props) => {
    const { cart, id, setShoes, shoe } = props;
    // const {toggleHandler:cartHandler} = useToggle({id, setShoes, shoe, cart}, true)
    return (
        <button
        // onClick={cartHandler}
        className="absolute product-img right-16 top-4 focus:outline-none"
        >
            <FontAwesomeIcon 
            className={`text-3xl hover:scale-110 transition-all duration-150 ${ cart ? 'text-green-500' : 'text-slate-400' }`}
            icon={faBagShopping} />
        </button>
    )
};

export default CartIcon;