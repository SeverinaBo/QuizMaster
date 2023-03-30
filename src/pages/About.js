import * as React from "react";

import {styled} from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";


import {Typography} from "@mui/material";

import {Translation} from "react-i18next";
import PlayQuizButton from "../Game/Playing/PlayQuizButton";
import CreateQuestionsButton from "../Game/Playing/CreateQuestionsButton";


export const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    flex: 1,
    alignItems: "center",
    position: "center",
    display: "flex",
    flexDirection: "column",
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
        <Translation>
            {(t, {i18n}) => (
            <StyledSection style={{marginTop: '40px'}}>

                <Typography variant="h5" style={{marginTop: '20px'}}
                            alignItems="center"
                            position="center">
                    {t("whatIsQM")}</Typography>


                        <Typography variant="h7" style={{marginBottom: '20px'}}>

                            {t("aboutPage")}

                        </Typography>

                {mdUp && (
                    <div style={{margin: '40px'}}>
                        <img src="/assets/images/pageImages/about_page_image.svg" alt="about"/>
                    </div>
                )}

                <CreateQuestionsButton/>
                <PlayQuizButton/>
            </StyledSection>
            )}
        </Translation>

        </>


    )
}

export default About;