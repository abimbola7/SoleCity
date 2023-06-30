import React, { Fragment } from "react";
import CartDetails from "./CartDetails";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

const c= console.log.bind(document);
const CartItems = () => {
    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const cartItems = useSelector(state=>state.cart.cart);
    c(cartItems);
    return (
        <Fragment>
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-sm text-left text-white dark:text-gray-400 overflow-auto">
                    <thead className="text-xs uppercase dark:bg-gray-700 dark:text-gray-400 border-b border-slate-500">
                        <tr className="tracking-widest">
                            <th className="px-6 py-3">
                                Product
                            </th>
                            <th className="px-6 py-3">
                                Quantity
                            </th>
                            <th className="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((items)=>
                            <CartDetails
                            key={items.id}
                            id={items.id}
                            image={items.image}
                            desc={items.description}
                            price={items.price}
                            amount={items.amount}
                            name={items.name}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            <Card
            className="bg-neutral-700 max-w-xs w-[80%] px-6 space-y-10 rounded-none pb-10 pt-7">
                <div className="flex flex-row justify-between items-center text-xl">
                    <p>Total</p>
                    <span>$ {totalAmount}</span>
                </div>
                <p className="text-justify">
                    Shipping & taxes calculated at checkout. Orders outside of the US may be subject to import fees / duties.
                </p>

                <button
                className="bg-orangeDark text-black w-full text-center py-2 font-bold"
                >
                    CHECKOUT 
                </button>
            </Card>
        </Fragment>
    )
};

export default CartItems;