
import {Link as RouterLink} from 'react-router-dom';
// @mui
import {styled} from '@mui/material/styles';
import {Button, Typography, Container, Box} from '@mui/material';
import {Translation} from "react-i18next";
// ----------------------------------------------------------------------

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

export default function Page404() {
    return (
        <>



            <Translation>
                {(t, {i18n}) => (
                    <>

            <Container>
                <StyledContent sx={{textAlign: 'center', alignItems: 'center'}}>
                    <Typography variant="h3" paragraph>
                        {t("pageNotFound")}
                    </Typography>

                    <Typography sx={{color: 'text.secondary'}}>
                        {t("errorPage")}
                    </Typography>

                    <Box
                        component="img"
                        src="/assets/illustrations/illustration_404.svg"
                        sx={{height: 260, mx: 'auto', my: {xs: 5, sm: 10}}}
                    />

                    <Button to="/" size="large" variant="contained" component={RouterLink}>
                        {t("goHome")}
                    </Button>
                </StyledContent>
            </Container>
                    </>
                )}
            </Translation>
        </>
    );
}
