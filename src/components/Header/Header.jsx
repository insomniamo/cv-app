import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "@icons/Logo.jsx";
import BurgerButton from "@icons/BurgerButton.jsx";
import Menu from "./Menu.jsx";
import "./header.scss";

export default function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsBurgerMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__row">
                    <div className="header__column header__column--logo">
                        <Logo />
                    </div>
                    <Menu />
                    <button className="header__button" onClick={toggleBurgerMenu}>
                        <BurgerButton />
                    </button>
                </div>
                {isBurgerMenuOpen && <Menu classNames={{ menu__list: "menu__list--mini" }} />}
            </div>
        </header>
    );
}
