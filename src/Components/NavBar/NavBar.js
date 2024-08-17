import React from "react";

import "./NavBar.css";
import Center from "../Center/Center";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
    return (
        <div className="border_bottom">
            <Center className="py_0">
                <div className="navbar">
                    <div>
                        <a href="/">Shoup our products</a>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
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
        </div>
    )
}

export default NavBar;