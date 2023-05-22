import React, { useState, Fragment } from "react";
import ShoeList from "./ShoeList";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import "./shoe.css"
import { fetchShoeData } from "../../store/shoe-slice";
import { apiActions } from "../../store/api-slice";


const Shoes = () => {
    const dispatch = useDispatch();
    const shoeItems =  useSelector(state=>state.shoe.shoe);
    const notification = useSelector(state=>state.api.notification);
    const error = useSelector(state=>state.api.error);
    console.log(notification);
    let content;
    if (notification === false) {
        content = <LoadingSpinner/>
    } 
    if (notification === true && !error) {
        content = 
        <div className="grid w-4/5 grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
            {
                shoeItems.map((shoe, i)=>
                <ShoeList
                toggle={shoe.toggleStatus}
                id={shoe.id}
                key={shoe.id}
                name={shoe.name}
                desc={shoe.description}
                image={shoe.imageUrl}
                price={shoe.price}
                amount={shoe.amount}
                heart={shoe.heartIsClicked}
                cart={shoe.cartIsClicked}
                />
                )
            }
        </div>
    }

    if (error) {
        content = 
        <div 
        className="text-center text-white py-10">
            Could not fetch data 
            <button 
            className="px-4 py-1 rounded-md bg-orangeDark text-black ml-5" 
            onClick={()=>{
                dispatch(apiActions.error(null));
                dispatch(fetchShoeData());
            }}>
                Retry
            </button>
        </div>
    }
    return (
        <Fragment>
            <div className="flex flex-row- justify-between items-end w-4/5 mx-auto mb-10">
                <div className="space-y-4 tracking-widest">
                    <h1 className="text-4xl text-orangeDark">Explore your shoes</h1>
                    <p className="text-white text-sm">Get the best deal on your favorite shoes.</p>
                </div>
                <div className="flex space-x-6 text-white items-end">
                    <p>
                    Total Products
                    <span className="text-orangeDark ml-2 text-lg">{shoeItems.length} items</span>
                    </p>
                    <p className="text-xl">Filter By</p>
                    <select name="" id="" className="bg-transparent border-orangeDark rounded-lg px-5 focus:outline-none outline-none">
                        <option value=""></option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </div>
            { content }
        </Fragment>
    )

};

export default Shoes