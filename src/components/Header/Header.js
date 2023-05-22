import React, { Fragment } from "react";
import ReactDOM from "react-dom"
import { Routes, Route } from "react-router";
import MainHeader from "../components/MainHeader/MainHeader";
import Hero from "../components/Hero/Hero";


const Header = () => {
    return (
        <Fragment>
            <div className="relative">
                <MainHeader/>
                <Routes>
                    <Route
                    path="/home"
                    element={<Hero/>}
                    />
                </Routes>
                {/* <div className="absolute bottom-0 flex-col px-2 space-y-5 transform right-5 text-white">
                    <div className=""><i class="fa-brands fa-facebook-f"></i></div>
                    <div className=""><i class="fa-brands fa-twitter"></i></div>
                    <div className=""><i class="fa-brands fa-instagram"></i></div>
                </div> */}
            </div>
        </Fragment>
    )
};

export default Header