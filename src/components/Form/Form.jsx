import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import "./form.scss";

export default function Form() {
    const lan = useSelector(state => state.language.language);
    const form = useRef();

    const infoEn = {
        title: "Let’s get started",
        description: "Now that you know a lot about me, let me know if you are interested to work with me.",
        name: "Name",
        email: "Email",
        message: "Message",
    }
    const infoRu = {
        title: "Давайте начнем!",
        description: "Теперь, когда вы уже достаточно много обо мне знаете, дайте мне знать, если Вы хотите со мной работать.",
        name: "Имя",
        email: "Email",
        message: "Сообщение",
    }
    const info = lan === 'EN' ? infoEn : infoRu;

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        emailjs
            .sendForm('service_j5xt3vy', 'template_e21o8un', form.current, {
                publicKey: '7saDuFTTY9McP22y8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="form">
            <div className="form__info">
                <h2 className="form__title">
                    {info.title}
                </h2>
                <p className="form__description">
                    {info.description}
                </p>
            </div>

            <form className="form__container-input" ref={form} onSubmit={sendEmail}>
                <label className="form__label">{info.name}</label>
                <input
                    className="form__input"
                    type="text"
                    name="user_name"
                    required
                />
                <label className="form__label">{info.email}</label>
                <input
                    className="form__input"
                    type="email"
                    name="user_email"
                    required
                />
                <label className="form__label">{info.message}</label>
                <textarea
                    className="form__textarea"
                    name="message"
                    required
                />
                <input className="form__button" type="submit" value={info.title}/>
            </form>
        </div>
    );
}
