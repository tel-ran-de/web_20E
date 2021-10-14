import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {store} from "./store/store";
import App from "./components/App";
import TodoApp from "./components/TodoApp";
import AppConnect from "./components/AppConnect";

ReactDOM.render(
    <Provider store={store}>
        {/*<App/>*/}
        <TodoApp />
        {/*<AppConnect />*/}
    </Provider>,
  document.getElementById('root')
);

