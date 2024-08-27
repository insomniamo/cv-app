import React from "react";
import "./mainarticle.scss";
import AuthorImage from "@images/author.png";
import { useSelector } from 'react-redux';
import getLocalization from "@localization/localization.js";

export default function MainArticle() {
    const lan = useSelector(state => state.language.language);
    const localization = getLocalization('MainArticle', lan);

    return (
        <article className="mainarticle">
            <div className="mainarticle__image">
                <img className="" src={AuthorImage} alt="author" />
            </div>
            <div className="mainarticle__text">
                <h1 className="mainarticle__title">{localization.firstline}<span>{localization.secondline}</span></h1>
                <p>{localization.maintext}</p>
            </div>
        </article>
    );
}
