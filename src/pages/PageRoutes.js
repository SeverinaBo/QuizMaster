import React from "react";
import {Route, Routes} from "react-router-dom";

import MainAppPage from "./MainAppPage";
import Login from "./Login";
import About from "./About";
import QuizQuestionsTable from "../Game/Create/QuizQuestionsTable";
import RegisterPage from "./RegisterPage";
import Page404 from "./Page404";
import Trivia from "../Game/Playing/Trivia";
import PlayingIntro from "../Game/Playing/PlayingIntro";



const PageRoutes = () => (
    <Routes>
            <Route path='/' element={ <MainAppPage/> }/>

            <Route path='/intro' element={ <PlayingIntro/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/trivia' element={ <Trivia/> }/>
            <Route path='/create' element={ <QuizQuestionsTable/> }/>
            <Route path='/register' element={ <RegisterPage/> }/>
            <Route path='/404' element={ <Page404/> }/>
            <Route path='/*' element={ <Page404/> }/>
    </Routes>
)
export default PageRoutes