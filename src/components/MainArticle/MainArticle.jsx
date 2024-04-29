import React from "react";

import "./mainarticle.scss";
import AuthorImage from "@images/author.png";

export default function MainArticle() {
    return (

        <article className="mainarticle">
            <div className="mainarticle__image">
                <img className="" src={AuthorImage} alt="author image" />
            </div>
            <div className="mainarticle__text">
                <h1 className="mainarticle__title">I`m Sergey Demidenko. A Frontend Developer <span>based in Moscow.</span></h1>
                <p>I`m a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

        </article>
    );
}