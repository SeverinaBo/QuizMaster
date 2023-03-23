import {
    Button,
    Snackbar,
    TextField,
    Alert,
    Typography,
    DialogTitle,
    LinearProgress,
    DialogActions, DialogContent, Dialog
} from "@mui/material";
import {styled} from "@mui/material/styles";
import * as React from "react";


import * as Yup from 'yup';
import {Field, Formik} from "formik";
import {useCreateQuizForm} from "../../api/quizApi";


export const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const quizIntroValidationSchema = Yup.object().shape({
    createdBy: Yup.string()
        .min(5, ({label, min}) => `${label} must be greater than ${min} chars`)

        .required()
        .label("Your Name"),
    quizTitle: Yup.string()
        .min(1)
        .max(30)
        .required()
})

const CreateQuizIntroPage = ({fetchQuizzez, onClose, open, quiz}) => {

    const [alertOpen, setAlertOpen] = React.useState(false);

    const createQuiz = useCreateQuizForm();


    const initialQuizIntroValues = quiz ? {
        id: quiz.id,
        createdBy: quiz.createdBy,
        quizTitle: quiz.quizTitle
    } : {
        id: null,
        createdBy: '',
        quizTitle: ''
    }
    const title = quiz ? "Edit info" : "Add info for quiz";

    return (
        <>

            <StyledContent>
                <Dialog open={open} onClose={onClose}>
                    <DialogTitle>{title}</DialogTitle>

                    <Formik initialValues={initialQuizIntroValues}
                            onSubmit={async (quiz, {setSubmitting}) => {
                                await createQuiz(quiz)

                                setSubmitting(false)
                                onClose()
                                fetchQuizzez()
                                setAlertOpen(true)
                            }}
                            validationSchema={quizIntroValidationSchema}>
                        {(props) => {
                            return (
                                <>
                                    <Typography variant="h3" sx={{mb: 5}}>
                                        Create New Quiz
                                    </Typography>

                                        <DialogContent>
                                            <Field label="created by"
                                                   name="createdBy"
                                                   fullWidth
                                                   error={!!props.errors.createdBy && props.touched.createdBy}
                                                   helperText={props.touched.createdBy && props.errors["createdBy"]}
                                                   as={TextField}
                                            />
                                            <Field placeholder="Quiz Title"
                                                   name="quizTitle"
                                                   required
                                                   fullWidth
                                                   error={!!props.errors.quizTitle && props.touched.quizTitle}
                                                   helperText={props.touched.quizTitle && props.errors["quizTitle"]}
                                                   as={TextField}
                                            />
                                            <Field placeholder="Quiz Main cover"
                                                   name="quizCover"
                                                   required
                                                   fullWidth
                                                   as={TextField}
                                            />

                                            {props.isSubmitting && <LinearProgress color="inherit"/>}
                                        </DialogContent>

                                        <DialogActions>
                                            <Button
                                                style={{
                                                    fontSize: "1.6rem",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                    margin: "1rem 0"
                                                }}
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                disabled={props.isSubmitting} onClick={props.submitForm}
                                            >
                                                Save & continue
                                            </Button>
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
                        Quiz intro created!
                    </Alert>
                </Snackbar>
            </StyledContent>
        </>
    )
}

    export default CreateQuizIntroPage;
