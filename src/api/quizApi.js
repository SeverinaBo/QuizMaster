import HTTP from "./index"
import {useMutation, useQuery} from "react-query";

// http://localhost:8080/quiz/all
const getQuizez = () => HTTP.get("/quiz/all")
    .then(response => response.data)

// http://localhost:8080/quiz/create
const createQuizForm = (quizForm) => HTTP.post("/quiz", quizForm)

const createQuizJson = (quizForm) => HTTP.post("/quiz", {...quizForm, question: quizForm.quizQuestion})
    .then(response => new Promise((resolve) => {
        setTimeout(() => resolve(response.data), 3000)
    }))

// custom hook(useQuiz) to fetch quizzez from backend
const useQuiz = () => {
    const context = useQuery('getQuizez', getQuizez)
    return {...context, quizez: context.data}
}

const useCreateQuizForm = (config) => {
    const mutation = useMutation(createQuizJson, config)
    return mutation.mutateAsync
}

export { createQuizForm, useQuiz, useCreateQuizForm }