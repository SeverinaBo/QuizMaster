import * as React from "react";
import {
    Button,
    LinearProgress,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useQuiz} from "../../api/quizApi";
import {styled} from "@mui/material/styles";
import CreateQuizForm from "./CreateQuizForm";
import {Translation} from "react-i18next";


export const StyledContent = styled('div')(({theme}) => ({
    display: 'flex',
    position: 'center',
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
    const [openQuestionModal, setOpenQuestionModal] = useState(false);
    const [editQuestion, setEditQuestion] = useState(null);
    const {isFetching, quizez = [], refetch} = useQuiz();


    const loadingElement = isFetching && (
        <TableRow>
            <TableCell colSpan={7} align="center">
                <LinearProgress/>
            </TableCell>
        </TableRow>
    );

    const noQuestionsElement = !quizez.length && (
        <TableRow>
            <TableCell colSpan={7} align="center">
                No questions found
            </TableCell>
        </TableRow>
    );

    const quizListElements = quizez.map((questionList, i) => (
        <TableRow key={i}>
            <TableCell>{questionList.question}</TableCell>
            <TableCell>{questionList.option1}</TableCell>
            <TableCell>{questionList.option2}</TableCell>
            <TableCell>{questionList.option3}</TableCell>
            <TableCell>{questionList.option4}</TableCell>
            <TableCell>{questionList.correctAnswer}</TableCell>
            <TableCell>
                <IconButton onClick={() => {
                    setOpenQuestionModal(true);
                    setEditQuestion(questionList);
                }}>
                    <EditIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    ));

    return (
        <Translation>
            {(t, {i18n}) => (
                <>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t("qQuestion")}</TableCell>
                                <TableCell>{t("qOption1")}</TableCell>
                                <TableCell>{t("qOption2")}</TableCell>
                                <TableCell>{t("qOption3")}</TableCell>
                                <TableCell>{t("qOption4")}</TableCell>
                                <TableCell>{t("qCorrectAnswr")}</TableCell>
                                <TableCell>{t("qEdit")}</TableCell>
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
                            style={{
                                marginTop: "10px", width: '250px'
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
                            style={{
                                marginTop: "20px"
                                , width: '250px'
                            }}
                            variant="contained"
                            position="center"
                            onClick={() => {
                                navigate('/intro', {replace: true})
                            }}
                        >
                            {t("finAndPlay")}
                        </Button>
                    </StyledButtons>
                </>
            )}
        </Translation>
    )
}

export default QuizQuestionsTable;
