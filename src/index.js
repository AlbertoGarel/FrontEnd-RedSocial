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
import Inicial from "./containers/Inicial";
import SearchView from "./components/SearchView";
import AdminView from "./containers/AdminView";
import NotFoundPage from "./components/NotFoundPage";
import inicioEmpresa from "./containers/InicioEmpresa";
import Header from "./components/Header";
import {GET_USER, GET_EMPRESA} from "./actions";
import UserOrders from "./containers/UserOrders";

console.log('%cSilence is Gold...', 'color:white;background-color:purple');
// console.log = console.warn = console.error = () => {};


if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).tipo === 'usuario') {
    const user = JSON.parse(localStorage.getItem('user'));
    store.dispatch({
        type: GET_USER, payload:{
            tipo : user.tipo,
            id:  user.id,
            username: user.username,
            prim_apellido:  user.prim_apellido,
            seg_apellido: user.seg_apellido,
            email: user.email,
            password: user.password,
            about: user.about,
            ciudad_id: user.ciudad_id,
            direccion: user.direccion,
            imagen: user.imagen,
            sexo: user.sexo,
            tecnologia_id: user.tecnologia_id,
            estudios_id: user.estudios_id,
            telefono: user.telefono,
            token: user.remember_token
        }
    });
}
if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).tipo === 'empresas') {
    const user = JSON.parse(localStorage.getItem('user'));
    store.dispatch({
        type: GET_EMPRESA, payload:{
            tipo : user.tipo,
            id:  user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            about: user.about,
            ciudad_id: user.ciudad_id,
            direccion: user.direccion,
            imagen_logo: user.imagen_logo,
            name_responsable: user.name_responsable,
            telefono: user.telefono,
            web: user.web,
            cif: user.cif,
            token: user.remember_token
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
                <Route path="/home" component={Inicial}/>
                <Route path="/categorias" component={Category}/>
                <Route path="/search-results" component={SearchView}/>
                <Route path="/admin" component={AdminView}/>
                <Route path="/mispedidos" component={UserOrders}/>
                <Route path="/empresa" component={inicioEmpresa}/>
                <Route path="/404" component={NotFoundPage}/>
                <Redirect to="/404"/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

