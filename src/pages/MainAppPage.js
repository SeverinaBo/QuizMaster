import * as React from "react";
// @mui
import {Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
//
import useResponsive from "../hooks/useResponsive";
import {useNavigate} from "react-router-dom";
import {Translation} from "react-i18next";

import CreateOrPlay from "../Game/CreateOrPlay";


export const StyledSection = styled('div')(({theme}) => ({
    marginTop: '20px',
    width: '100%',
    flex: 1,
    position: 'relative',
    maxWidth: 600,
    margin: ' auto',
    minHeight: '70vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

export const StyledButtons = styled('div')(({theme}) => ({
    position: 'absolute',
    margin: 300,
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',
    fontSize: "1rem",
    fontWeight: "bold",
}));



function MainAppPage() {

    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();

    return (

        <Translation>
            {(t, {i18n}) => (
                <>

                    {mdUp && (
                        <StyledSection style={{
                            display: "flex",


                            marginTop: " 20px" }}>
                            <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                                {t("welcome")}
                            </Typography>

                            <StyledButtons>
                                <Button style={{marginBottom: '10px', width: '250px' }} type="submit" variant="contained"
                                        onClick={() => {
                                            navigate('/about', {replace: true})
                                        }}>
                                    {t("about")}
                                </Button>

                                <CreateOrPlay/>
                            </StyledButtons>
                        </StyledSection>
                    )}
                </>
            )}
        </Translation>

    )
}

export default MainAppPage