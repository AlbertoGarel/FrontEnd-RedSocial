import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/**
 * IMPORT CONTAINERS
 * */
import Category from '../src/containers/Category'
import AdminView from '../src/containers/AdminView'
import UserOrders from "./containers/UserOrders";
import InicioEmpresa from "./containers/InicioEmpresa";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/categorias" component={Category}/>
            <Route path="/admin" component={AdminView}/>
            <Route path="/empresa" component={InicioEmpresa}/>
            <Route path="/mispedidos" component={UserOrders}/>
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

