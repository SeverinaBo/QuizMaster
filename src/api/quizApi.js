import HTTP from "./"
import {useMutation, useQuery} from "react-query";

// http://localhost:8080/quiz/all
const getQuizez = () => HTTP.get("/quiz/all")
    .then((response) => response.data)
    .catch((error) => console.log(error.message));


// http://localhost:8080/quiz/create
/*const createQuizForm = (quizForm) => HTTP.post("/quiz", quizForm)*/

// http://localhost:8080/quiz
const createQuizJson = (quizForm) =>
    HTTP.post("/quiz", { ...quizForm, name: quizForm.quizQuestion})
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

export {useQuiz, useCreateQuizForm }