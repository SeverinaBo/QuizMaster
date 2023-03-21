import {Route, Routes} from "react-router-dom";
import MainAppPage from "./MainAppPage";
import JoinGame from "../Game/JoinGame";
import CreateQuizIntroPage from "./CreateQuizIntroPage";
import QuizListPage from "./QuizListPage";
import LoginPage from "./LoginPage";
import QuizQuestionsList from "../Game/QuizQuestionsList";
import RegisterPage from "./RegisterPage";
import Page404 from "./Page404";
import React from "react";
import QuizWithId from "./QuizWithId";


const Pages = () => (
    <Routes>
            <Route path='/' element={ <MainAppPage/> }/>
            <Route path='/join' element={ <JoinGame/> }/>
            <Route path='/createIntro' element={ <CreateQuizIntroPage/> }/>
            <Route path='/quizez' element={ <QuizListPage/> }/>
            <Route path='/quizez/:id' element={ <QuizWithId/> }/>
            <Route path='/login' element={ <LoginPage/> }/>
            <Route path='/create' element={ <QuizQuestionsList/> }/>
            <Route path='/register' element={ <RegisterPage/> }/>
            <Route path='/404' element={ <Page404/> }/>
            <Route path='/*' element={ <Page404/> }/>
    </Routes>
)
export default Pages