// @mui
import {styled} from '@mui/material/styles';
import { Container, Typography} from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';

// sections
import {Link} from "react-router-dom";
import {Translation} from "react-i18next";
import {LoginForm} from '../auth/login';


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {


    const mdUp = useResponsive('up', 'md');



    return (
        <>
            <Translation>
                {(t, {i18n}) => (
            <StyledRoot>
                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                            {t("welcome")}
                        </Typography>
                        <img src="/assets/illustrations/signIn_illustration.png" alt="login"/>
                    </StyledSection>
                )}
                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            {t("signInToAcc")}
                        </Typography>

                        <Typography variant="body2" sx={{mb: 5}}>
                            {t("noAccount")} {''}
                            <Link to={"/register"} variant="subtitle2">{t("register")}</Link>
                        </Typography>
                        <LoginForm/>
                    </StyledContent>
                </Container>
            </StyledRoot>
                )}
            </Translation>
        </>
    );
}
