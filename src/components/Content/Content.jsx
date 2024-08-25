import React from "react";
import { Element } from 'react-scroll';
import MainArticle from "@components/MainArticle/MainArticle.jsx";
import Experience from "@components/Experience/Experience.jsx";
import WideArticle from "@components/WideArticle/WideArticle.jsx";
import Skillset from "@components/Skillset/Skillset.jsx";
import Form from "@components/Form/Form.jsx";
import "./Content.scss";

export default function Content({id}){
    return (
        <main className="content">
          <MainArticle />
          <div className="content__container">
            <Element name="work">
              <Experience />
            </Element>
          </div>
          <WideArticle/>
          <div className="content__container">
            <Element name="experience">
              <Skillset />
            </Element>
          </div>
          <Element name="contact">
            <Form id="form"/>
          </Element>
        </main>
    );
}