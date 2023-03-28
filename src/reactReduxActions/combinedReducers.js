import {combineReducers, configureStore} from "@reduxjs/toolkit";

import questionReducer from "./questionReducer";
import resultReducer from "./resultReducer";

const combinedReducers = combineReducers({
    quizez: questionReducer,
    result: resultReducer
})

export default configureStore({reducer: combineReducers})