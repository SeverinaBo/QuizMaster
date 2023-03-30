import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {alpha, styled} from "@mui/material/styles";
import palette from "../../theme/palette";

import gameSound from "../../sounds/lobby-classic-game.mp3"

const StyledPlayingSection = styled('div')(({theme}) => ({
    width: '150%',
    position: 'relative',
    maxWidth: 500,
    margin: 'auto',
    minHeight: '50vh',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
    marginTop: '40px',
    alignItems: "center",
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: "1rem",
    fontWeight: "bold",

}));

export const StyledButtons = styled('div')(({theme}) => ({
    marginTop: '20px',
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
}));


function QuestionGame() {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [music, setMusic] = useState(null);

    useEffect(() => {
        const newMusic = new Audio(gameSound);
        newMusic.loop = true;
        setMusic(newMusic);
        return () => {
            newMusic.pause();
            newMusic.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        if (currentQuestion === 0) {
            music?.play();
        } else if (showResults) {
            music?.pause();
            music.currentTime = 0;
        }
    }, [currentQuestion, showResults, music]);


    const questions = [
        {
            text: "Javascript is an _______ language",
            options: [
                {id: 0, text: "Object-Oriented", isCorrect: true},
                {id: 1, text: "Object-Based", isCorrect: false},
                {id: 2, text: "Procedural", isCorrect: false},
                {id: 3, text: "None of the above", isCorrect: false},
            ],
        },
        {
            text: "Following methods can be used to display data in some form using Javascript?",
            options: [
                {id: 0, text: "Document.write()", isCorrect: false},
                {id: 1, text: "Console.log()", isCorrect: true},
                {id: 2, text: "Window.alert()", isCorrect: false},
                {id: 3, text: "All of the above", isCorrect: false},
            ],
        },
        {
            text: "When an operator value is NULL, the typeof returned by the unary operator is:",
            options: [
                {id: 0, text: "Boolean", isCorrect: false},
                {id: 1, text: "Undefined", isCorrect: true},
                {id: 2, text: "Object", isCorrect: false},
                {id: 3, text: "All", isCorrect: false},
            ],
        },
        {
            text: "What does the toString() method return?",
            options: [
                {id: 0, text: "Return Object", isCorrect: true},
                {id: 1, text: "Return String'", isCorrect: false},
                {id: 2, text: "Return Integer", isCorrect: false},
                {id: 3, text: "Nothing", isCorrect: false},
            ],
        },
        {
            text: "Which function is used to serialize an object into a JSON string?",
            options: [
                {id: 0, text: "Stringify()", isCorrect: true},
                {id: 1, text: "Parse()", isCorrect: false},
                {id: 2, text: "Convert()", isCorrect: false},
                {id: 3, text: "Const()", isCorrect: false},
            ],
        },
    ];


    const optionClicked = (isCorrect) => {

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };


    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };


    return (
        <>


            < StyledPlayingSection>
                <Typography variant="h3">JavaScript quiz</Typography>
                <Typography variant="h5">Score: {score}</Typography>
                {showResults ? (
                    <>
                        <Typography variant="h5">Final Results</Typography>
                        <Typography variant="h5">
                            {score} out of {questions.length} correct - (
                            {(score / questions.length) * 100}%)
                        </Typography>
                        <Button onClick={() => restartGame()} variant="contained">Restart game</Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">
                            Question: {currentQuestion + 1} out of {questions.length}
                        </Typography>
                        <Typography variant="h5" sx={{
                            padding: (2, 2.5), backgroundColor: alpha(palette.grey[500], 0.12),
                            marginBottom: '30px', marginTop: '40px'
                        }}>{questions[currentQuestion].text}</Typography>
                        <StyledButtons>
                            {questions[currentQuestion].options.map((option) => {
                                return (
                                    <Button style={{marginTop: '10px', marginBottom: '20px', width: '250px'}}
                                            type="submit" variant="contained"
                                            key={option.id}
                                            onClick={() => optionClicked(option.isCorrect)}
                                    >
                                        {option.text}
                                    </Button>

                                );
                            })}
                        </StyledButtons>
                    </>
                )}

            </StyledPlayingSection>
        </>
    );
}

export default QuestionGame;