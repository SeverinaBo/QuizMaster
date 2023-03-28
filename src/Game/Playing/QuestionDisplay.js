import {Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup} from "@mui/material";

import {useEffect, useState} from "react";
import {useQuiz} from "../../api/quizApi";
import Typography from "@mui/material/Typography";
import {alpha, styled} from "@mui/material/styles";
import palette from "../../theme/palette";
import {useDispatch, useSelector} from "react-redux";
import {updateResult} from "../../reactReduxActions/resultReducer";

const StyledPlayingSection = styled('div')(({theme}) => ({
    width: '150%',
    position: 'relative',
    margin: ' auto',
    minHeight: '50vh',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

export default function QuestionDisplay({onChecked}) {

    const [checked, setChecked] = useState(undefined);
    const {questionId } = useSelector(state => state.quizez)

    const {isFetching, quizez = [], refetch} = useQuiz();
    const dispatch = useDispatch()

    const [currentQuestion, setCurrentQuestion] = useState(0);


    const questions = useSelector(state => state.quizez.queue[state.questions.questionId])

    const question = quizez[currentQuestion]?.question;
    const options = [
        quizez[currentQuestion]?.optionA,
        quizez[currentQuestion]?.optionB,
        quizez[currentQuestion]?.optionC,
        quizez[currentQuestion]?.optionD,
    ];


    useEffect(() => {
        dispatch(updateResult({ questionId, checked}))
    }, [checked])


    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ questionId, checked}))
    }
 /*   const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleOptionChange = (event) => {
        // Update the answer for the current question
        // You can store the answer in state or pass it to a parent component
        const selectedAnswer = event.target.value;
        console.log(`Selected answer for question ${currentQuestion + 1}: ${selectedAnswer}`);
    };*/

    return (
        <>
            <StyledPlayingSection sx={{ marginTop: '40px',
                    justifyContent:"center",
                    alignItems:"center",
                    position:"center" }}>
                <Typography
                    variant="h5"
                    sx={{ padding: (2, 2.5),
                        backgroundColor: alpha(palette.grey[500], 0.12),
                        marginBottom: '20px'
                    }}
                >{questions?.quizez}</Typography>

                <FormControl component="fieldset">
                    <RadioGroup name="options">
                        {questions?.options.map((q, index) => (
                            <FormControlLabel
                                key={index}
                                value={false}
                                control={<Radio />}
                                onChange={() => onSelect(index)}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </StyledPlayingSection>
        </>
    );
}