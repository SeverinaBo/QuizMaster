import PropTypes from 'prop-types';
// @mui
import {
    Box,
    Card,
    Typography,
    Stack,
    Button,
    DialogTitle,
    Dialog,
    TableCell,
    TableRow,
    DialogContent
} from '@mui/material';
import { styled } from '@mui/material/styles';

// components

import QuizList from "./QuizList";

import {Link, useNavigate} from "react-router-dom";
import QuestionPreview from "./QuestionPreview";
import {useQuiz} from "../api/quizApi";
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



export default function QuizCard({ quiz }) {

    const { quizTitle, cover} = useQuiz;
    const navigate = useNavigate();
    const [openQuizModal, setOpenQuizModal] = useState(false);
    const useQuizInfo = useQuiz();

    const quizez = useSelector((state) => state.quizez);




    return (
        <>
        <Card onClick={() => navigate(`/create`)}>

            <Box sx={{ pt: '100%', position: 'relative' }}>
                <StyledQuizImg alt={quizTitle} src={cover} />
            </Box>


      {/*      {quizInfo && (
                <Stack spacing={2} sx={{ p: 3 }}>
                    <Typography variant="h5">{quizTitle}</Typography>
                    <Typography variant="body1">Created By: {createdBy}</Typography>
                    <Typography variant="body1">Number of Questions: {questAmount}</Typography>
                     Render any other relevant quiz information
                </Stack>
            )}*/}


            <Stack spacing={2} sx={{ p: 3 }}>
                <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                       author
                    </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            variant="body1"
                        >
                            amount
                        </Typography>
                    </Typography>
                </Stack>
            </Stack>
        </Card>

            <QuestionPreview open={openQuizModal}/>
            <Button
                variant="outlined"
                onClick={() => {
                    setOpenQuizModal(true);
                }}
            >
                Preview Quiz
            </Button>
            </>
    );
}
