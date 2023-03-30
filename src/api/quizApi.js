import HTTP from "./"
import {useMutation, useQuery} from "react-query";

const getQuizez = () => HTTP.get("/quiz/questions")
    .then((response) => response.data)
    .catch((error) => console.log(error.message));



const createQuizJson = (quizForm) =>
    HTTP.post("/quiz/create", { ...quizForm, question: quizForm.quizQuestion})
    .then((response) => response.data);




const useQuiz = () => {
    const context = useQuery("getQuizez", getQuizez);
    return { ...context, quizez: context.data }
};

const useCreateQuizForm = (config) => {
    const mutation = useMutation(createQuizJson, config);
    return mutation.mutateAsync;
};

export {useQuiz, useCreateQuizForm}
