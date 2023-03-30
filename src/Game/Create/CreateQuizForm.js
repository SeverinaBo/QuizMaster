import {
    Alert,
    Button, Dialog,
    DialogActions, DialogContent,
    DialogTitle,
    LinearProgress, MenuItem,
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
    option1: Yup.string()
        .min(1)
        .max(255)
        .required(),
    option2: Yup.string()
        .min(1)
        .max(255)
        .required(),
    option3: Yup.string()
        .min(1)
        .max(255)
        .required(),
    option4: Yup.string()
        .min(1)
        .max(255)
        .required(),
    correctAnswer: Yup.number()
        .min(1, ({label, min}) => `${label} must be between 1 and 4`)
        .max(4)
        .label("Correct answer")
        .required()
})

const CreateQuizForm = ({fetchQuestions, open, onClose, quizForm}) => {

        const [alertOpen, setAlertOpen] = React.useState(false);

        const createQuizForm = useCreateQuizForm();


        const initialValues = quizForm ? {
            questionId: quizForm.questionId,
            quizQuestion: quizForm.question,
            option1: quizForm.option1,
            option2: quizForm.option2,
            option3: quizForm.option3,
            option4: quizForm.option4,
            correctAnswer: quizForm.correctAnswer
        } : {
            questionId: null,
            quizQuestion: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctAnswer: '',
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
                                                   value={props.question}
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.quizQuestion && props.touched.quizQuestion}
                                                   helperText={props.touched.quizQuestion && props.errors["quizQuestion"]}
                                                   as={TextField}
                                            />
                                            <Field label="Option 1"
                                                   name="option1"
                                                   variant="standard"
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.option1 && props.touched.option1}
                                                   helperText={props.touched.option1 && props.errors["option1"]}
                                                   as={TextField}
                                            />

                                            <Field label="Option 2"
                                                   name="option2"
                                                   variant="standard"
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.option2 && props.touched.option2}
                                                   helperText={props.touched.option2 && props.errors["option2"]}
                                                   as={TextField}
                                            />
                                            <Field label="Option 3"
                                                   name="option3"
                                                   variant="standard"
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.option3 && props.touched.option3}
                                                   helperText={props.touched.option3 && props.errors["option3"]}
                                                   as={TextField}
                                            />
                                            <Field label="Option 4"
                                                   name="option4"
                                                   variant="standard"
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.option4 && props.touched.option4}
                                                   helperText={props.touched.option4 && props.errors["option4"]}
                                                   as={TextField}
                                            />


                                            <Field label="Correct Answer"
                                                   name="correctAnswer"
                                                   variant="standard"
                                                   fullWidth
                                                   style={{marginTop: '10px'}}
                                                   error={!!props.errors.correctAnswer && props.touched.correctAnswer}
                                                   helperText={props.touched.correctAnswer && props.errors["correctAnswer"]}
                                                   as={TextField}
                                                   select
                                                   onChange={(event) => {
                                                       const { value } = event.target;
                                                       props.setFieldValue('correctAnswer', parseInt(value, 10));
                                                   }}
                                            >
                                                <MenuItem value="1">1</MenuItem>
                                                <MenuItem value="2">2</MenuItem>
                                                <MenuItem value="3">3</MenuItem>
                                                <MenuItem value="4">4</MenuItem>
                                            </Field>


                                            <div style={{marginTop: '10px'}}>
                                                {props.isSubmitting && <LinearProgress color="inherit"/>}
                                            </div>
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