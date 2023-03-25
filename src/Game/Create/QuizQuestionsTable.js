import * as React from "react";
import {Button, LinearProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useQuiz} from "../../api/quizApi";

import {reduxActions} from "../../reactReduxActions/reduxActions";
import {styled} from "@mui/material/styles";
import CreateQuizForm from "./CreateQuizForm";
import {useDispatch} from "react-redux";
import { Translation } from "react-i18next";




export const StyledContent = styled('div')(({theme}) => ({
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    position:'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const QuizQuestionsTable = () => {

    const dispatch = useDispatch();
    const addQuestion = (question) => {
        dispatch(reduxActions.addQuestion(question));
    };
    const removeQuestion = (questionId) => {
        dispatch(reduxActions.removeQuestion(questionId));
    };


    const [openQuestionModal, setOpenQuestionModal] = useState(false);

    const [editQuestion, setEditQuestion] = useState(null);
    const {isFetching, quizez = [], refetch} = useQuiz();

    /* const [quizInfo, setQuizInfo] = useState(null);*/


    const loadingElement = isFetching && (
        <TableRow>
            <TableCell colSpan={8} align="center">
                <LinearProgress/>
            </TableCell>
        </TableRow>
    );

    const noQuestionsElement = !quizez.length && (
        <TableRow>
            <TableCell colSpan={8} align="center">
                No questions found
            </TableCell>
        </TableRow>
    );

    const quizListElements = quizez.map((questionList, i) => (
        <TableRow key={i}>
            <TableCell>{questionList.question}</TableCell>
            <TableCell>{questionList.optionA}</TableCell>
            <TableCell>{questionList.optionB}</TableCell>
            <TableCell>{questionList.optionC}</TableCell>
            <TableCell>{questionList.optionD}</TableCell>
            <TableCell>{questionList.correctAnswer}</TableCell>
            <TableCell>
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
                            question: questionList.question,
                            optionA: questionList.optionA,
                            optionB: questionList.optionB,
                            optionC: questionList.optionC,
                            optionD: questionList.optionD,
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
        <Translation>
            {(t, { i18n }) => (
                <>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t("qQuestion")}</TableCell>
                                <TableCell>{t("qOptionA")}</TableCell>
                                <TableCell>{t("qOptionB")}</TableCell>
                                <TableCell>{t("qOptionC")}</TableCell>
                                <TableCell>{t("qOptionD")}</TableCell>
                                <TableCell>{t("qCorrectAnswr")}</TableCell>
                                <TableCell>{t("qEditOrRemove")}</TableCell>
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
                            {t("qAddNewQuestion")}
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
            )}
        </Translation>
    )
}

export default QuizQuestionsTable;