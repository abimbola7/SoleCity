import React from "react";
import spinner from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
    return (
        <div className="w-[80%] mx-auto text-center">
            <div 
            className={spinner.spinner}
            />
        </div>
    )
};

export default LoadingSpinner;