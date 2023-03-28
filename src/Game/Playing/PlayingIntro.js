import * as Yup from "yup";
import {Formik, Form, Field} from "formik";
import Typography from "@mui/material/Typography";
import {setPlayerId} from "../../reactReduxActions/resultReducer";
import { useDispatch } from 'react-redux'
import {Button, TextField, } from "@mui/material";
import {StyledSection} from "../../pages/MainAppPage";
import {useRef} from "react";


const playingIntroValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Must be longer than 3 char')
        .required('Required'),
})

export default function PlayingIntro() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setPlayerId(inputRef.current?.value))
        }
    }

    return (
        <>
        <StyledSection style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: " 20px" }}>


            <Formik initialValues={{
                name: '',
            }}
                    validationSchema={playingIntroValidation}>
                {({errors, touched}) => (
                    <Form>
                        <Typography variant="h4" > Who is playing?</Typography>
                        <Field variant="outlined"
                               name="name"
                               id="name"
                               label="Name*"
                               error={!!errors.name && touched.name}
                               helperText={touched.name && errors.name}
                               as={TextField}
                               style={{marginTop: "20px", marginBottom: "10px" }}
                        />

            </Form>
                )}
        </Formik>

        <Button variant="contained" style={{ marginTop: "10px" }} onClick={startQuiz}>Start Quiz</Button>
        </StyledSection>
</>
)
}