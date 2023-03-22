import PropTypes from 'prop-types';
// @mui
import {Box, Card,  Typography, Stack, Button} from '@mui/material';
import { styled } from '@mui/material/styles';

// components

import QuizList from "./QuizList";

import {useNavigate} from "react-router-dom";


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

export default function QuizCard({ quiz, quizInfo }) {

    const { createdBy, quizTitle, cover, questAmount } = quiz;
    const navigate = useNavigate();

    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <StyledQuizImg alt={quizTitle} src={cover} />
            </Box>


            {quizInfo && (
                <Stack spacing={2} sx={{ p: 3 }}>
                    <Typography variant="h5">{quizTitle}</Typography>
                    <Typography variant="body1">Created By: {createdBy}</Typography>
                    <Typography variant="body1">Number of Questions: {questAmount}</Typography>
                    {/* Render any other relevant quiz information */}
                </Stack>
            )}

{/*            <Stack spacing={2} sx={{ p: 3 }}>
                <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {createdBy}
                        {quizTitle}
                    </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            variant="body1"
                        >
                            {questAmount}
                        </Typography>
                    </Typography>
                </Stack>
            </Stack>*/}
        </Card>
    );
}
