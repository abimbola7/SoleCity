import React from "react"
import { useNavigate } from "react-router";

const NotFound  = () => {
    const navigate = useNavigate()
    const backToPreviousPage = () => {
        navigate("/SoleCity");
    };
    return (
        <div className="absolute space-y-5 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p
            className="text-3xl"
            >Page does not exist</p> 
            <button
            className="ml-5 py-1 px-3 rounded-md bg-orangeDark relative z-[100000000]"
            onClick={backToPreviousPage}
            >Go Back
            </button>
        </div>
    )
};

export default NotFound;