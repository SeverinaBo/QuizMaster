
import { createSlice, configureStore } from "@reduxjs/toolkit";
const createState = (quizez) => {
    return { quizez: quizez };
};

const initialState = createState([]);

const quizezSlice = createSlice({
    name: "quizez",
    initialState: initialState,
    reducers: {
        deleteQuestion: (state = [], action) =>
{
    state.action.payload(q => q.id !== action.payload);

        },
    },
});




    const reduxStore = configureStore({
            reducer: quizezSlice.reducer,
        });

        export default reduxStore;
        export const {deleteQuestion} = quizezSlice.actions;