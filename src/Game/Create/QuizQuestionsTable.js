import * as React from "react";
import {
    Button,
    LinearProgress,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    CircularProgress
} from "@mui/material";


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useQuiz, useDelQuiz} from "../../api/quizApi";

import {deleteQuestion} from "../../reactReduxActions/quizTableActions";
import {styled} from "@mui/material/styles";
import CreateQuizForm from "./CreateQuizForm";
import {useDispatch} from "react-redux";
import { Translation } from "react-i18next";





export const StyledContent = styled('div')(({theme}) => ({
    display: 'flex',
    position:'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const StyledButtons = styled('div')(({theme}) => ({
    height: "100vh",
    width: '700px',
    alignItems: "center",
    margin: 'auto',
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',
    fontSize: "1rem",
    fontWeight: "bold",
}));
const QuizQuestionsTable = () => {

    const navigate = useNavigate();
    const deleteQuestion = useDelQuiz();

    const [loading, setLoading] = useState(false);
    const [openQuestionModal, setOpenQuestionModal] = useState(false);
    const [editQuestion, setEditQuestion] = useState(null);
    const {isFetching, quizez = [], refetch} = useQuiz();

    const handleDeleteQuestion = async (id) => {
        setLoading(true)
        await deleteQuestion(id);
        setLoading(false)

    }

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
                         <IconButton onClick={() => {
                            setOpenQuestionModal(true);
                            setEditQuestion(questionList);
                        }}>
                        <EditIcon/>
                    </IconButton>

                {loading ? (
                    <IconButton>
                    <CircularProgress size={24} value={200} />
                    </IconButton>
                ) : (
                <IconButton onClick={() => handleDeleteQuestion(questionList.id)}>
                    <DeleteIcon/>
                </IconButton>
                )}


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
                   <StyledButtons>
                        <Button
                            style={{ marginTop: "10px"
                                , width: '250px'
                            }}
                            variant="outlined"
                            position="center"
                            onClick={() => {
                                setOpenQuestionModal(true);
                                setEditQuestion(null);
                            }}
                        >
                            {t("qAddNewQuestion")}
                        </Button>

                    <Button
                        style={{ marginTop: "20px"
                            , width: '250px'
                        }}
                        variant="contained"
                        position="center"
                        onClick={() => {navigate('/intro', {replace: true})}}
                    >
                        Finish and play
                    </Button>
                </StyledButtons>
                </>
            )}
        </Translation>
    )
}

export default QuizQuestionsTable;
