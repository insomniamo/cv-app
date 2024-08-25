import React, { useState, useEffect } from "react";
import axios from "axios";
import "./experience.scss";
import CardSimple from "@components/CardSimple/CardSimple.jsx";
import { useSelector } from 'react-redux';

export default function Experience() {
    const lan = useSelector(state => state.language.language);
    const [data, setData] = useState([]);

    const infoEn = {
        title: "Work Experience",
        subtitle: "Companies I have worked for in the past",
    };
    const infoRu = {
        title: "Опыт работы",
        subtitle: "Компании, в которых я работал",
    };

    const info = lan === 'EN' ? infoEn : infoRu;

    useEffect(() => {
        axios.get("https://api.myjson.online/v1/records/0833104b-932f-499c-ae3d-3b3c2a3da3c2")
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <section className="experience">
            <div className="experience__container">
                <h5 className="experience__title">{info.title}</h5>
                <h2 className="experience__subtitle">{info.subtitle}</h2>
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