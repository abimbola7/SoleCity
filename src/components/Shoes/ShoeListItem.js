import React, { useState, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import AmountBtn from "../UI/AmountBtn/AmountBtn";
import CartButton from "../UI/CartButton/CartButton";


const c  = console.log.bind(document)
const ShoeListItem  = (props)=> {
    const amountRef = useRef();
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart.cart);
    let amountFromCart;
    console.log(cart);
    const { id, name, desc, amount, price, image } = props;
    const addToCart = () => {
        const amount = +amountRef.current.value; 
        const items = {
            id : id,
            name : name,
            description : desc,
            price: price,
            image: image,
            amount : amount
        }
        dispatch(cartActions.addToCart({items:items, type:"shoe"}))
        c(items)
    }

    
    const cartAdd = (amt)=> {}

    return (
        <section
        className="container mx-auto text-white  transition-all duration-500"
        >
            <h1 className="text-3xl text-center text-orangeDark tracking-widest">SHOE DETAILS</h1>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0 mt-5">
                <div className="w-full overflow-hidden">
                    <img src={image} alt="" className="object object-center object-cover"/>
                </div>
                <div className="w-full text-white px-2 space-y-4 sm:space-y-8 flex flex-col justify-center">
                    <h1 className="text-2xl text-orangeDark md:text-4xl">{ name }</h1>
                    <p className="text-base md:text-xl">{ desc }</p>
                    <p className="text-xl">Price: <span className="text-orangeDark">${ price }</span></p>
                    <div className="flex space-x-3 items-center text-xl">
                        <p>Amount</p>
                        <AmountBtn amount={amount} cartHandler={cartAdd} ref={amountRef}/>
                    </div>
                    <CartButton
                        values={{
                            onClick : addToCart,
                            className: "py-2 border border-[#F9BA15] text-[#F9BA15] font-semibold text-xl w-fit px-5",
                            type : "button"
                        }}
                        >
                            Add To Cart
                    </CartButton>
                </div>
            </div>
        </section>
    )
}

export default ShoeListItem;