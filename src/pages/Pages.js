import {Route, Routes} from "react-router-dom";
import MainAppPage from "./MainAppPage";
import JoinGame from "../Game/JoinGame";
import CreateQuizIntroPage from "../Game/Create/CreateQuizIntroPage";
import QuizListPage from "./QuizListPage";
import LoginPage from "./LoginPage";
import QuizQuestionsTable from "../Game/Create/QuizQuestionsTable";
import RegisterPage from "./RegisterPage";
import Page404 from "./Page404";
import React from "react";
import QuizWithId from "./QuizWithId";
import PlayingQuizForm from "../Game/Playing/PlayingQuizForm";
import QuizCard from "../Game/quizList/QuizCard";


const Pages = () => (
    <Routes>
            <Route path='/' element={ <MainAppPage/> }/>
            <Route path='/join' element={ <JoinGame/> }/>
        <Route path='/play' element={ <PlayingQuizForm/> }/>
            <Route path='/createIntro' element={ <CreateQuizIntroPage/> }/>
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