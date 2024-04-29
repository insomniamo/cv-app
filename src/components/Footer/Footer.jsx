import React from "react";

import "./footer.scss";
import Logo from "@icons/Logo.jsx";
import Socials from "@components/Socials/Socials.jsx";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <span>Copyright © 2024 <b>Sergey Demidenko.</b> All rights reserved</span>
                    <div className="contact__box">
                        <div className="contact__logo">
                            <Logo />
                        </div>
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    );
}