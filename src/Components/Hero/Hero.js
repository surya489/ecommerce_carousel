import React from "react";

import './Hero.css';

import Center from "../Center/Center";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Hero = () => {
    return (
        <Center>
            <div className="hero gap_20 d_flex">
                <Left className="col_50" />
                <Right className="col_50" />
            </div>
        </Center>
    )
}

export default Hero;