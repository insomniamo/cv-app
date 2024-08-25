import React, { useRef, useEffect } from "react";
import "./widearticle.scss";
import photo from "@images/photo.png";
import { useSelector } from 'react-redux';
import shave from "shave";

export default function WideArticle() {
    const lan = useSelector(state => state.language.language);
    const infoEn = {
        title: "Philosophy & values",
        description: "Believing in continual self-improvement and striving for excellence, my philosophy revolves around both drawing inspiration and inspiring others, while consistently acting with honesty and integrity. I value teamwork and believe that mutual respect and support form the bedrock of successful collaborations. Acknowledging the significance of innovation and a commitment to lifelong learning, I aim for growth not only in professional skills but also in personal development. Making a positive impact and fostering constructive change in the world through my endeavors and interactions is paramount to me."
    }
    const infoRu = {
        title: "Философия & ценности",
        description: "Я стремлюсь к самосовершенствованию и постоянно работаю над собой. В своей работе я опираюсь на честность и принципы, стараясь вдохновлять и поддерживать других. Я верю в силу командной работы и считаю, что успешное сотрудничество строится на взаимном уважении и поддержке. Осознавая важность инноваций и обучения, я стараюсь развивать не только профессиональные навыки, но и личные качества. Для меня важно вносить позитивные изменения в мир через свои действия и отношения с окружающими."
    }

    const info = lan === 'EN' ? infoEn : infoRu;

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
    }, [info.description]);

    return (
        <article className="widearticle">
            <div className="widearticle__text">
                <h2 className="widearticle__title">{info.title}</h2>
                <p ref={descriptionRef} className="widearticle__description">{info.description}</p>
            </div>
            <div className="widearticle__image">
                <img src={photo} alt={info.title} />
            </div>
        </article>
    );
}
