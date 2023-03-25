import {
    Alert,
    Button, Dialog,
    DialogActions, DialogContent,
    DialogTitle, InputLabel,
    LinearProgress, MenuItem, Select,
    Snackbar,
    TextField
} from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import {Field, Formik} from "formik";
import {useCreateQuizForm} from "../../api/quizApi";
import {StyledContent} from "./QuizQuestionsTable";



const quizFormValidationSchema = Yup.object().shape({
    quizQuestion: Yup.string()
        .min(5)
        .required(),
    optionA: Yup.string()
        .min(1)
        .max(255)
        .required(),
    optionB: Yup.string()
        .min(1)
        .max(255)
        .required(),
    optionC: Yup.string()
        .min(1)
        .max(255)
        .required(),
    optionD: Yup.string()
        .min(1)
        .max(255)
        .required(),
       correctAnswer: Yup.string()
           .required()
})

const CreateQuizForm = ({fetchQuestions, open, onClose, quizForm}) => {

        const [alertOpen, setAlertOpen] = React.useState(false);
        const [correctAnswer, setCorrectAnswer] = React.useState('');
        const createQuizForm = useCreateQuizForm();


        const initialValues = quizForm ? {
            id: quizForm.id,
            quizQuestion: quizForm.question,
            optionA: quizForm.optionA,
            optionB: quizForm.optionB,
            optionC: quizForm.optionC,
            optionD: quizForm.optionD,
            correctAnswer: correctAnswer
        } : {
            id: null,
            quizQuestion: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            correctAnswer: ''
        }
        const title = quizForm ? "Edit question" : "Add new question";

        return (
            <>
                <StyledContent>
                    <Dialog open={open} onClose={onClose}>
                        <DialogTitle>{title}</DialogTitle>

                        <Formik initialValues={initialValues}
                                onSubmit={async (quizForm, {setSubmitting}) => {
                                    await createQuizForm(quizForm)

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
                                                   name="quizQuestion"
                                                   variant="standard"
                                                   fullWidth
                                                   error={!!props.errors.quizQuestion && props.touched.quizQuestion}
                                                   helperText={props.touched.quizQuestion && props.errors["quizQuestion"]}
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

                                                    <InputLabel>Correct Answer</InputLabel>
                                            <Select
                                                value={props.values.correctAnswer}
                                                label="Correct Answer"
                                                name="correctAnswer"
                                                fullWidth
                                                onChange={props.handleChange}
                                            >
                                                <MenuItem value="a">A</MenuItem>
                                                <MenuItem value="b">B</MenuItem>
                                                <MenuItem value="c">C</MenuItem>
                                                <MenuItem value="d">D</MenuItem>
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
                              autoHideDuration={3000}
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