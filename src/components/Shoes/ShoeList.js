import React, { Fragment } from "react";
import Heart from "../UI/Heart";
import { Link } from "react-router-dom";
import CartIcon from "../UI/CartIcon";
import CartButton from "../UI/CartButton/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";



const ShoeList = (props) => {
    const dispatch = useDispatch();
    const { name, image, id, cart, heart, desc, price, amount, toggle, shoes} = props 
    const addToCart = () => {
        console.log("works");
        const items = {
            name : name,
            image: image,
            id: id,
            cartIsClicked : cart,
            heartIsClicked: heart,
            description : desc,
            price : price,
            amount: amount
        }
        dispatch(cartActions.addToCart(items));

        // if (price > 1) {
        //     shoes[id-1].toggleStatus = true;
        //     console.log(shoes);
        // }
    };
    return (
        <Fragment>
            <div className="">
                <div className="relative z-50">
                    <Heart
                    image={image}
                    name={name}
                    price={price}
                    description={desc}
                    id={id}
                    shoe={props.shoes}
                    setShoes={props.setShoes}
                    heart={heart}
                    />

                    <CartIcon
                    id={id}
                    shoe={props.shoes}
                    setShoes={props.setShoes}
                    cart={cart}
                    />
                </div>
                <Link 
                to={`/shoes/${id}`}
                className="flex flex-col space-y-2">
                    <div className="overflow-hidden cursor-pointer">
                        <img 
                        src={image}
                        alt="img" 
                        loading="lazy"
                        className="transform hover:scale-110 transition-all duration-300"/>
                    </div>
                    <div className="space-y-1 text-white">
                        <h1
                        className="uppercase text"
                        >{name}</h1>
                        <p>${price}</p>
                    </div>
                    <CartButton
                    values={{
                        onClick : addToCart,
                        className: "py-2 border border-[#F9BA15] text-[#F9BA15] font-semibold text-xl",
                        type : "button"
                    }}
                    >
                        Add To Cart
                    </CartButton>
                </Link>
            </div>
        </Fragment>
    )
};

export default ShoeList;