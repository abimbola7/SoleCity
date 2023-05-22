import React from "react";
import "./Hamburger.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../../store/ui-slice";

const Hamburger = (props) => {
    const dispatch = useDispatch();
    const hamburgerToggle = useSelector(state=>state.ui.hamburgerIsToggled);
    const onHamburgerToggle = ()=> {
        dispatch(toggleActions.hamburgerToggler());
    };
    console.log(hamburgerToggle);
    return (
        <button 
        onClick={onHamburgerToggle}
        className={`hamburger block ${props.className}`}>
            <span className={`hamburgertop ${hamburgerToggle && 'open'}`}></span>
            <span className={`hamburgerbottom ${hamburgerToggle && 'open'}`}></span>
        </button>
    )
};

export default Hamburger;