
// @mui
import {Container, Stack, Typography} from '@mui/material';

/*
import {add_ic_3D as addIcon} from '../../public/assets/icons/add_ic_3D.svg';
*/

import QuizList from "../Game/quizList/QuizList";
import quizzez from "../_mock/quizzez";


// ----------------------------------------------------------------------
/*const addIcon = [{icon: '/assets/icons/add_ic_3D.svg'}];*/


export default function QuizListPage() {



    return (
        <>

            <Container>
                <Typography variant="h4" sx={{mb: 5}}>
                    Quizez
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end"
                       sx={{mb: 5}}/>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{my: 1}}/>


                    <QuizList quizzes={quizzez} />


            </Container>

        </>
    );
}
