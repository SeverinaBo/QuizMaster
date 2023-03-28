import HTTP from "./"
import {useMutation, useQuery} from "react-query";

import axios from "axios";

// http://localhost:8080/quiz/all
const getQuizez = () => HTTP.get("/quiz/questions")
    .then((response) => response.data)
    .catch((error) => console.log(error.message));

//need to use this somewhere
const useDelQuiz = () => {
    const deleteQuiz = async (id) => {
        const response = await HTTP.delete(`/quiz/question/${id}`);
        return response.data;
    };

    return deleteQuiz;
};


// http://localhost:8080/quiz/create
const createQuizForm = (quizForm) => HTTP.post("/quiz/create", quizForm)

// http://localhost:8080/quiz
const createQuizJson = (quizForm) =>
    HTTP.post("/quiz/create", { ...quizForm, question: quizForm.quizQuestion})
    .then((response) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(response.data), 5000);
            })
    );


// custom hook(useQuiz) to fetch quizzez from backend
const useQuiz = () => {
    const context = useQuery("getQuizez", getQuizez);
    return { ...context, quizez: context.data }
};

const useCreateQuizForm = (config) => {
    const mutation = useMutation(createQuizJson, config);
    return mutation.mutateAsync;
};

export {
    createQuizForm, useQuiz, useCreateQuizForm,useDelQuiz}
