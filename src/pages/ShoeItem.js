import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { fetchShoeItem } from "../store/shoe-slice";
import { useDispatch } from "react-redux";
import { apiActions } from "../store/api-slice";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import ShoeListItem from "../components/Shoes/ShoeListItem";
import ShoeList from "../components/Shoes/ShoeList";

const ShoeItem = () => {
    const dispatch =  useDispatch()
    const { quoteId } = useParams();
    const notification = useSelector(state=>state.api.notification);
    const item = useSelector(state=>state.shoe.shoeItem);
    console.log(item);
    const error = useSelector(state=>state.api.error);
    let content;
    if (notification === false) {
        content = <LoadingSpinner/>
    }
    if (notification === true && !error) {
        content = <ShoeListItem
        id={item.id}
        image={item.imageUrl}
        name={item.name}
        amount={item.amount}
        desc={item.description}
        price={item.price}
        />
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
            }}>
                Retry
            </button>
        </div>
    }

    useEffect(() => {
      dispatch(fetchShoeItem(quoteId))
    }, [quoteId,dispatch])
    

    return (
        <Fragment>
            { content }
        </Fragment>
    )
};

export default ShoeItem;