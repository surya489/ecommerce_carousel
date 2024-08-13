import React from "react";

import './Left.css';

import boyWithHood from '../../assets/images/boy_with_hood.png'

const Left = ({ className }) => {
    return (
        <div className={`${className ? className : ''} left`}>
            <img src={boyWithHood} alt="main" className="d_block" />
        </div>
    )
}

export default Left;