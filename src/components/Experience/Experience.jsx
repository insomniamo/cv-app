import React from "react";

import "./experience.scss";

import CardSimple from "@components/CardSimple/CardSimple.jsx";

export default function Experience() {
    return (
        <section className="experience">
            <div className="experience__container">
                <h5 className="experience__title">Work Experience</h5>
                <h2 className="experience__subtitle">Companies I have worked for in the past</h2>
                <div className="experience__list">
                    <CardSimple/>
                    <CardSimple/>
                    <CardSimple/>
                </div>
            </div>
        </section>
    );
}