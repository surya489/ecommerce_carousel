import React from "react";

import './Button.css';

const Button = ({ children, isLink, isBtn, link, isSubmit, btnValue, className }) => {
    if (isLink) {
        return (
            <a href={link}>
                {children}
            </a>
        )
    }
    if (isSubmit) {
        return (
            <div className="submit_btn">
                <input type="submit" value={btnValue} className={`${className ? className : ''}`} />
            </div>
        )
    }

    return (
        <button>
            {children}
        </button>
    )
}

export default Button;