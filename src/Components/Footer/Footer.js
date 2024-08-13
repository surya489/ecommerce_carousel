import React from "react";

import "./Footer.css";

import Center from "../Center/Center";

const Footer = () => {
    return (
        <Center>
            <div className="footer">
                <div>
                    <h3>Become a Lion &B Rebel Insider</h3>
                    <p>15% welcome gift and much more</p>
                </div>
                <div>
                    <div>
                        <input type="email" placeholder="Email" id="email" name="email" className="email" />
                        <input type="submit" className="submit_bnt" />
                    </div>
                    <p>GDPR Complaint data safety. See<span><a href="/">Privacy Policy</a></span></p>
                </div>
            </div>
        </Center>
    )
}

export default Footer;
