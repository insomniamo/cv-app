import React from "react";
import "./menu.scss";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from "@redux/languageSlice.js";

export default function Menu({ classNames }) {

    const lan = useSelector(state => state.language.language);
    const dispatch = useDispatch();
    
    return (
        <div className={`menu__list ${classNames && classNames.menu__list}`}>
            <div className="menu__button" onClick={() => dispatch(changeLanguage())}>
                {lan}
            </div>
            <Link className="menu__button" to="experience" smooth={true} duration={500}>
                {lan === "EN" ? "Experience" : "Опыт"}
            </Link>
            <Link className="menu__button" to="work" smooth={true} offset={-100} duration={500}>
                {lan === "EN" ? "Work" : "Работа"}
            </Link>
            <Link className="menu__button" to="contact" smooth={true} duration={500}>
                {lan === "EN" ? "Contact" : "Связаться"}
            </Link>
        </div>
    );
}
