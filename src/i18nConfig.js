import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn
    = { language: "en", qQuestion: "Question", qOption1: "Option 1",
                        qOption2: "Option 2", qOption3: "Option 3", qOption4: "Option 4",
                        qCorrectAnswr: "Correct Answer", about: "About", main: "Main",
                        createQ:"Create game", playQ:"Play a game", allQuizez:"All Quizez" , login: "Log in", register:"Register", noAccount:"Don't have an account?", signInToAcc:"Sign in to your account",
                        qEdit:"Edit", qAddNewQuestion:"Add new question", welcome:"WELCOME TO QUIZMASTERS", btnNext:"Next",
    aboutPage:" A game where you can create your own quizez in any topic. Questions and answer options are yours to choose.Try it alone or with friends.Create and play.", whatIsQM:"What is QuizMasters?",
finAndPlay:"Finish and play"};

const translationLt
    = { language: "lt", qQuestion: "Klausimas", qOption1: "Variantas 1",
    qOption2: "Variantas 2", qOption3: "Variantas 3", qOption4: "Variantas 4",
    qCorrectAnswr: "Teisingas atsakymas", about: "Apie", home: "Pagrindinis",
    createQ:"Sukurti klausimyną", playQ:"Žaisti",allQuizez:"Visi klausimynai", login: "Prisijungti",register:"Prisiregistruok", noAccount:"Neturi paskytos?",
    qEdit:"Redaguoti", qAddNewQuestion:"Pridėti naują klausimą", welcome:"SVEIKI ATVYKĘ Į QUIZMASTERS", btnNext:"Sekantis", signInToAcc:"Prisijunk į savo paskyrą",
    aboutPage:" Žaidimas, kuriame gali kurti savo klausimėlius bet kokia tema. Klausimai ir atsakymai tavo nuožiūra.Išbandyk vienas arba su draugais. Kurk ir žaisk.", whatIsQM:"Kas yra QuizMasters? \n(Klausimėlių valdovai)",
    finAndPlay:"Pabaigti ir žaisti"};

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

