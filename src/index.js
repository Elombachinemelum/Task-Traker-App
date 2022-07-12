import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import combinedReducer from "./reducers/tasks";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom"

const store = createStore(combinedReducer, applyMiddleware(thunk));

// to run production build ...
// npm run build
// we can run this production build by installing a local basic http server and choose a port to serve it on... 
// the optimized build is what you would deploy when hosting online...


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>
);