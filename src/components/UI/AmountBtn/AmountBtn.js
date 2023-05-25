import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const c = console.log.bind(document);
const AmountBtn = (props)=> {
    const { amount, cartHandler } = props;
    const [amounts, setAmounts] = useState(amount);
    const increase = ()=> {
        setAmounts(amounts+1);
    };

    const decrease = () =>{
        if (amounts <= 1)return; else setAmounts(amounts-1)
    };

    useEffect(() => {
      cartHandler(amounts)
    }, [amounts, cartHandler])
    

    const classes = "px-4 py-1";
    return (
        <div className="flex w-fit border border-orangeDark text-orangeDark rounded-3xl">
            <button 
            onClick={increase}
            className={classes}>
                <FontAwesomeIcon 
                icon={faPlus}/>
            </button>
            {/* <div className={`${classes} text-xl`}>{ amounts }</div> */}
            <input 
            value={amounts}
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
};

export default AmountBtn;