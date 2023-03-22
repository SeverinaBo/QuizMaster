import {
    Alert,
    Button, Dialog,
    DialogActions, DialogContent,
    DialogTitle, Grid, InputLabel,
    LinearProgress, MenuItem, Select,
    Snackbar,
    TextField
} from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import {Field, Formik} from "formik";
import {useCreateQuizForm} from "../api/quizApi";
import {StyledContent} from "../Game/QuizQuestionsList";
import {useState} from "react";




const quizFormValidationSchema = Yup.object().shape({
    question: Yup.string()
        .min(5, ({label, min}) => `${label} must be longer than ${min}`)
        .required()
        .label("Question"),
    optionA: Yup.string()
        .required(),
    optionB: Yup.string()
        .required(),
    optionC: Yup.string()
        .required(),
    optionD: Yup.string()
        .required(),
    correctAnswer: Yup.string()
        .required(),
    timePerQuestion: Yup.number()
        .required(),
})

const CreateQuizForm = ({fetchQuestions, open, onClose, quiz}) => {

        const [alertOpen, setAlertOpen] = React.useState(false);
        const createQuizForm = useCreateQuizForm();

        const [correctAnswer, setCorrectAnswer] = React.useState('');
        const [timePerQuestion, setTimePerQuestion] = useState('');

        const handleCorrectAnswerChange = (event) => {
            setCorrectAnswer(event.target.value);
        }
        const handleTimerChange = (event) => {
            setTimePerQuestion(event.target.value);

        };



const initialQuizValues = quiz ? {
    id: quiz.id,
    question: quiz.question,
    optionA: quiz.optionA,
    optionB: quiz.optionB,
    optionC: quiz.optionC,
    optionD: quiz.optionD,
    correctAnswer: quiz.correctAnswer,
    timePerQuestion: quiz.timePerQuestion
} : {
    id: null,
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: '',
    timePerQuestion: ''
}
const title = quiz ? "Edit question" : "Add new question";

return (
    <>
        <StyledContent>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>

                <Formik initialValues={initialQuizValues}
                        onSubmit={async (quiz, {setSubmitting}) => {
                            await createQuizForm(quiz)
                            setSubmitting(false)
                            onClose()
                            fetchQuestions()
                            setAlertOpen(true)
                        }}
                        validationSchema={quizFormValidationSchema}>
                    {(props) => {
                        return (
    <>
        <DialogContent>
            <Field label="Question"
                   name="question"
                   variant="standard"
                   fullWidth
                   error={!!props.errors.question && props.touched.question}
                   helperText={props.touched.question && props.errors["question"]}
                   as={TextField}
            />
            <Field label="Option A"
                   name="optionA"
                   variant="standard"
                   fullWidth
                   error={!!props.errors.optionA && props.touched.optionA}
                   helperText={props.touched.optionA && props.errors["optionA"]}
                   as={TextField}
            />

            <Field label="Option B"
                   name="optionB"
                   variant="standard"
                   fullWidth
                   error={!!props.errors.optionB && props.touched.optionB}
                   helperText={props.touched.optionB && props.errors["optionB"]}
                   as={TextField}
            />
            <Field label="Option C"
                   name="optionC"
                   variant="standard"
                   fullWidth
                   error={!!props.errors.optionC && props.touched.optionC}
                   helperText={props.touched.optionC && props.errors["optionC"]}
                   as={TextField}
            />
            <Field label="Option D"
                   name="optionD"
                   variant="standard"
                   fullWidth
                   error={!!props.errors.optionD && props.touched.optionD}
                   helperText={props.touched.optionD && props.errors["optionD"]}
                   as={TextField}
            />

                <InputLabel >Correct Answer</InputLabel>
                <Select
                    defaultValue="a"
                    value={correctAnswer}
                    label="Correct Answer"
                    name="correct"
                    fullWidth
                    onChange={handleCorrectAnswerChange}
                >
                    <MenuItem value="a">A</MenuItem>
                    <MenuItem value="b">B</MenuItem>
                    <MenuItem value="c">C</MenuItem>
                    <MenuItem value="d">D</MenuItem>
                </Select>

            <InputLabel >Set Time</InputLabel>
            <Select
                defaultValue={20}
                value={timePerQuestion}
                onChange={handleTimerChange}
                name="timer"
                fullWidth
            >
                <MenuItem value={20}>20 sec</MenuItem>
                <MenuItem value={25}>25 sec</MenuItem>
                <MenuItem value={30}>30 sec</MenuItem>
                <MenuItem value={40}>40 sec</MenuItem>
            </Select>

{props.isSubmitting && <LinearProgress color="inherit"/>}
</DialogContent>

<DialogActions>
    <Button onClick={onClose}>Cancel</Button>
    <Button disabled={props.isSubmitting} onClick={props.submitForm}>Add</Button>
</DialogActions>

</>
)
}}
</Formik>

</Dialog>

<Snackbar open={alertOpen}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          autoHideDuration={6000}
          onClose={() => setAlertOpen(false)}>
    <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{width: '100%'}}>
        Question created
    </Alert>
</Snackbar>
</StyledContent>
</>
);
}
;

    export default CreateQuizForm