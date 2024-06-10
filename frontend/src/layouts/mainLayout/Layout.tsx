
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Layout = () => {

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/* --------------------- Header --------------------- */}
                <Header open={open} toggleDrawer={toggleDrawer} />

                {/* --------------------- Sidebar --------------------- */}
                <Sidebar open={open} toggleDrawer={toggleDrawer} />

                {/* --------------------- Main --------------------- */}
                <Main />
            </Box>
        </ThemeProvider>
    );

}

export default Layout