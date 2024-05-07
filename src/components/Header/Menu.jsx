import React from "react";
import "./menu.scss";
import { Link } from "react-scroll";

export default function Menu({ classNames }) {
    return (
        <div className={`menu__list ${classNames && classNames.menu__list}`}>
            <Link className="menu__button" to="experience" smooth={true} duration={500}>
                Experience
            </Link>
            <Link className="menu__button" to="work" smooth={true} offset={-100} duration={500}>
                Work
            </Link>
            <Link className="menu__button" to="contact" smooth={true} duration={500}>
                Contact
            </Link>
        </div>
    );
}
