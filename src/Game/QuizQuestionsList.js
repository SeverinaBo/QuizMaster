

import * as React from "react";
import {Button, LinearProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useQuiz} from "../api/quizApi";

import {reduxActions} from "../reactReduxActions/reduxActions";
import {styled} from "@mui/material/styles";
import CreateQuizForm from "../Quizzez/CreateQuizForm";
import {useDispatch} from "react-redux";
import CreateQuizIntroPage from "../pages/CreateQuizIntroPage";




export const StyledContent = styled('div')(({theme}) => ({
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    position:'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const QuizQuestionsList = () => {

    const dispatch = useDispatch();
    const addQuestion = (question) => {
        dispatch(reduxActions.addQuestion(question));
    };
        const removeQuestion = (questionId) => {
            dispatch(reduxActions.removeQuestion(questionId));
        };


        const navigate = useNavigate();



        const [openQuestionModal, setOpenQuestionModal] = useState(false);

        const [editQuestion, setEditQuestion] = useState(null);
    const {isFetching, quizez = [], refetch} = useQuiz();

   /* const [quizInfo, setQuizInfo] = useState(null);*/


    const loadingElement = isFetching && (
            <TableRow>
                <TableCell colSpan={10} align="center">
                    <LinearProgress/>
                </TableCell>
            </TableRow>
        );

        const noQuestionsElement = !quizez.length && (
            <TableRow>
                <TableCell colSpan={10} align="center">
                    No questions found
                </TableCell>
            </TableRow>
        );

  const quizListElements = quizez.map((questionList, i) => (
            <TableRow key={i}>
                <TableCell>{questionList.createdBy}</TableCell>
                 <TableCell>{questionList.quizTitle}</TableCell>
                <TableCell>{questionList.question}</TableCell>
                <TableCell>{questionList.optionA}</TableCell>
                <TableCell>{questionList.optionB}</TableCell>
                <TableCell>{questionList.optionC}</TableCell>
                <TableCell>{questionList.optionD}</TableCell>
                <TableCell>{questionList.correctAnswer}</TableCell>
                <TableCell>
                 {/*     <Button variant="contained" onClick={() => navigate(`/quizez/${questionList.id}`)}>
                     Preview
                    </Button>*/}
           {/*         <IconButton
                        onClick={() => {
                            setOpenQuestionModal(true);
                            setEditQuestion(questionList);
                        }}
                    >
                        <EditIcon/>
                    </IconButton>*/}

                    <IconButton
                        onClick={() =>
                            removeQuestion(questionList.id)
                        }
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton
                        onClick={() =>
                            addQuestion({
                                id: questionList.id,
                                createdBy: questionList.createdBy,
                                quizTitle: questionList.quizTitle,
                                question: questionList.question,
                                optionA: questionList.optionA,
                                optionB: questionList.optionB,
                                correctAnswer: questionList.correctAnswer,
                            })
                        }
                    >
                        <EditIcon />
                    </IconButton>

                </TableCell>
            </TableRow>

        ));

        return (
            <>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Created By</TableCell>
                            <TableCell>Quiz Title</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer A</TableCell>
                            <TableCell>Answer B</TableCell>
                            <TableCell>Answer C</TableCell>
                            <TableCell>Answer D</TableCell>
                            <TableCell>Correct Answer</TableCell>
                            <TableCell>Edit/Remove</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>{loadingElement || noQuestionsElement || quizListElements}</TableBody>
                </Table>



                <CreateQuizForm
                    fetchQuestions={refetch}
                    open={openQuestionModal}
                                onClose={() => setOpenQuestionModal(false)}
                    quizForm={editQuestion}/>
                <div style={{marginTop: "10px", textAlign: "center"}}>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setOpenQuestionModal(true);
                            setEditQuestion(null);
                        }}
                    >
                        Add new question
                    </Button>
                </div>

                <Button
                    style={{
                        fontSize: "1rem",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "1rem 0",
                        maxWidth: '500px',
                        maxHeight: '50px',
                    }}
                    variant="contained"
                    position="center"
                    /*onClick={() => setQuizInfo(reduxActions.getQuestions())}*/
                >
                    Finish Quiz
                </Button>
            </>

        )
    }

export default QuizQuestionsList