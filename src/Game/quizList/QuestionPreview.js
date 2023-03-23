import PropTypes from 'prop-types';
// @mui
import { Table,
    TableCell,
    TableHead,
    TableRow,
    DialogTitle,
    Dialog,
    DialogContent,
    TableBody
} from '@mui/material';
import { styled } from '@mui/material/styles';

// components

import QuizList from "./QuizList";

import {Link, useNavigate} from "react-router-dom";
import {quizListElements} from "../Create/QuizQuestionsTable";
import {useQuiz} from "../../api/quizApi";
import {useSelector} from "react-redux";
import * as React from "react";
import {useState} from "react";

// ----------------------------------------------------------------------

const StyledQuizImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------

QuizList.propTypes = {
    quizzes: PropTypes.object,
};



export default function QuestionPreview({ open }) {


    const navigate = useNavigate();

    const useQuizInfo = useQuiz();

    const quizez = useSelector((state) => state.quizez);

    const noQuestionsElement = !quizez.length && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                No products found
            </TableCell>
        </TableRow>
    );

    const quizListElements = quizez.map((questionList, i) => (
        <TableRow key={i}>
            {/*    <TableCell>{questionList.createdBy}</TableCell>
            <TableCell>{questionList.quizTitle}</TableCell>*/}
            <TableCell>{questionList.question}</TableCell>
            <TableCell>{questionList.optionA}</TableCell>
            <TableCell>{questionList.optionB}</TableCell>
            <TableCell>{questionList.optionC}</TableCell>
            <TableCell>{questionList.optionD}</TableCell>
            <TableCell>{questionList.correctAnswer}</TableCell>
            <TableCell></TableCell>
        </TableRow>
    ));

    return (
        <>
            <Dialog open={open} >
                <DialogTitle>quizTitle</DialogTitle>

                <DialogContent>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Question</TableCell>
                                <TableCell>Option A</TableCell>
                                <TableCell>Option B</TableCell>
                                <TableCell>Option C</TableCell>
                                <TableCell>Option D</TableCell>
                                <TableCell>CorrectAnswer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{noQuestionsElement || quizListElements}</TableBody>
                    </Table>

                </DialogContent>
            </Dialog>

        </>
);
}
