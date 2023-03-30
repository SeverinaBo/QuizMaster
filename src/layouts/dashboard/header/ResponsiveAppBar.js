import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import LanguagePopover from "./LanguagePopover";

import HeaderNavigation from "./HeaderNavigation";

import PageRoutes from "../../../pages/PageRoutes";



function ResponsiveAppBar() {



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



                        <HeaderNavigation/>
                        <LanguagePopover/>



                    </Toolbar>
                </Container>
            </AppBar>

            <PageRoutes/>


        </>
    );
}

export default ResponsiveAppBar;