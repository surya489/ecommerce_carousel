import React from "react";

import './Left.css';

// import boyWithHood from '../../assets/images/boy_with_hood.png';
import hoodie from '../../assets/images/full.png'

const Left = ({ className }) => {
    return (
        <div className={`${className ? className : ''} left`}>
            <img src={hoodie} alt="main" className="d_block" />
        </div>
    )
}

export default Left;