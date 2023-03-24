

import {styled} from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";
import {Button, Typography} from "@mui/material";

import {useNavigate} from "react-router-dom";
import { Translation } from "react-i18next";

const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    flex: 1,
    position: 'relative',
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledButtons = styled('div')(({theme}) => ({
    width: '50%',
    flex: 1,
    position: 'absolute',
    margin: 300,
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',

}));

function MainAppPage() {

    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();

    return (
        <Translation>
            {(t, { i18n }) => (
        <>

            {mdUp && (
                <StyledSection
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                position="center">
                    <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                        {t("welcome")}
                    </Typography>

                    <StyledButtons>
                    <Button margin='20' type="submit" variant="contained"
                            onClick={() => {
                                navigate('/create', {replace: true})
                            }}>
                        {t("createQ")}
                    </Button>


                    <Button margin='20' type="submit" variant="contained"
                            onClick={() => {
                                navigate('/quizez', {replace: true})
                            }}>
                        {t("playQ")}
                    </Button>
                    </StyledButtons>
                </StyledSection>
            )}
        </>
            )}
        </Translation>
    )
}

export default MainAppPage