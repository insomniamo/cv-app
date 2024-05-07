import React, { useState, useEffect } from "react";
import axios from "axios";
import "./experience.scss";
import CardSimple from "@components/CardSimple/CardSimple.jsx";

export default function Experience() {
    const [data, setData] = useState([]);

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
                <h5 className="experience__title">Work Experience</h5>
                <h2 className="experience__subtitle">Companies I have worked for in the past</h2>
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