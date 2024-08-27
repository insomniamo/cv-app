import React, { useState, useEffect } from "react";
import axios from "axios";
import "./experience.scss";
import CardSimple from "@components/CardSimple/CardSimple.jsx";
import { useSelector } from 'react-redux';
import getLocalization from "@localization/localization.js";

export default function Experience() {

    const lan = useSelector(state => state.language.language);
    const localization = getLocalization('Experience', lan);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            let url = "";

            if (lan === 'EN') {
                url = "https://api.myjson.online/v1/records/b00a78e9-3f43-4da7-aa95-03f03fa7c58c";
            } else if (lan === 'RU') {
                url = "https://api.myjson.online/v1/records/fc8635be-32b5-4467-925d-2f6b6d581ddb";
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
        <section className="experience">
            <div className="experience__container">
                <h5 className="experience__title">{localization.title}</h5>
                <h2 className="experience__subtitle">{localization.subtitle}</h2>
                <div className="experience__list">
                    {data.map(item => (
                        <CardSimple
                            key={item.id}
                            label={item.id.toString()}
                            companyName={item.company + ", "}
                            cardTitle={item.position}
                            cardDescription={item.description}
                            companyColor={item.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}