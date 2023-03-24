import * as React from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Translation } from "react-i18next";

const HeaderNavigation = () => {
    const [setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Translation>
            {(t, { i18n }) => (
                <>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                <Button
                    component={Link}
                    to={'/'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {t("home")}
                </Button>

                <Button
                    component={Link}
                    to={'/create'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {t("createQ")}
                </Button>

                <Button
                    component={Link}
                    to={'/quizez'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {t("allQuizez")}
                </Button>

                <Button
                    component={Link}
                    to={'/create'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {t("about")}
                </Button>

                <Button
                    component={Link}
                    to={'/login'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {t("login")}
                </Button>
            </Box>

        </>
            )}
        </Translation>
    );
}
export default HeaderNavigation