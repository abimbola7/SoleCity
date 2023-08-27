import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom"
import { NavLink, Link, useLocation } from "react-router-dom";
import shoesIcon from "../../images/shoes-19 (1).svg";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "../Cart/CartIcon";
import Hamburger from "../UI/Hamburger/Hamburger";
import "./MainHeader.css"
import { toggleActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import heartSvg from "../../images/heart-svgrepo-com2.png"
import Card from "../UI/Card";
import { favoriteAction } from "../../store/favorite-slice";
import FavShoes from "../FavTab/FavShoes";
// import Favorites from "../FavTab/Favorites";

const SideBar = (props) => {
    const hamburgerToggle = useSelector(state=>state.ui.hamburgerIsToggled);
    return (
        <div className={`fixed ${hamburgerToggle ? 'translate-x-0' : 'translate-x-[20rem]' } right-0 z-[1000000] h-screen w-[20rem] bg-[#161717] transform duration-500 top-0`}>
                <Hamburger
                className="text-right absolute top-6 left-[17.5rem]"
                />
            <div className="grid grid-rows-5 mt-10 text-white ">
                {[
                    ['NEW'],['SHOP'],['CART', '/cart'],['SHIPPING'],['ACCOUNT'],['ABOUT US']
                ].map(([title, url])=>(
                    <Link 
                    to={url}
                    className="px-12 py-4 text-lg">{title}</Link>
                ))}
                {/* <div className="px-10 py-3 border">{title}</div> */}
            </div>
        </div>
    )
};

const ModalBody = () => {
    const favIsToggled = useSelector(state=>state.favorites.modalIsClicked);
    const dispatch = useDispatch()
    console.log(favIsToggled);
    return (
        <Fragment>
            {
                favIsToggled && <div 
                className="fixed bg-black opacity-75 w-full h-screen z-[10000] blur-3xl"
                onClick={()=>dispatch(favoriteAction.favoriteToggler())}
                />
            }
        </Fragment>
    )   
}

const Favorites = () => {
    const favIsToggled = useSelector(state=>state.favorites.modalIsClicked);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {
                favIsToggled && 
                <Card
                    className="fixed px-4 py-5  space-y-6 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 z-[10001]"
                    style={{
                        maxWidth: "650px",
                        width : "90%"
                    }}
                    >
                    <FavShoes/>
                    <button 
                    onClick={()=>dispatch(favoriteAction.favoriteToggler())}
                    className="float-right border border-[#f9ba15] px-5 py-1">Close</button>
                </Card>
            }
        </Fragment>
    )
}

const MainHeader = () => {
    const location = useLocation();
    console.log(location.pathname)
    const favAmount = useSelector(state=>state.cart.totalFavorites);
    const [ header, setHeader] = useState("black")
    const dispatch = useDispatch();
    const scrollHandler = () => {
        window.scrollY > 620 ? setHeader("white") : setHeader("black")
    }

    window.addEventListener("scroll", scrollHandler)
    return (
        <Fragment>
            {
                ReactDOM.createPortal(
                    <SideBar/>,
                    document.getElementById("sidebar")
                )
            }
            {
                ReactDOM.createPortal(
                    <Favorites/>,
                    document.getElementById("fav")
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalBody
                    />,
                    document.getElementById("fav")
                )
            }

            <header className={`h-20 w-full text-white z-[1000] px-3 overflow-hidden fixed top-0 ${location.pathname === '/SoleCity/' ? (header === "white" ? ' bg-white' : '') : 'bg-[#0F1110]' }  transition duration-500`}>
                <nav className="container relative flex items-center justify-between h-full mx-auto">
                    <div className="flex items-center space-x-2">
                        <Link to="/SoleCity" className="text-2xl md:text-5xl font-semibold tracking-wider text-[#F9BA15]">SoleCity</Link>
                        <sub><img src={shoesIcon} alt="shoe-icon" width={50} height={50} /></sub>
                    </div>
                    <div className="relative hidden lg:block text-[#F9BA15]">
                        <ul className="flex items-center space-x-6 text-2xl font-semibold">
                            <Link
                            to="/SoleCity"
                            >HOME</Link>
                            <li
                            className="relative cursor-pointer"
                            >
                                <div className="absolute text-white text-sm -top-1 right-0 bg-[#f9ba15] px-1 rounded-md pointer-events-none">{ favAmount }</div>
                                <button
                                onClick={()=>dispatch(favoriteAction.favoriteToggler())}
                                className="focus:outline-none"
                                ><img src={heartSvg} alt="" width={27}/></button>
                            </li>
                            <li className="relative overflow-hidden">
                                <SearchBar/>
                            </li>
                            <Link 
                            to="/cart"
                            className="relative">
                                <CartIcon/>
                            </Link>
                        </ul>
                    </div>
                    <Hamburger
                    className="lg:hidden"
                    />
                </nav>
            </header>
        </Fragment>
    )
}

export default MainHeader