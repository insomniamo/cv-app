const localization = {
    Experience: {
        EN:  {
            title: "Work Experience",
            subtitle: "Companies I have worked for in the past",
        },
        RU: {
            title: "Опыт работы",
            subtitle: "Компании, в которых я работал",
        }
    },
    Form: {
        EN:  {
            title: "Let’s get started",
            description: "Now that you know a lot about me, let me know if you are interested to work with me.",
            name: "Name",
            email: "Email",
            message: "Message",
        },
        RU: {
            title: "Давайте начнем!",
            description: "Теперь, когда вы уже достаточно много обо мне знаете, дайте мне знать, если Вы хотите со мной работать.",
            name: "Имя",
            email: "Email",
            message: "Сообщение",
        }
    },
    WideArticle: {
        EN:  {
            title: "Philosophy & values",
            description: "Believing in continual self-improvement and striving for excellence, my philosophy revolves around both drawing inspiration and inspiring others, while consistently acting with honesty and integrity. I value teamwork and believe that mutual respect and support form the bedrock of successful collaborations. Acknowledging the significance of innovation and a commitment to lifelong learning, I aim for growth not only in professional skills but also in personal development. Making a positive impact and fostering constructive change in the world through my endeavors and interactions is paramount to me."
        },
        RU: {
            title: "Философия & ценности",
            description: "Я стремлюсь к самосовершенствованию и постоянно работаю над собой. В своей работе я опираюсь на честность и принципы, стараясь вдохновлять и поддерживать других. Я верю в силу командной работы и считаю, что успешное сотрудничество строится на взаимном уважении и поддержке. Осознавая важность инноваций и обучения, я стараюсь развивать не только профессиональные навыки, но и личные качества. Для меня важно вносить позитивные изменения в мир через свои действия и отношения с окружающими."
        }
    },
    SkillSet: {
        EN:  {
            title: "Hard skills",
            description: "I use cutting-edge technologies to build my projects.",
        },
        RU: {
            title: "Hard скиллы",
            description: "Я использую передовые технологии для создания моих проектов.",
        }
    },
    MainArticle: {
        EN:  {
            firstline: "I`m Sergey Demidenko. A Frontend Developer ",
            secondline: "based in Moscow.",
            maintext: "I`m a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        },
        RU: {
            firstline: "Я Сергей Демиденко. Frontend Разработчик ",
            secondline: "проживаю в Москве.",
            maintext: "Я frontend разработчик с неимоверным интересом упрощения и оптимизации повседневных задач. Я стараюсь идти в ногу с технологиями и лучшими практиками, всегда ищу что-то новое, чему можно научиться."
        }
    }
}

const getLocalization = function (component, lan) {

    if (lan === 'EN') {
        return localization[component].EN
        
    } else if (lan === 'RU') {
        return localization[component].RU
    }
}

export default getLocalization