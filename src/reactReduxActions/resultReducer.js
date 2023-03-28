import { createSlice } from "@reduxjs/toolkit"

export const resultSlice = createSlice({
    name: 'result',
    initialState : {
        playerId : null,
        result : []
    },
    reducers : {
        setPlayerId : (state, action) => {
            state.playerId = action.payload
        },
        pushResult : (state, action) => {
            state.result.push(action.payload)
        },
        updateResult : (state, action) => {
            const { currentQuestionId, checked } = action.payload;
            state.result.fill(checked, currentQuestionId, currentQuestionId + 1)
        },
        resetResult : () => {
            return {
                playerId : null,
                result : []
            }
        }
    }
})

export const { setPlayerId, pushResult,updateResult, resetResult} = resultSlice.actions;

export default resultSlice.reducer;