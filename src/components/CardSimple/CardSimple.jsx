import React from "react";
import "./cardsimple.scss";

export default function CardSimple({ label, imgPath, imgAlt, companyName, cardTitle, cardDescription, companyColor }) {
    const hasImage = imgPath !== undefined && imgPath !== null;
    return (
        <div className="card__item">
            <label>{label}</label>
            <div className={`card__image ${!hasImage ? 'card__image--noimage' : ''}`}>
                <img src={imgPath} alt={imgAlt} />
            </div>
            <h3 className={`card__title ${hasImage ? 'card__title--imaged' : 'card__title--noimage'}`}>
                <span style={{ color: companyColor }}>{companyName}</span>{cardTitle}
            </h3>
            <p className="card__description">{cardDescription}</p>
        </div>
    );
}
