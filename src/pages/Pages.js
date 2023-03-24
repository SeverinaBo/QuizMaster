import {Route, Routes} from "react-router-dom";
import MainAppPage from "./MainAppPage";
import QuizListPage from "./QuizListPage";
import LoginPage from "./LoginPage";
import QuizQuestionsTable from "../Game/Create/QuizQuestionsTable";
import RegisterPage from "./RegisterPage";
import Page404 from "./Page404";
import React from "react";
import QuizWithId from "./QuizWithId";

import PlayingQuizForm2 from "../Game/Playing/PlayingQuizForm2";



const Pages = () => (
    <Routes>
            <Route path='/' element={ <MainAppPage/> }/>
        <Route path='/play' element={ <PlayingQuizForm2/> }/>
            <Route path='/quizez' element={ <QuizListPage/> }/>
            <Route path='/quizez/:id' element={ <QuizWithId/> }/>
            <Route path='/login' element={ <LoginPage/> }/>
            <Route path='/create' element={ <QuizQuestionsTable/> }/>
            <Route path='/register' element={ <RegisterPage/> }/>
            <Route path='/404' element={ <Page404/> }/>
            <Route path='/*' element={ <Page404/> }/>
    </Routes>
)
export default Pages