import React from "react";
import MainArticle from "@components/MainArticle/MainArticle.jsx";
import Experience from "@components/Experience/Experience.jsx";
import WideArticle from "@components/WideArticle/WideArticle.jsx";
import photo from "@images/photo.png";
import "./Content.scss";

export default function Content(){
    return (
        <main className="content">
          <MainArticle />
          <div className="content__container">
            <Experience />
          </div>
          <WideArticle 
            title="Philosophy & values"
            description="Believing in continual self-improvement and striving for excellence, my philosophy revolves around both drawing inspiration and inspiring others, while consistently acting with honesty and integrity. I value teamwork and believe that mutual respect and support form the bedrock of successful collaborations. Acknowledging the significance of innovation and a commitment to lifelong learning, I aim for growth not only in professional skills but also in personal development. Making a positive impact and fostering constructive change in the world through my endeavors and interactions is paramount to me."
            image={photo}
          />
        </main>
    );
}