import React from "react";

import "./NavBar.css";
import Center from "../Center/Center";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Center border_bottom className="px_0">
            <div className="navbar">
                <div>
                    <a href="/">Shoup our products</a>
                </div>
                <div className="logo">
                    <img src="" alt="logo" />
                </div>
                <div>
                    <ul className="icons_List">
                        <li>
                            <FontAwesomeIcon icon={faSearch} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHeart} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </li>
                    </ul>
                </div>
            </div>
        </Center>
    )
}

export default NavBar;