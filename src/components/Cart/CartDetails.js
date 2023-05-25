import React, { Fragment } from "react"
import img from "../../images/1.webp"

const CartDetails = (props) => {
    const { name, image, amount, price, desc, id} = props
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
                                <p className="text-lg">${price * amount}</p>
                        </div>
                </th>
                <td className="px-6 py-4">
                    
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
            </tr>
        </Fragment>
    )
}

export default CartDetails;