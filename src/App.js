import React from 'react';
import {  BrowserRouter} from 'react-router-dom';

import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top";

import { QueryClient, QueryClientProvider } from "react-query";
import {Provider} from "react-redux";
import ResponsiveAppBar from "./layouts/dashboard/header/ResponsiveAppBar";
import reduxStore from "./reactReduxActions/reduxActions";
import {ReactQueryDevtools} from "react-query/devtools";



// ----------------------------------------------------------------------

const queryClient = new QueryClient();

function App() {
    return (

            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <ScrollToTop />
                    <Provider store={reduxStore}>
                        <ResponsiveAppBar />
                    </Provider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>

    );
}

export default App;
