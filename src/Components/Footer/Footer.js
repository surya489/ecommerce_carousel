import React from "react";

import "./Footer.css";

import Center from "../Center/Center";
import Button from "../Button/Button";
const Footer = () => {
    return (
        <Center>
            <div className="footer">
                <div className="col_50 footer_left">
                    <h3>Become a Lion &B Rebel Insider</h3>
                    <p>15% welcome gift and much more</p>
                </div>
                <div className="col_50 footer_right">
                    <div className="d_flex gap_15">
                        <div className="col_80">
                            <input type="email" placeholder="Email" id="email" name="email" className="email" />
                        </div>
                        <div className="col_20">
                            <Button isSubmit btnValue='Join Now'></Button>
                        </div>
                    </div>
                    <p>GDPR Complaint data safety. See<span><a href="/">Privacy Policy</a></span></p>
                </div>
            </div>
        </Center>
    )
}

export default Footer;
