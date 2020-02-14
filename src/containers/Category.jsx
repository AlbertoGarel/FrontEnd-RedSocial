// ---------------------------------------------------------
import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Wrapper from '../components/Wrapper';
import OptionSelectCiud from '../components/OptionSelectCiud';
import Showproducts from "../components/ShowProducts";

import {connect} from 'react-redux';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 *  IMPORT STYLES
 * */
import './styles/App.css';
import {showCiudades} from "../actions";
import axios from "axios";


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "promoción",
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
            validationsPerfil: {
                inputName: '',
                inputPrim_ape: '',
                inputSeg_ape: '',
                inputTelefono: '',
                inputAddress: ''
            },
            valuesPerfil: {
                inputName: '',
                inputPrim_ape: '',
                inputSeg_ape: '',
                inputTelefono: '',
                inputAddress: ''
            },
            sexo: 'hombre',
            city: 1,
            correcto: 'alert alert-success oculto'
        }
        this.myFormRef = React.createRef();
    }


    componentDidMount() {
        showCiudades()
    }

    changeMultiSelect() {
        // this.select.current.style.color = 'tomato'

    }

    //validaciones perfil
    validateOnePerfil = (ev) => {
        // if (ev.target.id === "perfil") {
// alert(ev.target.id)
        const {name} = ev.target;
        const value = this.state.valuesPerfil[name];
        let message = '';

        // if (!value) {
        //     message = `Error, es requerido`
        // }
        //
        // if (value && name === 'inputName' && (value.length < 3 || value.length > 50)) {
        //     message = 'Nombre debe contener de 8 a 20 caracteres.'
        // }
        // if (value && name === 'inputPrim_ape' && (value.length < 3 || value.length > 50)) {
        //     message = 'Nombre debe contener de 8 a 20 caracteres.'
        // }
        // if (value && name === 'inputSeg_ape' && (value.length < 3 || value.length > 50)) {
        //     message = 'Nombre debe contener de 8 a 20 caracteres.'
        // }
        // if (value && name === 'inputAddress' && (value.length < 3 || value.length > 50)) {
        //     message = 'Nombre debe contener de 8 a 20 caracteres.'
        // }
        //
        // if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        //     message = 'Formato de Email debe ser :  example@mail.com'
        // }

        this.setState({
            validationsPerfil: {
                ...this.state.validationsPerfil,
                [name]: message
            }
        })
        // }
    };

    validateAll = (ev) => {
        // const {usercityUsu, usercityEmp} = this.state;
        const {inputName, inputPrim_ape, inputSeg_ape, inputTelefono, inputAddress} = this.state.valuesPerfil;
        // const {nameEmp, nameResEmp, emailEmp, passwordEmp, confirmPasswordEmp} = this.state.valuesEmp;
        const validationsPerfil = {
            inputName: '',
            inputPrim_ape: '',
            inputSeg_ape: '',
            inputTelefono: '',
            inputAddress: ''
        };
        let isValid = true;

        // if (ev.target.id === "register-formUsu") {
            if (!inputName) {
                validationsPerfil.inputName = 'Nombre es requerido.';
                isValid = false
            }

        if ((!inputName) || (inputName && inputName.length < 3) || (inputName.length > 20)) {
            validationsPerfil.inputName = 'Nombre debe contener de 3 a 20 caracteres.'
            isValid = false
        }
        if (!inputPrim_ape) {
            validationsPerfil.inputPrim_ape = 'Primer apellido es requerido.';
            isValid = false
        }

        if ((!inputPrim_ape) || (inputPrim_ape && inputPrim_ape.length < 3) || (inputPrim_ape.length > 20)) {
            validationsPerfil.inputPrim_ape = 'Primer apellido debe contener de 3 a 20 caracteres.'
            isValid = false
        }
        if (!inputSeg_ape) {
            validationsPerfil.inputSeg_ape = 'Segundo apellido es requerido.';
            isValid = false
        }

        if ((!inputSeg_ape) || (inputSeg_ape && inputSeg_ape.length < 3) || (inputSeg_ape.length > 20)) {
            validationsPerfil.inputSeg_ape = 'Segundo apellido debe contener de 8 a 20 caracteres.'
            isValid = false
        }
        if (!inputAddress) {
            validationsPerfil.inputAddress = 'Dirección es requerido.';
            isValid = false
        }

            if ((!inputAddress) || (inputAddress && inputAddress.length < 3) || (inputAddress.length > 20)) {
                validationsPerfil.inputAddress = 'Dirección debe contener de 8 a 20 caracteres.'
                isValid = false
            }



        if (!isValid) {
            this.setState({validationsPerfil})
        }

        return isValid
        // }
    }
    handleChangePerfil = (ev) => {
        const {name, value} = ev.target;
        this.setState({
            valuesPerfil: {
                ...this.state.valuesPerfil,
                [name]: value
            }
        })
    };

    handlerSex = (ev) => {
        this.setState({sexo: ev.target.value})
    }
    handlerCity = (ev) => {
        alert(ev.target.value)
        this.setState({city: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const isValid = this.validateAll(ev);

        if (!isValid) {
            return false
        }

        // const values = JSON.stringify(this.state);
        // if (ev.target.id === "register-formUsu") {
        let paramsBody = {
            "name": this.state.valuesPerfil.inputName,
            // "email": this.state.valuesPerfil.i
            "prim_apellido": this.state.valuesPerfil.inputPrim_ape,
            "seg_apellido": this.state.valuesPerfil.inputSeg_ape,
            "telefono": this.state.valuesPerfil.inputTelefono,
            "direccion": this.state.valuesPerfil.inputAddress,
            "ciudad_id": this.state.city,
            "sexo": this.state.sexo,
        };

        let userHeader = '';
         if(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).tipo === 'usuario'){

            const tokenUser = JSON.parse(localStorage.getItem('user')).token;
             userHeader = {
                headers: {
                    'Authorization': `Bearer ${tokenUser}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            };
         }
        axios.post('http://127.0.0.1:8000/api/user/update', paramsBody, userHeader)
            .then(res => {
                this.setState({
                    RegExitoUsu: res.data.message,
                    RegErrorUsu: '',
                    correcto: 'alert alert-success'
                });
                setTimeout(function(){
                    this.setState({correcto: 'alert alert-success oculto'})
                }.bind,2000)
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


    };

    renderCities() {
        return this.props.ciud.map((element, index) => {
            return (
                <Fragment key={index}>
                    <option value={element.id}
                        // onChange={()=>this.handlerCity(element.id)}
                    >{element.name_ciu}</option>
                </Fragment>
            )
        })
    }

    render() {

        return (
            <Fragment>
                <Wrapper>
                    <main className="my_container compens_nav">
                        <section className="cont-principal" id="contactoUser">
                            <div className="pb-5 pr-5 pl-5 shadow-lg">
                                <div className="container-fluid">
                                    <h1 className="m-3 text-center pt-5">Perfil de usuario</h1>
                                    <div className="row">
                                        <div className="col-8">
                                            <h2 className="m-3">Perfil de usuario</h2>
                                            <hr className="mb-5"/>
                                            {/*---mensajes de error y acierto---*/}
                                            <div className="" role="alert">
                                                {this.state.RegExitoUsu}
                                            </div>
                                            {/*------*/}
                                            <section className="d-flex justify-content-between align-items-center">
                                                <div className="card" style={{width: 22 + 'rem'}}>
                                                    <img
                                                        src="https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg"
                                                        className="card-img-top" alt="..."/>
                                                </div>
                                                {/*<div className="input-group mb-3 justify-content-end">*/}
                                                {/*    <div className="input-group-prepend">*/}
                                                {/*    <span className="input-group-text"*/}
                                                {/*          id="inputGroupFileAddon01">Upload</span>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="custom-file col-6">*/}
                                                {/*        <input type="file" className="custom-file-input"*/}
                                                {/*               id="inputGroupFile01"*/}
                                                {/*               aria-describedby="inputGroupFileAddon01"/>*/}
                                                {/*        <label className="custom-file-label"*/}
                                                {/*               htmlFor="inputGroupFile01">Choose*/}
                                                {/*            file</label>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </section>
                                            <div className="datos p-3 mb-3">
                                                <form id="perfil"
                                                      onSubmit={(ev) => this.handleSubmit(ev)}
                                                      method="post"
                                                      role="form"
                                                      ref={(perfil) => this.myFormRef = perfil}
                                                >
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputName">Nombre:</label>
                                                            <input type="text" className="form-control"
                                                                   id="inputName"

                                                                   placeholder={this.props.username}
                                                                   name="inputName"
                                                                   onChange={this.handleChangePerfil}
                                                                   onBlur={this.validateOnePerfil}

                                                                   // placeholder="Nombre"
                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputName}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputPrim_ape">Primer apellido:</label>
                                                            <input type="text" className="form-control"
                                                                   id="inputPrim_ape"

                                                                   name="inputPrim_ape"
                                                                   onChange={this.handleChangePerfil}
                                                                   onBlur={this.validateOnePerfil}

                                                                   placeholder="Primer apellido"
                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputPrim_ape}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputSeg_ape">Segundo apellido:</label>
                                                            <input type="text" className="form-control"
                                                                   id="inputSeg_ape"

                                                                   name="inputSeg_ape"
                                                                   onChange={this.handleChangePerfil}
                                                                   onBlur={this.validateOnePerfil}

                                                                   placeholder="Segundo apellido"

                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputSeg_ape}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputSeg_ape">Telefono registrado:</label>
                                                            <input type="tel"
                                                                   // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                                                   className="form-control"
                                                                   placeholder="999 999 999"
                                                                   id="inputTelefono"

                                                                   name="inputTelefono"
                                                                   onChange={this.handleChangePerfil}
                                                                   onBlur={this.validateOnePerfil}

                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputTelefono}</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress">Dirección:</label>
                                                        <input type="text" className="form-control"
                                                               id="inputAddress"
                                                               placeholder="Calle San Mateo"

                                                               name="inputAddress"
                                                               onChange={this.handleChangePerfil}
                                                               onBlur={this.validateOnePerfil}

                                                        />
                                                        <p className="error">{this.state.validationsPerfil.inputAddress}</p>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputCity">Provincia:</label>
                                                            <select className="form-control" id="ciudades_lista"
                                                                    defaultValue={this.state.city}
                                                                    onChange={(ev) => this.handlerCity(ev)}
                                                            >
                                                                {this.renderCities()}
                                                            </select>
                                                            {/*<p className="error">{this.state.validationsPerfil.cityPerfil}</p>*/}
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputZip">Sexo:</label>
                                                            <select className="form-control" id="inputZip"
                                                                    defaultValue={this.state.sexo}
                                                                    onChange={(ev) => this.handlerSex(ev)}
                                                            >
                                                                <option value="Hombre"
                                                                >
                                                                    Hombre
                                                                </option>
                                                                <option value="Mujer"
                                                                >
                                                                    Mujer
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                   id="gridCheck"/>
                                                            <label className="form-check-label" htmlFor="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Modificar
                                                    </button>
                                                </form>

                                                {/*------*/}
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h2 className="m-3">Datos de Login</h2>
                                            <hr className="mb-5"/>
                                            <img style={{margin: 0+' auto'}} className="w-50 text-center d-block" src="https://images.vexels.com/media/users/3/136498/isolated/preview/588187d92d423fb320f4a4cf8b2486c5-icono-de-candado-abierto-by-vexels.png" alt=""/>
                                            <div className="datos p-3 mb-3">
                                                <form action="">
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputEmail4">Email:</label>
                                                            <input type="email" className="form-control"
                                                                   id="inputEmail4"/>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputPassword4">Password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputPassword4"/>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputPassword4">Confirmar
                                                                password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputPassword4"/>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Modificar
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="">
                                                <h2 className="m-3">Datos para Ficha</h2>
                                                <hr className="mb-5"/>
                                                <div className="datos p-3 mb-3">
                                                    <form action="">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlTextarea1">Sobre mí:</label>
                                                            <textarea className="form-control"
                                                                      id="exampleFormControlTextarea1"
                                                                      rows="3"/>
                                                            <div className="form-group">
                                                                <label htmlFor="inputState">Tecnología:</label>
                                                                <select id="inputState" className="form-control">
                                                                    //options
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputState">Estudios:</label>
                                                                <select id="inputState" className="form-control">
                                                                    //options
                                                                </select>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary"

                                                            >Modificar
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <hr/>
                </Wrapper>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        ciud: state.Ciudades.list,
        id: state.Users.id,
        username: state.Users.username,
        prim_apellido: state.Users.prim_apellido,
        seg_apellido: state.Users.seg_apellido,
        email: state.Users.email,
        password: state.Users.password,
        about: state.Users.about,
        ciudad_id: state.Users.ciudad_id,
        direccion: state.Users.direccion,
        imagen: state.Users.imagen,
        sexo: state.Users.sexo,
        especialidad: state.Users.especialidad,
        tecnologia_id: state.Users.tecnologia_id,
        estudios_id: state.Users.estudios_id,
        telefono: state.Users.telefono,
        token: state.Users.token,
    }
}

export default connect(mapStateToProps)(Category);
