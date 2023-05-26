import React, { Fragment, useCallback, useRef } from "react"
import AmountBtn from "../UI/AmountBtn/AmountBtn"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartDetails = (props) => {
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
                price : price
            }
            console.log(amountRef.current);
            dispatch(cartActions.addToCart1(item, false))
        }
    return (
        <Fragment>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white relative flex flex-row h-40 gap-x-5">
                    <img src={image} alt="" width={120}/>
                        <div className="flex flex-col justify-center flex-1 space-y-3">
                            <h1
                                className="text-2xl font-semibold uppercase "
                                >{name}
                            </h1>                
                                <p>{desc}</p>
                                <p className="text-lg">${price}</p>
                        </div>
                </th>
                <td className="px-6 py-4">
                    <AmountBtn 
                    // ref={amountRef}
                    amount={amount} cartHandler={cartAdd} ref={amountRef}/>
                </td>
                <td className="px-6 py-4 text-xl">
                    <p>${ price * amount }</p>
                </td>
            </tr>
        </Fragment>
    )
}

export default CartDetails;