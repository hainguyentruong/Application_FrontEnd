import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <ul className="nav d-flex justify-content-between shadow-sm mb-2">
                
               <li className="nav-item">
                    <NavLink className={"nav-link"} aria-current="page" to={"/"}>
                        CONFIRMED
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} aria-current="page" to={"/deaths"}>
                        DEATHS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={"nav-link"} aria-current="page" to={"/recovered"}>
                        RECOVERED
                    </NavLink>
                </li>
                              
            </ul>
        </div>
    )
}

export default Header;