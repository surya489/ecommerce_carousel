import React from "react";
import './Right.css';
import Carousel from "../Carousel/Carousel";

import hoodie from '../../assets/images/hoodie.png';
import hoodie_1 from '../../assets/images/hoodie_1.png';
import hoodie_2 from '../../assets/images/hoodie_2.png';

const Right = ({ className }) => {
    const slides = [
        {
            img: hoodie,
            product_title: 'asdf',
            price: "40 USD"
        },
        {
            img: hoodie_1,
            product_title: "df",
            price: "20 USD"
        },
        {
            img: hoodie_2,
            product_title: "df",
            price: "20 USD"
        }
    ];

    return (
        <div className={`${className ? className : ''} right`}>
            <div className="title_wrap">
                <h1 className="heading">Complete the feeling</h1>
                <p className="text">For a fierce and elegant look this spring</p>
            </div>
            <Carousel slides={slides} />
        </div>
    );
}

export default Right;
