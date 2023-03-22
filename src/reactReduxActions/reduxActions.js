
import { createSlice, configureStore } from "@reduxjs/toolkit";
const createState = (quizez) => {
    return { quizez: quizez };
};
const initialState = createState([]);

const quizezSlice = createSlice({
    name: "quizez",
    initialState: initialState,
    reducers: {
        addQuestion(state, action) {
            const currentQuestions = [...state.quizez];
            const existingQuestions = currentQuestions.find((quz) => quz.id === action.payload.id);

            if (existingQuestions) {
                existingQuestions.quantity++;
            } else {
                existingQuestions.push({...action.payload, quantity: 1});
            }

            state.quizez = currentQuestions;
        },
        removeQuestion(state, action) {
            const currentQuestions = [...state.quizez];
            const existingQuestions = currentQuestions.find((quiz) => quiz.id === action.payload.id);

            if (existingQuestions) {
                existingQuestions.quantity--;
            }

            state.quizez = currentQuestions;
        }
        },
    });



    const reduxStore = configureStore({
            reducer: quizezSlice.reducer,
        });

        export default reduxStore;
        export const reduxActions = quizezSlice.actions;