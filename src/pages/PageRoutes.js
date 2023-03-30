import React from "react";
import {Route, Routes} from "react-router-dom";
import MainAppPage from "./MainAppPage";
import Login from "./Login";
import About from "./About";
import QuizQuestionsTable from "../Game/Create/QuizQuestionsTable";
import RegisterPage from "./RegisterPage";
import Page404 from "./Page404";
import QuestionGame from "../Game/Playing/QuestionGame";


const PageRoutes = () => (
    <Routes>
        <Route path='/' element={<MainAppPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/game' element={<QuestionGame/>}/>
        <Route path='/create' element={<QuizQuestionsTable/>}/>

            <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/404' element={<Page404/>}/>
        <Route path='/*' element={<Page404/>}/>
    </Routes>
)
export default PageRoutes