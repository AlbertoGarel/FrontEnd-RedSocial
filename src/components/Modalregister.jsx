import React, {Component, Fragment} from 'react';
import {GET_USER, userRegister} from "../actions";

import './styles/Modal.css';
import $ from 'jquery';
import axios from 'axios';
import store from "../store";

// import Popper from 'popper.js';
class Modalregister extends Component {
// const Modal = (props) => {
    constructor(props) {
        super(props);
        this.state = {
            ModalRotate: 'empresa',
            logExitoUsu: '',
            logExitoEmp: '',
            logErrorUsu: '',
            logErrorEmp: '',
            usercityUsu: '',
            usercityEmp: '',
            RegExitoUsu: '',
            RegExitoEmp: '',
            RegErrorUsu: '',
            RegErrorEmp: '',
            valuesUsu: {
                email: '',
                username: '',
                loginEmail: '',
                password: '',
                loginPassword: '',
                userStreet: '',
                confirmPassword: '',
            },
            valuesEmp: {
                email: '',
                username: '',
                loginEmail: '',
                password: '',
                loginPassword: '',
                userStreet: '',
                confirmPassword: '',
            },
            validationsUsu: {
                usernameUsu: '',
                usercityUsu: '',
                emailUsu: '',
                passwordUsu: '',
                confirmPasswordUsu: ''
            },
            validationsEmp: {
                nameEmp: '',
                nameResEmp: '',
                usercityEmp: '',
                emailEmp: '',
                passwordEmp: '',
                confirmPasswordEmp: ''
            },
            rows: [],
            // citySelected: 1
        }
        // this.handleChanges = this.handleChanges.bind(this)
        this.myFormRef = React.createRef();
        // this.classModalRotate = this.classModalRotate.bind(this);
    }

    //validación de SELECT OPTION


    //envío de formulario
    handleSubmit = (ev) => {
        ev.preventDefault();
        const isValid = this.validateAll(ev);

        if (!isValid) {
            return false
        }
        console.log('peticion', ev.target.id)
        // const values = JSON.stringify(this.state);
        if (ev.target.id === "register-formUsu") {
            let paramsBody = {
                "name": this.state.valuesUsu.usernameUsu,
                "email": this.state.valuesUsu.emailUsu,
                "password": this.state.valuesUsu.passwordUsu,
                "ciudad_id": this.state.usercityUsu,
                'tipo': 'usuario'
            };

            let paramsHead = {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            };

            axios.post('http://127.0.0.1:8000/api/auth/signup', paramsBody, paramsHead)
                .then(res => {
                    this.setState({
                        RegExitoUsu: res.data.message,
                        RegErrorUsu: '',
                    });
                    // if (res.status == 200) window.location.href = "/";
                    // this.handleSubmit("login-form")
                })
                .catch(err => {
                    this.setState({
                        RegErrorUsu: err.message,
                        RegExitoUsu: ''
                    })
                });
            this.myFormRef.reset();

        } else {
            let paramsBody = {
                "name": this.state.valuesEmp.nameEmp,
                "email": this.state.valuesEmp.emailEmp,
                "password": this.state.valuesEmp.passwordEmp,
                "name_responsable": this.state.valuesEmp.nameResEmp,
                "ciudad_id": this.state.usercityEmp,
                'tipo': 'empresa'
            };
            let paramsHead = {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
            axios.post('http://localhost:8000/api/auth/signup', paramsBody)
                .then(res => {
                    this.setState({
                        RegExitoEmp: res.data.message,
                        RegErrorEmp: '',
                    });



                    // if (res.data.status === 200) window.location.href = "/categorias";
                    // this.handleSubmit("login-form")
                })
                .catch(err => {
                    this.setState({
                        RegErrorEmp: err.message,
                        RegExitoEmp: ''
                    })
                });
            this.myFormRef.reset();
        }
    };

    validateAll = (ev) => {
        const {usercityUsu, usercityEmp} = this.state;
        const {usernameUsu, emailUsu, passwordUsu, confirmPasswordUsu} = this.state.valuesUsu;
        const {nameEmp, nameResEmp, emailEmp, passwordEmp, confirmPasswordEmp} = this.state.valuesEmp;
        const validationsUsu = {
            usernameUsu: '',
            usercityUsu: '',
            emailUsu: '',
            passwordUsu: '',
            confirmPasswordUsu: ''
        };
        const validationsEmp = {
            nameEmp: '',
            nameResEmp: '',
            usercityEmp: '',
            emailEmp: '',
            passwordEmp: '',
            confirmPasswordEmp: ''
        };
        let isValid = true;
alert(ev.target.id)
        if (ev.target.id === "register-formUsu") {
            if (!usercityUsu) {
                validationsUsu.usercityUsu = 'Selecciona una ciudad';
                isValid = false;
            }
            if (passwordUsu < 8) {
                validationsUsu.passwordUsu = 'Longitud mínima de 8 caracteres es requerida.';
                isValid = false;
            }
            if (!(/[A-Z]/).test(passwordUsu)) {
                validationsUsu.passwordUsu = 'Al menos una letra mayuscula es requerida.';
                isValid = false;
            }
            if (!(/[a-z]/).test(passwordUsu)) {
                validationsUsu.passwordUsu = 'Al menos una letra minúcula es requerida.';
                isValid = false;
            }
            if (!(/[1-9]/).test(passwordUsu)) {
                validationsUsu.passwordUsu = 'Al menos un valor numérico es requerido.';
                isValid = false;
            }
            if (!passwordUsu) {
                validationsUsu.passwordUsu = 'Password es requerido.';
                isValid = false;
            }
            if (passwordUsu !== confirmPasswordUsu) {
                validationsUsu.passwordUsu = 'Passwords no son idénticos';
                isValid = false;
            }

            if (!usernameUsu) {
                validationsUsu.usernameUsu = 'Nombre es requerido.';
                isValid = false
            }
            if ((!usernameUsu) || (usernameUsu && usernameUsu.length < 8) || (usernameUsu.length > 20)) {
                validationsUsu.usernameUsu = 'Nombre debe contener de 8 a 20 caracteres.'
                isValid = false
            }
            if (!emailUsu) {
                validationsUsu.emailUsu = 'Email es requerido'
                isValid = false
            }
            if (emailUsu && !/\S+@\S+\.\S+/.test(emailUsu)) {
                validationsUsu.emailUsu = 'Formato de Email debe ser :  example@mail.com'
                isValid = false
            }
            if (!isValid) {
                this.setState({validationsUsu})
            }

            return isValid
        } else {

            if (!usercityEmp) {
                validationsEmp.usercityEmp = 'Selecciona una ciudad';
                isValid = false;
            }
            if (passwordEmp < 8) {
                validationsEmp.passwordEmp = 'Longitud mínima de 8 caracteres es requerida.';
                isValid = false;
            }
            if (!(/[A-Z]/).test(passwordEmp)) {
                validationsEmp.passwordEmp = 'Al menos una letra mayuscula es requerida.';
                isValid = false;
            }
            if (!(/[a-z]/).test(passwordEmp)) {
                validationsEmp.passwordEmp = 'Al menos una letra minúcula es requerida.';
                isValid = false;
            }
            if (!(/[1-9]/).test(passwordEmp)) {
                validationsEmp.passwordEmp = 'Al menos un valor numérico es requerido.';
                isValid = false;
            }
            if (!passwordEmp) {
                validationsEmp.passwordEmp = 'Password es requerido.';
                isValid = false;
            }
            if (passwordEmp !== confirmPasswordEmp) {
                validationsEmp.passwordEmp = 'Passwords no son idénticos';
                isValid = false;
            }

            if (!nameEmp) {
                validationsEmp.nameEmp = 'Nombre es requerido.';
                isValid = false
            }
            if ((!nameEmp) || (nameEmp && nameEmp.length < 8) || (nameEmp.length > 20)) {
                validationsEmp.nameEmp = 'Nombre debe contener de 8 a 20 caracteres.'
                isValid = false
            }
            if (!emailEmp) {
                validationsEmp.emailEmp = 'Email es requerido'
                isValid = false
            }
            if (emailEmp && !/\S+@\S+\.\S+/.test(emailEmp)) {
                validationsEmp.emailEmp = 'Formato de Email debe ser :  example@mail.com'
                isValid = false
            }
            if (!nameResEmp) {
                validationsEmp.nameResEmp = 'Nombre es requerido.';
                isValid = false
            }
            if ((!nameResEmp) || (nameResEmp && nameResEmp.length < 8) || (nameResEmp.length > 20)) {
                validationsEmp.nameResEmp = 'Nombre debe contener de 8 a 20 caracteres.'
                isValid = false
            }
            if (!isValid) {
                this.setState({validationsEmp})
            }

            return isValid
        }
    };

    validateOneUsu = (ev) => {
        if (ev.target.id === "register-formUsu") {
            const {name} = ev.target;
            const value = this.state.valuesUsu[name];
            let message = '';

            if (!value) {
                message = `${name} es requerido`
            }

            if (value && name === 'usernameUsu' && (value.length < 8 || value.length > 50)) {
                message = 'Nombre debe contener de 8 a 20 caracteres.'
            }

            if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                message = 'Formato de Email debe ser :  example@mail.com'
            }

            this.setState({
                validationsUsu: {
                    ...this.state.validationsUsu,
                    [name]: message
                }
            })
        }

    };
    validateOneEmp = (ev) => {
        const {name} = ev.target;
        const value = this.state.valuesEmp[name];
        let message = '';

        if (!value) {
            message = `${name} es requerido`
        }

        if (value && name === 'nameEmp' && (value.length < 8 || value.length > 50)) {
            message = 'Nombre debe contener de 8 a 20 caracteres.'
        }

        if (value && name === 'nameRespEmp' && (value.length < 8 || value.length > 50)) {
            message = 'Nombre debe contener de 8 a 20 caracteres.'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Formato de Email debe ser :  example@mail.com'
        }

        this.setState({
            validationsEmp: {
                ...this.state.validationsEmp,
                [name]: message
            }
        })
    };

    // render Selects
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/ciudades')
            .then(res => {
                // console.log(res)
                this.renderTopCities(res)
            })
            .catch(err => console.log(err));
    }

    renderTopCities(res) {
        let elems = [];

        res.data.obj.forEach(function (element) {
            elems.push(
                <Fragment key={element.id}>
                    <option value={element.id}>{element.name}</option>
                </Fragment>
            )
        });
        this.setState({rows: elems})
    }

    handleChangesUsu = (ev) => {
        console.log('esto es el ev', ev)
        this.setState({usercityUsu: ev.target.value})
    };
    handleChangesEmp = (ev) => {
        this.setState({usercityEmp: ev.target.value})
    };

    handleChangeUsu = (ev) => {
        const {name, value} = ev.target;
        this.setState({
            valuesUsu: {
                ...this.state.valuesUsu,
                [name]: value
            }
        })
    };

    handleChangeEmp = (ev) => {
        const {name, value} = ev.target;
        this.setState({
            valuesEmp: {
                ...this.state.valuesEmp,
                [name]: value
            }
        })
    };

    handleEmpresa = () => {
        // this.setState({ModalRotate: 'usuario'})
        if (this.state.ModalRotate === 'usuario') {
            this.setState({ModalRotate: 'empresa'})
        } else {
            this.setState({ModalRotate: 'usuario'})
        }
    };

    render() {
        $(function () {

            $('#login-form-link').click(function (ev) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                ev.preventDefault();
            });
            $('#register-form-link').click(function (ev) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                ev.preventDefault();
            });


        });
        return (
            <Fragment>
                <div className="modal-wrapper "
                     style={{
                         transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    <div className="modal-header">
                        <h3>© Tech Talent</h3>
                        {/*<button id="btn-empresa" type="button" className="btn btn-primary btn-lg ">*/}
                        <div className="back">
                            <i className="fa fa-1x fa-exchange"/>
                            {this.state.ModalRotate}
                        </div>

                        <span className="close-modal-btn" onClick={this.props.close}><i
                            className="fa fa-2x fa-window-close-o"/></span>
                    </div>
                    {/*flip inicio*/}
                    <div className="flip-container">
                        <div className="flipper">
                            {/*flip inicio*/}

                            {/*flip delante*/}
                            <div className="front"
                                 style={this.state.ModalRotate == 'empresa' ? {transform: 'rotateY(180deg)'} : {}}>
                                {/*flip delante*/}
                                {/*<div className="modal-header">*/}
                                {/*    <h3>© MERCAHOME</h3>*/}
                                {/*    <span className="close-modal-btn" onClick={this.props.close}><i*/}
                                {/*        className="fa fa-2x fa-window-close-o"/></span>*/}
                                {/*</div>*/}
                                <div className="modal-body">
                                    <div className="row formulario-row">
                                        <div className="col-md-12 col-md-offset-3">
                                            <div className="panel panel-login">
                                                <div className="panel-heading">
                                                    <div className="row formulario-row">
                                                        {/*<div className="col-xs-6">*/}
                                                        {/*    <a href="#" className="active" id="login-form-link">Iniciar*/}
                                                        {/*        sesión</a>*/}
                                                        {/*</div>*/}
                                                        {/*<div className="col-xs-6">*/}
                                                        {/*    <a href="#" id="register-form-link">Regístrate ahora</a>*/}
                                                        {/*</div>*/}
                                                        <div className="col-12">
                                                            <h2>Registro Usuario</h2>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                                <div className="panel-body">
                                                    <div className="row formulario-row">
                                                        <div className="col-lg-12">
                                                            {/*<p className="error">{this.state.logError}</p>*/}
                                                            {/*<p className="correcto">{this.state.logExito}</p>*/}
                                                            <p className="error">{this.state.RegErrorUsu}</p>
                                                            <p className="correcto">{this.state.RegExitoUsu}</p>
                                                            <form id="register-formUsu"
                                                                  onSubmit={(ev) => this.handleSubmit(ev)}
                                                                  method="post" role="form"
                                                                  ref={(registerUsu) => this.myFormRef = registerUsu}>
                                                                <div className="form-group">
                                                                    <input type="text"

                                                                           name="usernameUsu"
                                                                           onChange={this.handleChangeUsu}
                                                                           onBlur={this.validateOneUsu}

                                                                           autoComplete="nope"
                                                                           id="usernameUsu"
                                                                           tabIndex="1"
                                                                           className="form-control"
                                                                           placeholder="Nombre usuario"/>
                                                                    <p className="error">{this.state.validationsUsu.usernameUsu}</p>
                                                                </div>
                                                                {/*<div className="form-group">*/}
                                                                {/*    <input type="text"*/}

                                                                {/*           name="userStreet"*/}
                                                                {/*           onChange={this.handleChange}*/}
                                                                {/*           onBlur={this.validateOne}*/}

                                                                {/*           autoComplete="nope"*/}
                                                                {/*           id="userStreet"*/}
                                                                {/*           tabIndex="2"*/}
                                                                {/*           className="form-control"*/}
                                                                {/*           placeholder="Calle"/>*/}
                                                                {/*    <p className="error">{this.state.validations.userStreet}</p>*/}
                                                                {/*</div>*/}
                                                                {/*--option*/}
                                                                <div className="form-group">
                                                                    <select name="usercityUsu" className="form-control"
                                                                            defaultValue={this.state.valuesUsu.usercityUsu}
                                                                            onChange={this.handleChangesUsu}>
                                                                        <option>Selecciona Ciudad</option>
                                                                        {this.state.rows}
                                                                    </select>
                                                                    <p className="error">{this.state.validationsUsu.usercityUsu}</p>
                                                                </div>
                                                                {/*option*/}
                                                                <div className="form-group">
                                                                    <input type="email"

                                                                           name="emailUsu"
                                                                           onChange={this.handleChangeUsu}
                                                                           onBlur={this.validateOneUsu}

                                                                           autoComplete="nope"
                                                                           id="emailUsu" tabIndex="3"
                                                                           className="form-control"
                                                                           placeholder="Correo electronico"/>
                                                                    <p className="error">{this.state.validationsUsu.emailUsu}</p>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="password"

                                                                           name="passwordUsu"
                                                                           onChange={this.handleChangeUsu}
                                                                           onBlur={this.validateOneUsu}

                                                                           autoComplete="nope"
                                                                           id="passwordUsu"
                                                                           tabIndex="4" className="form-control"
                                                                           placeholder="Contraseña"/>
                                                                    <p className="error">{this.state.validationsUsu.passwordUsu}</p>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="password"

                                                                           name="confirmPasswordUsu"
                                                                           onChange={this.handleChangeUsu}
                                                                           onBlur={this.validateOneUsu}
                                                                           autoComplete="nope"

                                                                           id="confirmPasswordUsu" tabIndex="5"
                                                                           className="form-control"
                                                                           placeholder="Confirmar contraseña"/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="row formulario-row">
                                                                        <div className="col-sm-6 col-sm-offset-3">
                                                                            <input type="submit"
                                                                                   name="register-submitUsu"
                                                                                   id="register-submitUsu" tabIndex="4"
                                                                                   className="form-control btn btn-register"
                                                                                   value="Crear cuenta"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*flip fin delante*/}
                                </div>
                                {/*flip fin delante*/}

                                {/*flip fin*/}
                            </div>
                            {/*flip inicio detras*/}
                            <div className="back"
                                 style={this.state.ModalRotate == 'empresa' ? {transform: 'rotateY(0deg)'} : {}}>
                                <p className="error">{this.state.RegErrorEmp}</p>
                                <p className="correcto">{this.state.RegExitoEmp}</p>
                                <form id="register-formEmp"
                                      onSubmit={(ev) => this.handleSubmit(ev)}
                                      method="post" role="form"
                                      ref={(registerEmp) => this.myFormRef = registerEmp}>
                                    <div className="form-group">
                                        <input type="text"

                                               name="nameEmp"
                                               onChange={this.handleChangeEmp}
                                               onBlur={this.validateOneEmp}

                                               autoComplete="nope"
                                               id="NameEmp"
                                               tabIndex="1"
                                               className="form-control"
                                               placeholder="Nombre de Empresa"/>
                                        <p className="error">{this.state.validationsEmp.nameEmp}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"

                                               name="nameResEmp"
                                               onChange={this.handleChangeEmp}
                                               onBlur={this.validateOneEmp}

                                               autoComplete="nope"
                                               id="nameResEmp"
                                               tabIndex="2"
                                               className="form-control"
                                               placeholder="Nombre de responsable"/>
                                        <p className="error">{this.state.validationsEmp.nameResEmp}</p>
                                    </div>
                                    {/*--option*/}
                                    <div className="form-group">
                                        <select name="usercityEmp" className="form-control"
                                                defaultValue={this.state.valuesEmp.usercityEmp}
                                                onChange={this.handleChangesEmp}>
                                            <option>Selecciona Ciudad</option>
                                            {this.state.rows}
                                        </select>
                                        <p className="error">{this.state.validationsEmp.usercityEmp}</p>
                                    </div>
                                    {/*option*/}
                                    <div className="form-group">
                                        <input type="email"

                                               name="emailEmp"
                                               onChange={this.handleChangeEmp}
                                               onBlur={this.validateOneEmp}

                                               autoComplete="nope"
                                               id="emailEmp" tabIndex="3"
                                               className="form-control"
                                               placeholder="Correo electronico"/>
                                        <p className="error">{this.state.validationsEmp.emailEmp}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password"

                                               name="passwordEmp"
                                               onChange={this.handleChangeEmp}
                                               onBlur={this.validateOneEmp}

                                               autoComplete="nope"
                                               id="passwordEmp"
                                               tabIndex="4" className="form-control"
                                               placeholder="Contraseña"/>
                                        <p className="error">{this.state.validationsEmp.passwordEmp}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password"

                                               name="confirmPasswordEmp"
                                               onChange={this.handleChangeEmp}
                                               onBlur={this.validateOneEmp}
                                               autoComplete="nope"

                                               id="confirmPasswordEmp" tabIndex="5"
                                               className="form-control"
                                               placeholder="Confirmar contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row formulario-row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="register-submitEmp"
                                                       id="register-submitEmp" tabIndex="4"
                                                       className="form-control btn btn-register"
                                                       value="Crear cuenta"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            {/*flip fin detras*/}
                        </div>
                        {/*flip fin*/}
                    </div>
                    <div className="modal-footer">
                        {/*<button className="btn-cancel" onClick={this.props.close}>CLOSE</button>*/}
                        {this.state.ModalRotate == 'usuario' ?
                            <button className="btn-continue btn-primary raised" onClick={this.handleEmpresa}><i
                                className="fa fa-3x fa-building-o"/>
                                Registro Empresas
                            </button>
                            :
                            < button className="btn-continue" onClick={this.handleEmpresa}><i
                                className="fa fa-3x fa-users"/>
                                Registro Usuarios
                            </button>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Modalregister;
