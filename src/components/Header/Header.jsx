import "./header.scss";
import React from "react";
import { Link } from "react-scroll";
import Logo from "@icons/Logo.jsx";
import BurgerButton from "@icons/BurgerButton.jsx";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__row">
                    <div className="header__column header__column--logo">
                        <Logo />
                    </div>
                    <div className="header__column">
                        <div className="header__menu">
                            <Link className="header__menu-button" to="experience" smooth={true} duration={500}>
                                Experience
                            </Link>
                            <Link className="header__menu-button" to="work" smooth={true} offset={-100} duration={500}>
                                Work
                            </Link>
                            <Link className="header__menu-button" to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </div>
                        <button className="header__button">
                            <BurgerButton />
                        </button>
                    </div>  
                </div>
            </div>
        </header>
    );
}
