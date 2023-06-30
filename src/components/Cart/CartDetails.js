import React, { Fragment, useCallback, useRef } from "react"
import AmountBtn from "../UI/AmountBtn/AmountBtn"
import { useDispatch, useSelector } from "react-redux";
import  { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";

const CartDetails = (props) => {
    const totalAmount = useSelector(state=>state.cart.totalAmount);
    console.log(totalAmount);
    const { name, image, amount, price, desc, id} = props;
    const dispatch = useDispatch();
    const amountRef = useRef();
    const cartAdd =
        (amt) => {
            const amount = +amountRef.current.value;
            console.log(amount);
            const item = {
                id: id,
                name : name, 
                description : desc,
                image : image,
                amount : amount,
                price : price,
            }
            console.log(amountRef.current);
            dispatch(cartActions.addToCart({items:item, type:"cart"}));
        }
    const removeFromCart = () => {};
    const removeCartItem = () => {
        dispatch(cartActions.removeFromCart({id:id, type:"remove"}))
    };

    return (
        <Fragment>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white relative flex flex-row h-40 gap-x-5">
                    <img src={image} alt="" width={50}/>
                        <div className="flex flex-col justify-center flex-1 space-y-3 whitespace-normal h-fit">
                            <Link
                            to={`/shoes/${id}`}
                                className="text-lg font-semibold uppercase tracking-wider"
                                >{name}
                            </Link>                
                                <p>{desc}</p>
                                <p className="text-lg">${price}</p>
                        </div>
                </th>
                <td className="">
                    <AmountBtn
                    id={id}
                    amount={amount} cartHandler={cartAdd} ref={amountRef} cartRemove={removeFromCart}/>
                    <button 
                    onClick={removeCartItem}
                    className="ml-10 hover:underline focus:outline-none mt-1">Remove</button>
                </td>
                <td className="px-6 py-4 text-xl">
                    <p>${ price * amount }</p>
                </td>
            </tr>
        </Fragment>
    )
}

export default CartDetails;