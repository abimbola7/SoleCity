import React, { Fragment } from "react";
import ReactDOM from "react-dom"
import { NavLink, Link } from "react-router-dom";
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
        <div className={`fixed ${hamburgerToggle ? 'translate-x-0' : 'translate-x-[25rem]' } right-0 z-[10000] h-screen w-[25rem] bg-[#161717] transform duration-500`}>
            <Hamburger
            className="text-right absolute top-3 left-[20.5rem]"
            />
            <div className="grid grid-rows-5 mt-10 text-white ">
                {[
                    ['NEW'],['SHOP'],['CART'],['SHIPPING'],['ACCOUNT'],['ABOUT US']
                ].map(([title])=>(
                    <Link 
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
    const favAmount = useSelector(state=>state.cart.totalFavorites);
    const dispatch = useDispatch();
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

            <header className="h-20 w-100 text-white z-[100] px-3 overflow-hidden">
                <nav className="container relative flex items-center justify-between h-full mx-auto">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl md:text-5xl font-semibold tracking-wider text-[#F9BA15]">SoleCity</h1>
                        <sub><img src={shoesIcon} alt="shoe-icon" width={50} height={50} /></sub>
                    </div>
                    <div className="relative hidden lg:block text-[#F9BA15]">
                        <ul className="flex items-center space-x-6 text-2xl font-semibold">
                            <Link
                            to="/home"
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
                            <li className="relative">
                                <CartIcon/>
                            </li>
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