import React from "react";

import './Center.css';

const Center = ({ children, className, border_bottom }) => {
    return (
        <div className={`${className ? className : ''} ${border_bottom ? 'border_bottom' : ''} center`}>
            {children}
        </div>
    )
}

export default Center;