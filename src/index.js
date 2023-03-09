import React from 'react';
import ReactDOM from "react-dom/client";
import {i18n} from "./i18nConfig";
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   /* <React.StrictMode> */
        <App />
 /*   </React.StrictMode> */
);

reportWebVitals();
export {i18n};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();