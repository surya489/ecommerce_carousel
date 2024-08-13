import React from "react";

import './Right.css';

import cap from "../../assets/images/cap_white.png";
import hoodBack from '../../assets/images/boy_with_hood_back.png';

const Right = ({ className }) => {
    return (
        <div className={`${className ? className : ''} right`}>
            <div>
                <h1>Complete the feeling</h1>
                <p>For a fierce and elegant look this sprimng</p>
            </div>
            <div>
                <div>
                    <div>
                        <div className="d_flex gap_20">
                            <div className="bg_grey">
                                <div className="slide_img">
                                    <img src={cap} alt="cap" />
                                </div>
                                <div>
                                    <p className="product_name">cap</p>
                                    <p className="price">40 USD</p>
                                </div>
                            </div>
                            <div className="bg_grey">
                                <div className="slide_img">
                                    <img src={hoodBack} alt="Slide 1" />
                                </div>
                                <div>
                                    <p className="product_name">cap</p>
                                    <p className="price">40 USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right;