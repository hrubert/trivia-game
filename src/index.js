import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux"
import { reducer } from "./reducers/reducer"
import 'normalize.css';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Container from './components/Container';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><Container /></BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
