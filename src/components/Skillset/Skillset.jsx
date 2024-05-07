import React, { useState, useEffect } from "react";
import axios from "axios";

import CardSimple from "@components/CardSimple/CardSimple.jsx";

import "./skillset.scss";

export default function MainArticle() {
    const [data, setData] = useState([]);

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
                <h2 className="skillset__title">Hard skills</h2>
                <p className="skillset__description">I use cutting-edge technologies to build my projects.</p>
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
