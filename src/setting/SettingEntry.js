import {render} from "react-dom";
import React,{Component} from "react";
import {Router, Route,browserHistory,IndexRoute} from "react-router";
import {Provider} from "react-redux";
import { store } from "./data/StoreConfig";
import AppCont from './containers/AppCont';
import PersonalCenterCont from './containers/PersonalCenterCont';
import CompanySetCont from './containers/CompanySetCont';

import "antd/dist/antd.css";
import './../base/styles/base.scss'
import "./styles/main.scss";
import fn from '../base/services/InitData'

fn().then(() => render(
    <Provider store={store}>
        <Router history={browserHistory} ignoreScrollBehavior>
            <Route path="/setting.html" component={AppCont} >
                <IndexRoute component={PersonalCenterCont} />
                <Route path={`/R/setting/company`} component={CompanySetCont} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('bodycontext')
))
