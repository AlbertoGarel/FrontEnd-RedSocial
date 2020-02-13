import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tecnologias from "../reducers/Tecnologias";
import '../components/styles/CardEmpresa.css';
import { showUsuarioByOferta, OfertasEmpresa } from '../actions';
import axios from 'axios';
import store from '../store';
import { UPDATE_OFERTASEMP } from '../actions'

class CardEmpresa extends Component {
    constructor() {
        super();
        this.state = {}
    }


    deleteOferta(id) {

        let userHeader = '';
        // if (JSON.parse(localStorage.getItem('user')).tipo === 'empresa') {

        const tokenUser = JSON.parse(localStorage.getItem('user')).token;

        userHeader = {
            headers: {
                'Authorization': `Bearer ${tokenUser}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
            // };

        }

        axios.delete('http://localhost:8000/api/empresa/oferta-delete/' + id, userHeader)
        .then(res => {
            const list = store.getState()?.OfertasEmpresa?.list?.filter(oferta => oferta.id !== id)
            store.dispatch({ type: UPDATE_OFERTASEMP, payload: list })
              

            }).catch(err => console.log(err))
    }

    muestraUsuarios = (id) => {
        //    alert(id)
        showUsuarioByOferta(id);

    }

    render() {


        const { data, emp, city, tecnos } = this.props;
        // const danger = <span className="badge badge-pill badge-warning ml-3">Completar ficha</span>;


        return (
            <div id="ofertasEmp" className="card m-2" style={{ border: 1 + 'px solid #EFF0F1' }}>
                <div className="card-body p-3" id="ofertasEmp">
                    <div className="superior">
                        <h5>{data.puesto}</h5>
                        <button onClick={() => this.deleteOferta(data.id)} id="eliminar" type="button" class="btn btn-outline-danger btn-sm">x</button>
                    </div>
                    <hr className="mb-3" />
                    <div className="inferior">
                        <p className="card-text">Lugar del puesto: <strong
                            className="text-info">{city.map((element) => {
                                if (element.id == emp.ciudad_id) {
                                    return element.name_ciu;
                                }
                            })}</strong>
                        </p>
                        <p className="card-text">Tecnologia: <strong className="text-info">{tecnos.map((element) => {
                            if (element.id == data.tecnologia_id) {
                                return element.name_tec;
                            }
                        })}</strong>
                        </p>
                        <p className="card-text">Exp. mínima: <strong className="text-info">{data.experiencia_min}
                            {data.experiencia_min > 1 ? ' años' : ' año'}</strong></p>
                        <p className="card-text">Salario: <strong
                            className="text-info">{data.salario_min}€ - {data.salario_max
                            }€</strong></p>
                        <p className="card-text"><strong className="text info"></strong></p>

                        <button onClick={() => this.muestraUsuarios(this.props.data.id)} id="botonVer" type="button" class="btn btn-success btn-sm float-right">Ver</button>
                    </div>
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        emp: state.Empresa,
        city: state.Ciudades.list,
        tecnos: state.Tecnologias.list,

    }
}

export default connect(mapStateToProps)(CardEmpresa)