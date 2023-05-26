import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const c = console.log.bind(document);
// const AmountBtn = (props)=> {
//     const { amount, cartHandler } = props;
//     const [amounts, setAmounts] = useState(amount);
    // const increase = ()=> {
        
    // };

    // const decrease = () =>{
    //     if (ref.target.value <= 1)return; else setAmounts(amounts-1)
    // };

    
    

//     const classes = "px-4 py-1";
//     return (
//         <div className="flex w-fit border border-orangeDark text-orangeDark rounded-3xl">
//             <button 
//             onClick={increase}
//             className={classes}>
//                 <FontAwesomeIcon 
//                 icon={faPlus}/>
//             </button>
//             <input 
//             value={amounts}
//             type="text" 
//             className="w-12 text-xl text-center bg-transparent border-none" 
//             disabled
//             />
//             <button 
//             onClick={decrease}
//             className={classes}>
//                 <FontAwesomeIcon 
//                 icon={faMinus}
//                 />
//             </button>
//         </div>
//     )
// };

// export default AmountBtn;

const AmountBtn = React.forwardRef(
    (props, ref) =>{
        const classes = "px-4 py-1 focus:outline-none";
        const increase = ()=> {
            console.log();
            ref.current.value++;
            props.cartHandler();
        };
    
        const decrease = () =>{
            if (ref.current.value <= 1)return; else ref.current.value--
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