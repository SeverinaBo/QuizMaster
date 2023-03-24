import React, {useRef, useState, useEffect, Fragment} from 'react';
import { Helmet } from 'react-helmet';

import {StyledContent} from "../Create/QuizQuestionsTable";

import {questions} from '../../_mock/questions'
import isEmpty from '../../utils/is-empty';

import correctNotification from '../../sounds/correctSound.mp3'
import wrongNotification from '../../sounds/wrongSound.mp3'
import buttonSound from '../../sounds/buttonSound.mp3'
import {Button, Card, Typography} from "@mui/material";


const PlayingQuizForm = (props) => {
    const [state, setState] = useState({
        questions: [],
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        answer: '',
        numberOfQuestions: 0,
        numberOfAnsweredQuestions: 0,
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        nextButtonDisabled: false,
        previousButtonDisabled: true,
        previousRandomNumbers: [],
        time: {},
    });

    const correctSound = useRef(null);
    const wrongSound = useRef(null);
    const buttonSound = useRef(null);

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            questions,
        }));
    }, []);

/*    useEffect(() => {
        const { questions, currentQuestionIndex } = state;
        const currentQuestion = questions[currentQuestionIndex];
        const nextQuestion = questions[currentQuestionIndex + 1];
        const previousQuestion = questions[currentQuestionIndex - 1];
        const answer = currentQuestion.answer;
        setState((prevState) => ({
            ...prevState,
            currentQuestion,
            nextQuestion,
            previousQuestion,
            numberOfQuestions: questions.length,
            answer,
            previousRandomNumbers: [],
        }));
        showOptions();
        handleDisableButton();
        startTimer();
    }, [state.questions, state.currentQuestionIndex]);*/

    useEffect(() => {
        if (state.time.minutes === 0 && state.time.seconds === 0) {
            endGame();
        }
    }, [state.time]);

    const displayQuestions = (questions = state.questions) => {
        const { currentQuestionIndex } = state;
        const currentQuestion = questions[currentQuestionIndex];
        const nextQuestion = questions[currentQuestionIndex + 1];
        const previousQuestion = questions[currentQuestionIndex - 1];
        const answer = currentQuestion.answer;
        setState((prevState) => ({
            ...prevState,
            currentQuestion,
            nextQuestion,
            previousQuestion,
            numberOfQuestions: questions.length,
            answer,
            previousRandomNumbers: [],
        }));
        showOptions();
        handleDisableButton();
    };

    const handleOptionClick = (e) => {
        if (e.target.innerHTML.toLowerCase() === state.answer.toLowerCase()) {
            let correctTimeout = setTimeout(() => {
                correctSound.current.play();
            }, 500);
            correctAnswer();
        } else {
            let wrongTimeout = setTimeout(() => {
                wrongSound.current.play();
            }, 500);
            wrongAnswer();
        }
    };

    const handleNextButtonClick = () => {
        playButtonSound();
        if (state.nextQuestion !== undefined) {
            setState(prevState => ({
                ...prevState,
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                displayQuestions(state.state, state.currentQuestion, state.nextQuestion, state.previousQuestion);
            });
        }
    };

    const handlePreviousButtonClick = () => {
        playButtonSound();
        if (state.previousQuestion !== undefined) {
            setState(prevState => ({
                ...prevState,
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                displayQuestions(state.state, state.currentQuestion, state.nextQuestion, state.previousQuestion);
            });
        }
    };

    const handleQuitButtonClick = () => {
        playButtonSound();
        if (window.confirm('Are you sure you want to quit?')) {
            props.history.push('/');
        }
    };

    const handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }

    };
    const playButtonSound = () => {
        buttonSound.current.play();
    };

   const correctAnswer = () => {
        setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (state.nextQuestion === undefined) {
                endGame();
            } else {
                displayQuestions(state.questions, state.currentQuestion, state.nextQuestion, state.previousQuestion);
            }
        });
    }

  const  wrongAnswer = () => {
        navigator.vibrate(1000);
        setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (state.nextQuestion === undefined) {
                endGame();
            } else {
                displayQuestions(state.questions, state.currentQuestion, state.nextQuestion, state.previousQuestion);
            }
        });
    }

    const showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
        });

        setState({
            usedFiftyFifty: false
        });
    }

    const startTimer = () => {
        const countDownTime = Date.now() + 180000;
        let interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    endGame();
                });
            } else {
                setState({
                    time: {
                        minutes,
                        seconds,
                        distance
                    }
                });
            }
        }, 1000);
    }



    const handleDisableButton = () => {
        if (state.previousQuestion === undefined || state.currentQuestionIndex === 0) {
            setState({
                previousButtonDisabled: true
            });
        } else {
            setState({
                previousButtonDisabled: false
            })
        }
        if (state.nextQuestion === undefined || state.currentQuestionIndex + 1 === state.numberOfQuestions) {
            setState({
                nextButtonDisabled: true
            });
        } else {
            setState({
                nextButtonDisabled: false
            });
        }
    }

    const endGame = () => {
        alert('Quiz has eneded!');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
        };
        setTimeout(() => {
            this.props.history.push('/play/quizSummary', playerStats);
        }, 1000);
    }

                   const {
                        currentQuestion,
                        currentQuestionIndex,
                        numberOfQuestions,
                        time
                    } = state;

                    return (
                        <StyledContent>

                            <Fragment>
                                <audio ref={correctSound} src={correctNotification}></audio>
                                <audio ref={wrongSound} src={wrongNotification}></audio>
                                <audio ref={buttonSound} src={buttonSound}></audio>
                            </Fragment>
                            <Typography variant="h3" sx={{mb: 5}}>
                                Quiz Mode
                            </Typography>


                                        <Card style="left" style={{ float: 'left' }}>{currentQuestionIndex + 1} of {numberOfQuestions}</Card>
                                        <Card style={('right valid', {
                                            'warning': time.distance <= 120000,
                                            'invalid': time.distance < 30000
                                        })}>
                                {time.minutes}:{time.seconds}
                                           </Card>


                            <Typography variant="h3" sx={{mb: 5}}>
                                {currentQuestion.question}
                            </Typography>

                                    <Button onClick={handleOptionClick} className="option">{currentQuestion.optionA}</Button>
                                    <Button onClick={handleOptionClick} className="option">{currentQuestion.optionB}</Button>


                                    <Button onClick={handleOptionClick} className="option">{currentQuestion.optionC}</Button>
                                    <Button onClick={handleOptionClick} className="option">{currentQuestion.optionD}</Button>


                                    <Button
                                        id="previous-button"
                                        onClick={handleButtonClick}>
                                        Previous
                                    </Button>
                                    <Button

                                        id="next-button"
                                        onClick={handleButtonClick}>
                                        Next
                                    </Button>
                                    <Button id="quit-button" onClick={handleButtonClick}>Quit</Button>

                        </StyledContent>
                    );
            }

            export default PlayingQuizForm;


