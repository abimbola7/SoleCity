import React, { useState, Fragment } from "react";
import ShoeList from "./ShoeList";
import Text from "../UI/Text/Text";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import "./shoe.css"
import { fetchShoeData } from "../../store/shoe-slice";
import { apiActions } from "../../store/api-slice";


const c = console.log.bind(document);

const sortList = (items, isSorting) => {
    items.sort((a,b)=>{
        
        // sortconsole.log(isSorting);
        if (isSorting) {
            return a.price - b.price;
            // return a.name > b.name ? 1 : -1;
        } 
        else {
            return a.name > b.name ? 1 : -1
        }
    })
};

const Shoes = () => {
    const shoeItems =  useSelector(state=>state.shoe.shoe);
    const items = [...shoeItems]
    // const items = [...shoeItems]
    // console.log(items);
    const location = useLocation();
    const navigation =  useNavigate();
    c(location);
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const isShoePrice = queryParams.get('sort') === 'price'
    c(isShoePrice)
    const dispatch = useDispatch();
    const notification = useSelector(state=>state.api.notification);
    const error = useSelector(state=>state.api.error);
    console.log(notification);
    let content;
    const changeSortingHandler  = (e) => {
        if (e.target.value === "name") {
            navigation({
            pathname: location.pathname,
            search: `?sort=name`
            })
        } else{
            navigation({
                pathname: location.pathname,
                search: `?sort=price`
            })
        }
        console.log(e.target.value)
    };

    sortList(items, isShoePrice);
    if (notification === false) {
        content = <LoadingSpinner/>
    } 
    if (notification === true && !error) {
        content = 
        <div className="grid w-4/5 grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
            {
                items.map((shoe, i)=>
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
        className="py-10 text-center text-white">
            Could not fetch data 
            <button 
            className="px-4 py-1 ml-5 text-black rounded-md bg-orangeDark" 
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
            <div className="flex flex-col xs:flex-row items-center xs:items-end xs:justify-between w-11/12 mx-auto mb-10 mt-20 px-3 space-y-5 xs:space-y-0">
                <div className="space-y-4 tracking-widest flex-1">
                    <Text className="text-2xl md:text-4xl text-orangeDark title w-fit">Explore your shoes</Text>
                    <p className="text-sm text-white hidden sm:block">Get the best deal on your favorite shoes.</p>
                </div>
                <div className="flex items-center xs:items-end space-x-2 text-white">
                    <p>
                    Total Products
                    <span className="ml-2 text-lg text-orangeDark">{shoeItems.length} items</span>
                    </p>
                    <p className="">Filter By</p>
                    <select 
                    className="bg-transparent rounded-lg outline-none border-orangeDark focus:outline-none"
                    onChange={changeSortingHandler}
                    size={1}
                    >
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