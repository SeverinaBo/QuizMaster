import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { language: "en", question: "Question", optionA: "Option A",
                        optionB: "Option B", optionC: "Option C", optionD: "Option D",
                        correctAnswr: "Correct Answer", about: "About", main: "Main",
                        createQ:"Create game", playQ:"Play a game", allQuizez:"All Quizez" , login: "Login",
                        editOrRemove:"Edit/Remove", addNewQuestion:"Add new question", welcome:"WELCOME TO QUIZMASTERS"};

const translationLt = { language: "lt", question: "Klausimas", optionA: "Variantas A",
                        optionB: "Variantas B", optionC: "Variantas C", optionD: "Variantas C",
                        correctAnswr: "Teisingas atsakymas", about: "Apie", home: "Pagrindinis",
                        createQ:"Sukurti klausimyną", playQ:"Žaisti",allQuizez:"Visi klausimynai", login: "Prisijungti",
                        editOrRemove:"Redaguoti/Trinti", addNewQuestion:"Pridėti naują klausimą", welcome:"SVEIKI ATVYKĘ Į QUIZMASTERS"  };

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