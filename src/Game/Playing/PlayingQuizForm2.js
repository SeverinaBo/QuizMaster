import React, { useEffect, useState } from "react";
import { StyledContent } from "../Create/QuizQuestionsTable";
import { alpha, styled } from "@mui/material/styles";
import { getQuizez } from "../../api/quizApi";
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

const PlayingQuizForm2 = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [checkIfCorrect, setCheckIfCorrect] = useState(null);



    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const data = await getQuizez();
                setQuestions([data[currentQuestionIndex]]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchQuestion();
    }, [currentQuestionIndex]);


    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        console.log(`selectedAnswer: ${selectedAnswer}`);
        console.log(`correctAnswer: ${correctAnswer}`);
        if (answer === correctAnswer) {
            const correctAnswerSound = new Audio(correctSound);
            correctAnswerSound.play();
            setCheckIfCorrect('Correct!');
        } else {
            const wrongAnswerSound = new Audio(wrongSound);
            wrongAnswerSound.play();
            setCheckIfCorrect(`Incorrect. The correct answer is ${correctAnswer}.`);
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
                            backgroundColor: alpha(palette.grey[500], 0.12),
                        }}
                    >
                        {question.question}
                    </Typography>
                    <ButtonStyle>
                        <Button onClick={() => handleAnswerSelection(question.optionA)}>{question.optionA}</Button>
                        <Button onClick={() => handleAnswerSelection(question.optionB)}>{question.optionB}</Button>
                        <Button onClick={() => handleAnswerSelection(question.optionC)}>{question.optionC}</Button>
                        <Button onClick={() => handleAnswerSelection(question.optionD)}>{question.optionD}</Button>
                    </ButtonStyle>

                    {/*another way to display buttons*/}
                 {/*   <ButtonStyle>
                        {['optionA', 'optionB', 'optionC', 'optionD'].map((option) => (
                            <Button key={option} onClick={() => handleAnswerSelection(question[option])}>
                                {question[option]}
                            </Button>
                        ))}
                    </ButtonStyle>*/}
                    {checkIfCorrect && (
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: 2,
                                color: checkIfCorrect.startsWith('Correct') ? palette.success.main : palette.error.main,
                            }}
                        >
                            {checkIfCorrect}
                        </Typography>
                    )}
                </div>
            ))}
        </StyledContent>
    );
};

export default PlayingQuizForm2;
