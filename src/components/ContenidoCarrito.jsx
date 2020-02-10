import React, { Component, Fragment } from "react";
import axios from 'axios';
import store from "../store";
import SHOW_OFERTABYID from '../reducers/ofertas';


//REDUX
import { connect } from "react-redux";
import { addProduct, showCategories, showPoolCat, subtractProduct, showOfertaById, showCiudades } from '../actions'
//CSS
import '../components/styles/ContenidoCarrito.css';
import { func } from "prop-types";

class Contenidocarrito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classSuccess: 'alert alert-success oculto',
            classError: 'alert alert-danger oculto',
            message: '',
            error: ''
        }
    }

    componentDidMount() {

    }

    addOferta(id) {
        let userHeader = '';
        if (JSON.parse(localStorage.getItem('user')).tipo === 'usuario') {

            const tokenUser = JSON.parse(localStorage.getItem('user')).token;
            userHeader = {
                headers: {
                    'Authorization': `Bearer ${tokenUser}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            };
        }
        let paramsBody = {
            'user_id': JSON.parse(localStorage.getItem('user')).id,
            'oferta_id': id
        }

        axios.post('http://localhost:8000/api/user/ofertas/create', paramsBody, userHeader)
            .then(res => {

                if (res.data.message) {
                    this.setState({ classSuccess: 'alert alert-success absoluto', message: res.data.message })

                    setTimeout(function () {
                        this.setState({ classSuccess: 'alert alert-success oculto' })

                    }.bind(this), 2000)
                }
                if (res.data.error) {
                    this.setState({ classError: 'alert alert-danger absoluto', error: res.data.error })
                    setTimeout(function () {
                        this.setState({ classError: 'alert alert-danger oculto' })

                    }.bind(this), 2000)
                }
            }).catch(err => console.log(err))
    }


    render() {
        // console.log(this.props.data.id);
        // alert(JSON.parse(localStorage.getItem('user').id));
        const { data } = this.props;
        return (
            <Fragment>
                {/*<div className="card-deck col-12 bg-warning">*/}
                <div className="card col-12 bg-light">
                    <div class={this.state.classSuccess}>
                        <strong>{this.state.message}</strong>
                    </div>
                    <div class={this.state.classError}>
                        <strong>{this.state.error}</strong>
                    </div>
                    <div id="cabecera">
                        <img
                            src="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg"
                            className="card-img-top" alt="..." />
                        <div>
                            <h5>{data.name}</h5>
                            <hr />
                            <h6>Sobre nosotros...</h6>
                            <p>{data.about}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="cont-texto" className="bg-light">
                            <h3 className="card-title">{data.puesto}</h3>
                            <h6 className="card-subtitle text-info">{data.name_ciu}</h6>
                            <hr className="w-75 mx-auto" />
                            <h6 className="">Descripción:</h6>
                            <p className="card-text">{data.descripcion}</p>
                            <h6>Tecnología:</h6>
                            <p className="card-text">{data.name_tec}</p>
                            <h6>Estudios mínimos:</h6>
                            <p className="card-text">{data.tipo_est}</p>
                            <h6>Experiencia mínima:</h6>
                            <p className="card-text">{data.experiencia_min}</p>
                            <h6>Condiciones:</h6>
                            <p className="info text-info">{data.tipo_cont} | {data.tipo_jorn} | {data.salario_min} - {data.salario_max}</p>
                            <h6></h6>
                        </div>

                    </div>
                    <button id="botonVer" type="button"
                        className="btn btn-primary btn-lg raised float-right mr-3 mb-3"
                        onClick={() => this.addOferta(data.id)}
                    >
                        Solicitar
                    </button>
                </div>

            </Fragment>
        )
    }
}

export default Contenidocarrito;