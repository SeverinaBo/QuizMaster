import * as React from "react";

import {styled} from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";


import { Typography} from "@mui/material";

import { Translation } from "react-i18next";
import CreateOrPlay from "../Game/CreateOrPlay";


export const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    flex: 1,
    alignItems:"center",
    position:"center",
    display:"flex",
    flexDirection:"column",
    maxWidth: 500,
    margin: ' auto',
    minHeight: '50vh',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default
}));


function About() {



    const mdUp = useResponsive('up', 'md');

    return (

            <>

                        <StyledSection style={{marginTop: '40px' }} >

                            <Typography variant="h5" style={{marginTop: '20px' }}
                                        alignItems="center"
                                        position="center">
                                What is QuizMasters?</Typography>

                            <Typography variant="h7" style={{marginBottom: '20px' }} >
                                <br/>A game where you can create your own quizez in any topic. Questions and answer options are yours to choose. <br/>
                                Try it alone or with friends. <br/>
                                Create, play, answer and compare the results.
                            </Typography>


                            {mdUp && (
                                <div style={{margin: '40px'  }}>

                                    <img src="/assets/images/pageImages/about_page_image.svg" alt="about"/>
                                </div>
                            )}

                            <CreateOrPlay/>
                        </StyledSection>

                </>


    )
}

export default About;