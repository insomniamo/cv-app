import "./header.scss";
import React from "react";
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
                        <ul className="header__menu">
                            <li>Experirnce</li>
                            <li>Work</li>
                            <li>Contact</li>
                        </ul>
                        
                        <button className="header__button">
                            <BurgerButton />
                        </button>
                    </div>  
                </div>
            </div>
        </header>
    );
}
