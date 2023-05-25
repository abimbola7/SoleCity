import React from "react";
import CartDetails from "./CartDetails";
import { useSelector } from "react-redux";


const c= console.log.bind(document);
const CartItems = () => {
    const cartItems = useSelector(state=>state.cart.cart);
    c(cartItems);
    return (
        <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left text-white dark:text-gray-400">
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
    )
};

export default CartItems;