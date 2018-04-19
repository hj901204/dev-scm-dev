import {render} from "react-dom";
import React,{Component} from "react";
import {applyMiddleware,createStore} from 'redux';
import {Router, Route,browserHistory,IndexRoute} from "react-router";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import AppCont from './containers/AppCont';
import ManageCont from './containers/ManageCont';

import "antd/dist/antd.css";
import './../base/styles/base.scss'
import "./styles/main.scss";
import { store } from './consts/StoreConfig';
//const store = createStore(rootReducer,applyMiddleware(thunk));


import fn from '../base/services/InitData'
fn().then(() => render(
    <Provider store={store}>
        <Router history={browserHistory} ignoreScrollBehavior>
            <Route path="/manage.html"  component={AppCont} >
                <IndexRoute component={ManageCont} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('bodycontext')
))