import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {createStore} from "redux";
import combinedReducer from "./reducers/tasks";

const store = createStore(combinedReducer);


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);