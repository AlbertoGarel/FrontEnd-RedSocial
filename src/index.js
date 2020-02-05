import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
//imports for redux
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 * IMPORT CONTAINERS
 * */
import App from './containers/App';
import Category from "./containers/Category";
import SearchView from "./components/SearchView";
import AdminView from "./containers/AdminView";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import {GET_USER} from "./actions";
import UserOrders from "./containers/UserOrders";

console.log('%cSilence is Gold...', 'color:white;background-color:purple');
// console.log = console.warn = console.error = () => {};


if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user'));
    store.dispatch({
        type: GET_USER, payload: {
            id: user.id,
            username: user.user_name,
            address: user.address,
            token: user.token,
            email: user.email,
            role: user.role
        }
    });
}

// const store = createStore(reducers, composeEnhancers());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/categorias" component={Category}/>
                <Route path="/search-results" component={SearchView}/>
                <Route path="/admin" component={AdminView}/>
                <Route path="/mispedidos" component={UserOrders}/>
                <Route path="/404" component={NotFoundPage}/>
                <Redirect to="/404"/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

