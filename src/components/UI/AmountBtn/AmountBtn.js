import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const c = console.log.bind(document);

const AmountBtn = React.forwardRef(
    (props, ref) =>{
        const dispatch = useDispatch();
        const classes = "px-4 py-1 focus:outline-none";
        const increase = ()=> {
            console.log();
            ref.current.value++;
            props.cartHandler();
        };
    
        const decrease = () =>{
            if (ref.current.value <= 1)return; else ref.current.value--;
            dispatch(cartActions.removeFromCart({id:props.id, type:"cart"}))
            console.log(props.id);


        };
    return (
        <div className="flex w-fit border border-orangeDark text-orangeDark rounded-3xl">
            <button 
            onClick={increase}
            className={classes}>
                <FontAwesomeIcon 
                icon={faPlus}/>
            </button>
            <input 
            defaultValue={props.amount}
            ref={ref}
            type="text" 
            className="w-12 text-xl text-center bg-transparent border-none" 
            disabled
            />
            <button 
            onClick={decrease}
            className={classes}>
                <FontAwesomeIcon 
                icon={faMinus}
                />
            </button>
        </div>
    )
    }
);

export default AmountBtn;