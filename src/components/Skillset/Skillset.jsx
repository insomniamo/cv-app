import React, { useState, useEffect } from "react";
import axios from "axios";

import CardSimple from "@components/CardSimple/CardSimple.jsx";
import { useSelector } from 'react-redux';

import "./skillset.scss";

export default function MainArticle() {
    const [data, setData] = useState([]);
    const lan = useSelector(state => state.language.language);

    const infoEn = {
        title: "Hard skills",
        description: "I use cutting-edge technologies to build my projects.",
    };
    const infoRu = {
        title: "Hard скиллы",
        description: "Я использую передовые технологии для создания моих проектов.",
    };

    const info = lan === 'EN' ? infoEn : infoRu;

    useEffect(() => {
        axios.get("https://api.myjson.online/v1/records/d039788a-cfd5-431b-b351-ae6eb48c07c4")
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <article className="skillset">
            <div className="skillset__preview">
                <h2 className="skillset__title">{info.title}</h2>
                <p className="skillset__description">{info.description}</p>
            </div>
            <div className="skillset__list">
                {data.map(item => (
                    <CardSimple
                        key={item.id}
                        imgPath={item.image}
                        imgAlt={item.title}
                        cardTitle={item.title}
                        cardDescription={item.description}
                    />
                ))}
            </div>
        </article>
    );
}
