import {createSlice} from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: 'questions',
    initialState : {
        queue: [], //storing all questions as object with IDs as keys
        answers : [], //storing all answers as object with IDs as keys
        questionId : [], //storing an array of question IDs for easier iteration
    },
    reducers : {
        startQuiz : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNext : (state) => {
            return {
                ...state,
                questionId : state.questionId + 1
            }
        },
        movePrev : (state) => {
            return {
                ...state,
                questionId : state.questionId - 1
            }
        },
        resetAll : () => {
            return {
                queue: [],
                answers : [],
                questionId : 0
            }
        }
    }
})
export const { startQuiz, moveNext, movePrev, resetAll } = questionSlice.actions;

export default questionSlice.reducer;