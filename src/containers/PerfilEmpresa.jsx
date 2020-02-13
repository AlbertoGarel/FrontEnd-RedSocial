// ---------------------------------------------------------
import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Wrapper from '../components/Wrapper';
import OptionSelectCiud from '../components/OptionSelectCiud';
import Showproducts from "../components/ShowProducts";
import store from "../store";

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
import {showCiudades, UPDATE_EMPRESA} from "../actions";
import axios from "axios";


class PerfilEmpresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name
            // web
            // direccion
            // name_responsable
            // telefono
            // ciudad
            // cif

            // email
            // password
            // about
            // imagen_logo


            validationsPerfil: {
                //bloque 1
                // inputname: '',
                // inputweb: '',
                // inputdireccion: '',
                // inputname_responsable: '',
                // inputtelefono: '',
                // inputciudad: '',
                // inputcif: '',
                // bloque2
                inputemail: '',
                inputpassword: '',
                inputinputcif: '',
            },
            valuesPerfil: {
                inputname: '',
                inputweb: '',
                inputdireccion: '',
                inputname_responsable: '',
                inputtelefono: '',
                inputarea: '',
                inputemail: "",
                inputpassword: '',
                inputpassword2: ''
            },
            city: 1,
            passError: ''
        }
        this.myFormRef = React.createRef();
        this.myFormRefe = React.createRef();
    }


    componentDidMount() {
        showCiudades()
    }

    changeMultiSelect() {
        // this.select.current.style.color = 'tomato'

    }

    //validaciones perfil
    // validateOnePerfil = (ev) => {
    //     const {name} = ev.target;
    //     const value = this.state.valuesPerfil[name];
    //     let message = '';
    //
    //
    //     this.setState({
    //         validationsPerfil: {
    //             ...this.state.validationsPerfil,
    //             [name]: message
    //         }
    //     })
    //     // }
    // };

    handleChangePerfil = (ev) => {
        const {name, value} = ev.target;
        this.setState({
            valuesPerfil: {
                ...this.state.valuesPerfil,
                [name]: value
            }
        })
    };
    // if(this.state.inputemail)

    handlerCity = (ev) => {
        this.setState({city: ev.target.value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        if (this.state.valuesPerfil.inputpassword != this.state.valuesPerfil.inputpassword2) {
            this.setState({passError: 'no son iguales'})
            return false;
        }

        // let paramsBodyIn = '';
        let paramsBody = '';

        if (ev.target.name === 'login') {
            paramsBody = {
                "password": this.state.valuesPerfil.inputpassword,
                "email": this.state.valuesPerfil.inputemail
            }

        } else {
            paramsBody = {
                "name": this.state.valuesPerfil.inputname,
                "web": this.state.valuesPerfil.inputweb,
                "name_responsable": this.state.valuesPerfil.inputname_responsable,
                "telefono": this.state.valuesPerfil.inputtelefono,
                "direccion": this.state.valuesPerfil.inputdireccion,
                "ciudad_id": this.state.city,
                "about": this.state.valuesPerfil.inputarea,
            }
        }

        for(var key in paramsBody) {
            if(paramsBody.hasOwnProperty(key)){
                if(!paramsBody[key]){
                    // alert("vacia la propiedad "+key);
                    delete paramsBody[key];
                }
            }
        }
        console.log('definitivo', paramsBody)

        const tokenUser = JSON.parse(localStorage.getItem('user')).token;
        let userHeader = {
            headers: {
                'Authorization': `Bearer ${tokenUser}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',

            }
        };


        axios.post('http://127.0.0.1:8000/api/empresa/editar', paramsBody, userHeader)
            .then(res => {
                this.setState({
                    RegExitoUsu: res.data.message,
                });

                store.dispatch({type:UPDATE_EMPRESA, payload: paramsBody})


                // console.log('resd', res.obj);
                // if (res.status == 200) window.location.href = "/";
                // this.handleSubmit("login-form")
            })
            .catch(err => {
                this.setState({
                    RegErrorUsu: err.message,
                });
                console.log('resderr', err);
            });
        this.myFormRef.reset();
        this.myFormRefe.reset();


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
                                            <section className="d-flex justify-content-between align-items-center">
                                                <div className="card" style={{width: 18 + 'rem'}}>
                                                    <img
                                                        src="https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg"
                                                        className="card-img-top" alt="..."/>
                                                </div>
                                                <div className="input-group mb-3 justify-content-end">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text"
                                                          id="inputGroupFileAddon01">Upload</span>
                                                    </div>
                                                    <div className="custom-file col-6">
                                                        <input type="file" className="custom-file-input"
                                                               id="inputGroupFile01"
                                                               aria-describedby="inputGroupFileAddon01"/>
                                                        <label className="custom-file-label"
                                                               htmlFor="inputGroupFile01">Choose
                                                            file</label>
                                                    </div>
                                                </div>
                                            </section>
                                            <div className="datos p-3 mb-3">
                                                <form id="perfil"
                                                      onSubmit={(ev) => this.handleSubmit(ev)}
                                                      method="post"
                                                      name="perfil"
                                                      role="form"
                                                      ref={(perfil) => this.myFormRef = perfil}
                                                >
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputname">Nombre registrado: <span
                                                                className="badge badge-success">{this.props.datosEmp.name}</span></label>
                                                            <input type="text" className="form-control"
                                                                   id="inputName"

                                                                   placeholder={this.props.datosEmp.username}
                                                                   name="inputname"
                                                                   onChange={this.handleChangePerfil}

                                                                // placeholder="Nombre"
                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputName}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputweb">web: <span
                                                                className={!this.props.datosEmp.web ? "badge badge-danger" : "badge badge-success"}>
                                                                {!this.props.datosEmp.web ? 'sin registro' : this.props.datosEmp.web}
                                                            </span></label>
                                                            <input type="text" className="form-control"
                                                                   id="inputweb"

                                                                   name="inputweb"
                                                                   onChange={this.handleChangePerfil}


                                                                   placeholder="Primer apellido"
                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputPrim_ape}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputname_responsable">Nombre
                                                                responsable: <span
                                                                    className={!this.props.datosEmp.name_responsable ? "badge badge-danger" : "badge badge-success"}>
                                                                 {!this.props.datosEmp.name_responsable ? 'sin registro' : this.props.datosEmp.name_responsable}
                                                            </span></label>
                                                            <input type="text" className="form-control"
                                                                   id="inputname_responsable"

                                                                   name="inputname_responsable"
                                                                   onChange={this.handleChangePerfil}

                                                                   placeholder={this.props.datosEmp.nombre_responsable}

                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputSeg_ape}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputtelefono">Telefono registrado: <span
                                                                className={!this.props.inputtelefono ? "badge badge-danger" : "badge badge-success"}>
                                                                {!this.props.datosEmp.telefono ? 'sin registro' : this.props.datosEmp.telefono}
                                                            </span></label>
                                                            <input type="tel"
                                                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                                                   className="form-control"
                                                                   placeholder="999 999 999"
                                                                   id="inputtelefono"

                                                                   name="inputtelefono"
                                                                   onChange={this.handleChangePerfil}
                                                            />
                                                            <p className="error">{this.state.validationsPerfil.inputTelefono}</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputdireccion">Dirección registrado: <span
                                                            className={!this.props.datosEmp.direccion ? "badge badge-danger" : "badge badge-success"}>
                                                            {!this.props.datosEmp.direccion ? 'sin registro' : this.props.datosEmp.direccion}
                                                        </span></label>
                                                        <input type="text" className="form-control"
                                                               id="inputdireccion"
                                                               placeholder="Calle San Mateo"

                                                               name="inputdireccion"
                                                               onChange={this.handleChangePerfil}


                                                        />
                                                        <p className="error">{this.state.validationsPerfil.inputAddress}</p>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputciudad">Provincia registrado: <span
                                                                className={!this.props.ciudad_id ? "badge badge-danger" : "badge badge-success"}>
                                                                {!this.props.ciudad_id ? 'sin registro' : this.props.ciudad_id}
                                                            </span></label>
                                                            <select className="form-control" id="inputciudad"
                                                                    defaultValue={this.state.city}
                                                                    onChange={(ev) => this.handlerCity(ev)}
                                                            >
                                                                {this.renderCities()}
                                                            </select>
                                                            <p className="error">{this.state.validationsPerfil.cityPerfil}</p>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputcif">CIF: </label>
                                                            <input
                                                                className="form-control" id="inputcif"
                                                                name="inputcif"
                                                                value={this.props.datosEmp.cif}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputarea">Sobre nosotros:</label>
                                                        <textarea className="form-control rounded-0"
                                                                  id="inputarea" rows="10"
                                                                  onChange={this.handleChangePerfil}
                                                                  name="inputarea"/>
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
                                            <img src={this.props.datosEmp.imagen_logo}
                                                 className="w-50 img-fluid text-center" alt="logo de empresa"
                                                 style={{display: 'block', margin: 0 + ' auto'}}/>
                                            <div className="datos p-3 mb-3">
                                                <form id="login"
                                                      name="login"
                                                      onSubmit={(ev) => this.handleSubmit(ev)}
                                                      method="post"
                                                      role="form"
                                                      ref={(login) => this.myFormRefe = login}
                                                >
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputemail">Email registrado: <span
                                                                className={!this.props.datosEmp.email ? "badge badge-danger" : "badge badge-success"}>
                                                              {!this.props.datosEmp.email ? 'sin registro' : this.props.datosEmp.email}
                                                            </span></label>
                                                            <input type="email" className="form-control"
                                                                   id="inputemail"
                                                                   name="inputemail"
                                                                   onChange={this.handleChangePerfil}/>/>

                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputpassword">Password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputpassword"
                                                                   name="inputpassword"
                                                                   onChange={this.handleChangePerfil}/>
                                                        </div>
                                                        <p className="text-danger tetx-center">{this.state.passError}</p>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputpassword2">Confirmar
                                                                password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputpassword2"
                                                                   name="inputpassword2"
                                                                   onChange={this.handleChangePerfil}/>
                                                        </div>
                                                        <p>{this.props.emeilError}</p>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Modificar
                                                    </button>
                                                </form>
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
        // id: state.Users.id,
        // username: state.Users.username,
        // prim_apellido: state.Users.prim_apellido,
        // seg_apellido: state.Users.seg_apellido,
        // email: state.Users.email,
        // password: state.Users.password,
        // about: state.Users.about,
        // ciudad_id: state.Users.ciudad_id,
        // direccion: state.Users.direccion,
        // imagen: state.Users.imagen,
        // sexo: state.Users.sexo,
        // especialidad: state.Users.especialidad,
        // tecnologia_id: state.Users.tecnologia_id,
        // estudios_id: state.Users.estudios_id,
        // telefono: state.Users.telefono,
        // token: state.Users.token,
        datosEmp: state.Empresa
    }
}

export default connect(mapStateToProps)(PerfilEmpresa);