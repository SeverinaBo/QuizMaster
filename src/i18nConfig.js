import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { language: "en", qQuestion: "Question", qOptionA: "Option A",
                        qOptionB: "Option B", qOptionC: "Option C", qOptionD: "Option D",
                        qCorrectAnswr: "Correct Answer", about: "About", main: "Main",
                        createQ:"Create game", playQ:"Play a game", allQuizez:"All Quizez" , login: "Login",
                        qEditOrRemove:"Edit/Remove", qAddNewQuestion:"Add new question", welcome:"WELCOME TO QUIZMASTERS"};

const translationLt = { language: "lt", qQuestion: "Klausimas", qOptionA: "Variantas A",
    qOptionB: "Variantas B", qOptionC: "Variantas C", qOptionD: "Variantas C",
                        qCorrectAnswr: "Teisingas atsakymas", about: "Apie", home: "Pagrindinis",
                        createQ:"Sukurti klausimyną", playQ:"Žaisti",allQuizez:"Visi klausimynai", login: "Prisijungti",
    qEditOrRemove:"Redaguoti/Trinti", qAddNewQuestion:"Pridėti naują klausimą", welcome:"SVEIKI ATVYKĘ Į QUIZMASTERS"  };

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        lt: { translation: translationLt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export { i18n };