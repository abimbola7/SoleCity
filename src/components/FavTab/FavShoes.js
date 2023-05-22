import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import classes from "./Favorite.module.css";
import "./Favorite.css"
import image from "../../images/2.jpg"
import FavItem from "./FavItem";

const FavShoes = () => {
    const favShoes = useSelector(state=>state.cart.heartArray);
    console.log(favShoes);
    return (
        <Fragment>
            <div className={`space-y-4 flex flex-col max-h-56 overflow-y-auto py-2 `}>
                {
                    favShoes.map((elem)=><FavItem
                    key={elem.id}
                    id={elem.id}
                    desc={elem.description}
                    price={elem.price}
                    name={elem.name}
                    image={elem.imageUrl}
                    />)
                }
            </div>
            {
                favShoes.length === 0 && <h1 className="text-xl font-semibold">You don't have any Favorites</h1>
            }
        </Fragment>
    )
};

export default FavShoes;