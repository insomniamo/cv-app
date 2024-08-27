import React, { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import getLocalization from "@localization/localization.js";
import "./widearticle.scss";
import photo from "@images/photo.png";
import shave from "shave";

export default function WideArticle() {
    const lan = useSelector(state => state.language.language);
    const localization = getLocalization('WideArticle', lan);

    const descriptionRef = useRef(null);

    useEffect(() => {
        const descriptionElement = descriptionRef.current;
        const handleResize = () => {
            if (descriptionElement.scrollHeight > 250) {
                shave(descriptionElement, 250);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [localization.description]);

    return (
        <article className="widearticle">
            <div className="widearticle__text">
                <h2 className="widearticle__title">{localization.title}</h2>
                <p ref={descriptionRef} className="widearticle__description">{localization.description}</p>
            </div>
            <div className="widearticle__image">
                <img src={photo} alt={localization.title} />
            </div>
        </article>
    );
}
