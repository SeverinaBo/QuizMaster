import React, { useEffect, useState } from "react";

import { alpha, styled } from "@mui/material/styles";
import { useQuiz} from "../../api/quizApi";
import { Button, Typography } from "@mui/material";
import palette from "../../theme/palette";
import correctSound from '../../sounds/correctAnswerSound.mp3';
import wrongSound from '../../sounds/wrongAnswerSound.mp3';

export const ButtonStyle = styled('div')(({theme}) => ({
    minHeight: '50vh',
    position: 'center',
    fontWeight: "bold",
    justifyContent: 'center',
    flexDirection: 'column',
}));

export const StyledContent = styled('div')(({theme}) => ({
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    position:'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));
const PlayingQuizForm2 = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [checkIfCorrect, setCheckIfCorrect] = useState(null);
    const {getQuizez} = useQuiz();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const data = await getQuizez();
                setQuestions(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchQuestion();
    }, []);

    const checkAnswer = () => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        console.log(`selectedAnswer: ${selectedAnswer}`);
        console.log(`correctAnswer: ${correctAnswer}`);
        if (selectedAnswer === correctAnswer) {
            const correctAnswerSound = new Audio(correctSound);
            correctAnswerSound.play();
            setCheckIfCorrect('correct!');
        } else {
            const wrongAnswerSound = new Audio(wrongSound);
            wrongAnswerSound.play();
            setCheckIfCorrect(`Incorrect. The correct answer is ${correctAnswer}.`);
        }
    };

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        checkAnswer();
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setCheckIfCorrect(null);
    };

    return (
        <StyledContent>
            {questions[currentQuestionIndex] && (
                <div key={questions[currentQuestionIndex].id}>
                    <Typography
                        variant="h5"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: (2, 2.5),
                            backgroundColor: alpha(palette.grey[500], 0.12),
                        }}
                    >
                        {questions[currentQuestionIndex].question}
                    </Typography>
                    <ButtonStyle>
                        <Button onClick={() => handleAnswerSelection(questions.optionA)}>{questions.optionA}</Button>
                        <Button onClick={() => handleAnswerSelection(questions.optionB)}>{questions.optionB}</Button>
                        <Button onClick={() => handleAnswerSelection(questions.optionC)}>{questions.optionC}</Button>
                        <Button onClick={() => handleAnswerSelection(questions.optionD)}>{questions.optionD}</Button>
                    </ButtonStyle>
                    {checkIfCorrect && (
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: 2,
                                color: checkIfCorrect.startsWith('correct') ? palette.success.main : palette.error.main,
                            }}
                        >
                            {checkIfCorrect}
                        </Typography>
                    )}
                    <Button onClick={handleNextQuestion}>Next Question</Button>
                </div>
            )}
        </StyledContent>
    );
};

export default PlayingQuizForm2