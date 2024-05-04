import React, { useRef, useEffect } from "react";
import "./widearticle.scss";
import shave from "shave";

export default function WideArticle({ title = "404", description = "404", image}) {
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
    }, [description]);

    return (
        <article className="widearticle">
            <div className="widearticle__text">
                <h2 className="widearticle__title">{title}</h2>
                <p ref={descriptionRef} className="widearticle__description">{description}</p>
            </div>
            <div className="widearticle__image">
                <img src={image} alt={title} />
            </div>
        </article>
    );
}
