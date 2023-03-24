import React, {useEffect, useState} from "react";

import {StyledContent} from "../Create/QuizQuestionsTable";


import {alpha, styled} from "@mui/material/styles";
import {getQuizez, useQuiz} from "../../api/quizApi";
import {Button, Typography} from "@mui/material";
import palette from "../../theme/palette";
import {shape} from "prop-types";


export const ButtonStyle = styled('div')(({theme}) => ({
    minHeight: '50vh',
    position: 'center',
    fontWeight: "bold",
    justifyContent: 'center',
    flexDirection: 'column',

}));


const PlayingQuizForm2 = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerCheck, setAnswerCheck] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const data = await getQuizez();
                setCurrentQuestionIndex(0);
                setQuestions([data[currentQuestionIndex]]);
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
            const audio = new Audio('../../sounds/correctSound.mp3');
            audio.play();
            setAnswerCheck('Correct!');
        } else {
            setAnswerCheck(`Incorrect. The correct answer is ${correctAnswer}.`);
        }
    };


    return (
        <StyledContent>
            {questions.map((question) => (
                <div key={question.id}>
                    <Typography
                        variant="h5"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: (2, 2.5),
                            borderRadius: Number(shape.borderRadius) * 1.5,
                            backgroundColor: alpha(palette.grey[500], 0.12),
                        }}
                    >
                        {question.question}
                    </Typography>
                    <ButtonStyle>
                        <Button onClick={() => setSelectedAnswer(question.optionA)}>{question.optionA}</Button>
                        <Button onClick={() => setSelectedAnswer(question.optionB)}>{question.optionB}</Button>
                        <Button onClick={() => setSelectedAnswer(question.optionC)}>{question.optionC}</Button>
                        <Button onClick={() => setSelectedAnswer(question.optionD)}>{question.optionD}</Button>
                        <Button onClick={checkAnswer}>Submit Answer</Button>
                    </ButtonStyle>
                    {answerCheck && (
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: 2,
                                color: answerCheck.startsWith('Correct') ? palette.success.main : palette.error.main,
                            }}
                        >
                            {answerCheck}
                        </Typography>
                    )}
                </div>
            ))}
        </StyledContent>
    );
};

export default PlayingQuizForm2;


