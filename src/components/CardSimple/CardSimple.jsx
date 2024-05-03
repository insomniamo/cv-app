import React from "react";
import "./cardsimple.scss";

export default function CardSimple({ label = "01", imgPath, imgAlt, companyName = "404", cardTitle = ", 404", cardDescription = "404", companyColor = "#3cc74e" }) {
    return (
        <div className="card__item">
            <label>{label}</label>
            <div className="card__image">
                <img src={imgPath} alt={imgAlt} />
            </div>
            <h3 className="card__title">
                <span style={{ color: companyColor  }}>{companyName}</span>{cardTitle}
            </h3>
            <p className="card__description">{cardDescription}</p>
        </div>
    );
}
