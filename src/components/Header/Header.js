import React, { Fragment } from "react";
import ReactDOM from "react-dom"
import { Routes, Route, Outlet } from "react-router";
import MainHeader from "../MainHeader/MainHeader";
import Hero from "../Hero/Hero";


const Header = () => {
    return (
        <Fragment>
            <div className="relative">
                <MainHeader/>
            </div>
        </Fragment>
    )
};

export default Header