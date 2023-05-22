import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <React.Fragment>
            <button className="absolute -right-0 -top-1 py-2 px-4 z-40 bg-neutral-600 cursor-pointer">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type="text" className="focus:outline-none pl-2 pr-16 py-2 text-md font-light bg-neutral-600 border-none focus:border-none outline-none" placeholder="Search for shoes"/>
        </React.Fragment>
    )
}

export default SearchBar