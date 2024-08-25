import React from "react";
import "./mainarticle.scss";
import AuthorImage from "@images/author.png";
import { useSelector } from 'react-redux';

export default function MainArticle() {

    const lan = useSelector(state => state.language.language);

    const infoEn = {
        firstline: "I`m Sergey Demidenko. A Frontend Developer ",
        secondline: "based in Moscow.",
        maintext: "I`m a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
    }

    const infoRu = {
        firstline: "Я Сергей Демиденко. Frontend Разработчик ",
        secondline: "проживаю в Москве.",
        maintext: "Я frontend разработчик с неимоверным интересом упрощения и оптимизации повседневных задач. Я стараюсь идти в ногу с технологиями и лучшими практиками, всегда ищу что-то новое, чему можно научиться."
    }

    const info = lan === 'EN' ? infoEn : infoRu;

    return (
        <article className="mainarticle">
            <div className="mainarticle__image">
                <img className="" src={AuthorImage} alt="author" />
            </div>
            <div className="mainarticle__text">
                <h1 className="mainarticle__title">{info.firstline}<span>{info.secondline}</span></h1>
                <p>{info.maintext}</p>
            </div>
        </article>
    );
}
