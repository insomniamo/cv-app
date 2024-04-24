import React from "react";

import GitHubLogo from "@icons/GitHubLogo.jsx";
import TelegramLogo from "@icons/TelegramLogo.jsx";
import Vklogo from "@icons/Vklogo.jsx";

import "./Socials.scss";

export default function Socials(){

    return (
        <div className="socials">
            <div className="socials__item">
                <a className="socials__link" target="_blank" href="https://github.com/insomniamo">
                    <GitHubLogo />
                </a>
            </div>
            <div className="socials__item">
                <a className="socials__link" target="_blank" href="https://t.me/insomniamo">
                    <TelegramLogo />
                </a>
            </div>
            <div className="socials__item">
                <a className="socials__link" target="_blank" href="https://vk.com/warriorfromwar">
                    <Vklogo />
                </a>
            </div>
    </div>
    )
}