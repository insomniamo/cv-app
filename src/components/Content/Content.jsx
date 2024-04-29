import React from "react";
import MainArticle from "@components/MainArticle/MainArticle.jsx";
import "./Content.scss";

export default function Content(){
    return (
        <main className="content">
          <MainArticle />
          <div className="content__container">

          </div>
        </main>
    );
}