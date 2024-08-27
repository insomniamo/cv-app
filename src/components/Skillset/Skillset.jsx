import React, { useState, useEffect } from "react";
import axios from "axios";

import CardSimple from "@components/CardSimple/CardSimple.jsx";
import getLocalization from "@localization/localization.js";
import { useSelector } from 'react-redux';

import "./skillset.scss";

export default function SkillSet() {
    const [data, setData] = useState([]);
    const lan = useSelector(state => state.language.language);
    const localization = getLocalization('SkillSet', lan);

    useEffect(() => {
        const fetchData = () => {
            let url = "";

            if (lan === 'EN') {
                url = "https://api.myjson.online/v1/records/8497a2d9-2bc4-4ec5-a74a-c72948d38f65";
            } else if (lan === 'RU') {
                url = "https://api.myjson.online/v1/records/6cd7951a-f9bb-454e-b0e0-8c02310c91d5";
            }

            axios.get(url)
                .then(response => {
                    setData(response.data.data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        };
        fetchData();
    }, [lan]);

    return (
        <article className="skillset">
            <div className="skillset__preview">
                <h2 className="skillset__title">{localization.title}</h2>
                <p className="skillset__description">{localization.description}</p>
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
