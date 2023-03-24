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
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            const audio = new Audio('../../sounds/correctSound.mp3');
            audio.play();
            console.log('Answer is correct!');
        } else {
            console.log('Answer is incorrect.');
        }
    };

    return (
        <StyledContent>

            {questions.map((question) => (
                <div key={question.id}>
                    <Typography variant="h5" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: (2, 2.5),
                        borderRadius: Number(shape.borderRadius) * 1.5,
                        backgroundColor: alpha(palette.grey[500], 0.12),
                    }}>{question.question}</Typography>
           <ButtonStyle>
               <Button onClick={() => setSelectedAnswer('A')}>{question.optionA}</Button>
               <Button onClick={() => setSelectedAnswer('B')}>{question.optionB}</Button>
               <Button onClick={() => setSelectedAnswer('C')}>{question.optionC}</Button>
               <Button onClick={() => setSelectedAnswer('D')}>{question.optionD}</Button>

               <Button onClick={checkAnswer}>Submit Answer</Button>

           </ButtonStyle>
                </div>
            ))}


        </StyledContent>
    );
}

export default PlayingQuizForm2;


