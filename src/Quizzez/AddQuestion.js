import * as React from "react";
import {useCreateQuizForm, useQuiz} from "../api/quizApi";

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogContentText,
    DialogActions,
    Grid,
    InputLabel, Select, MenuItem, Snackbar, Alert, LinearProgress
} from "@mui/material";

import {useState} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import StyledContent from "../Game/QuizQuestionsList"




const AddQuestion = () => {

        const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");
    const [answerA, setAnswerA] = React.useState("");
    const [answerB, setAnswerB] = React.useState("");
    const [answerC, setAnswerC] = React.useState("");
    const [answerD, setAnswerD] = React.useState("");

    const [correctAnswer, setCorrectAnswer] = React.useState("A");





    const createQuizForm = useCreateQuizForm();

    const {quizez} = useQuiz()





    const handleClick = () => {
        setOpen(!open);
    };

    const handleCorrectAnswerChange = (event) => {
        setCorrectAnswer(event.target.value);
    }

    const addNewQuestion = () => {
        console.log("added something");
        createQuizForm(getFormData());
        handleClick();
        // window.location.reload(false);
    };

    const getFormData = () => {
        const formData = new FormData();
        formData.append("question", question);
        formData.append("answerA", answerA);
        formData.append("answerB", answerB);
        formData.append("answerC", answerC);
        formData.append("answerD", answerD);
        formData.append("correctAnswer", correctAnswer);
        return formData;
    };



    return (
        <>
            <StyledContent>
                <Dialog open={open} onClose={handleClick}>
                    <DialogTitle>Add new question</DialogTitle>
                    <DialogContent>
                        <DialogContentText>To add to this question data, please click 'Add'
                            button</DialogContentText>

                        <TextField autoFocus margin="dense" id="question" label="Question" type="text"
                                   fullWidth variant="standard" value={question}
                                   onChange={(event) => setQuestion(event.target.value)}/>
                        <TextField autoFocus margin="dense" id="answerA" label="A" type="text" fullWidth
                                   variant="standard" value={answerA}
                                   onChange={(event) => setAnswerA(event.target.value)}/>
                        <TextField autoFocus margin="dense" id="answerB" label="B" type="text" fullWidth
                                   variant="standard" value={answerB}
                                   onChange={(event) => setAnswerB(event.target.value)}/>
                        <TextField autoFocus margin="dense" id="answerC" label="C" type="text" fullWidth
                                   variant="standard" value={answerC}
                                   onChange={(event) => setAnswerC(event.target.value)}/>
                        <TextField autoFocus margin="dense" id="answerD" label="D" type="text" fullWidth
                                   variant="standard" value={answerD}
                                   onChange={(event) => setAnswerD(event.target.value)}/>

                        <Grid item xs={6}
                              required
                              top-margin={1}
                        >
                            <InputLabel id="select-label">Correct Answer</InputLabel>
                            <Select
                                value={correctAnswer}
                                label="Correct Answer"
                                name="correct"
                                placeholder="Correct Answer"
                                fullWidth
                                onChange={handleCorrectAnswerChange}
                            >
                                <MenuItem value="a">A</MenuItem>
                                <MenuItem value="b">B</MenuItem>
                                <MenuItem value="c">C</MenuItem>
                                <MenuItem value="d">D</MenuItem>
                            </Select>
                        </Grid>


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClick}>Cancel</Button>
                        <Button onClick={addNewQuestion}>Add</Button>
                    </DialogActions>
                </Dialog>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <Button variant="outlined" onClick={handleClick}>
                        Add new item
                    </Button>
                </div>
            </StyledContent>
        </>
    );
}
;
export default AddQuestion