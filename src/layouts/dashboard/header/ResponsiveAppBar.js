import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import LanguagePopover from "./LanguagePopover";
import AccountPopover from "./AccountPopover";
import HeaderNavigation from "./HeaderNavigation";

import PageRoutes from "../../../pages/PageRoutes";
import AppFooter from "../../footer/AppFooter";


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };



    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <IconButton sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
                                    component={Link}
                                    to={`/`}>
                            <Avatar alt="logo" src="/assets/illustrations/logoForMain.png"/>
                        </IconButton>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={(event) => handleOpenNavMenu(event)}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>

                        </Box>



                        <HeaderNavigation/>
                        <LanguagePopover/>
                        <AccountPopover/>


                    </Toolbar>
                </Container>
            </AppBar>

            <PageRoutes/>
            {/*  <AppFooter sx={{pt:4}}/>*/}

        </>
    );
}

export default ResponsiveAppBar;