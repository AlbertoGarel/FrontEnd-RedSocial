import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import Tecnologias from "../reducers/Tecnologias";


class CardEmpresa extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }


    render() {

        const {data, emp, city, tecnos} = this.props;
        const danger = <span className="badge badge-pill badge-warning ml-3">Completar ficha</span>;

        return (
            <div className="card m-3" style={{border: 1 + 'px solid #EFF0F1'}}>
                <div className="card-header">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src={emp.imagen_logo} alt="" className="img-fluid w-25"/>
                        <div className="d-flex flex-column align-items-start">
                            <span>cif: <span className="text-secondary">{!emp.name ? danger : emp.name}</span></span>
                            <span>cif: <span className="text-secondary">{!emp.cif ? danger : emp.cif}</span></span>
                            <span>email: <span
                                className="text-secondary">{!emp.email ? danger : emp.email}</span></span>
                            <span>direccion: <span
                                className="text-secondary">{!emp.direccion ? danger : emp.direccion}</span></span>
                            <span>web: <span
                                className="text-secondary">{!emp.web ? danger : emp.web}</span></span><span>telefono: <span
                            className="text-secondary">{!emp.telefono ? danger : emp.telefono}</span></span>
                        </div>
                    </div>
                    <hr className="mb-3 mt-3"/>
                    <h4>Puesto: <strong>{data.puesto}</strong></h4>
                    <hr/>
                </div>
                <div className="card-body p-3 d-flex justify-content-around align-items-center">
                    <div className="d-flex flex-column">
                        <p className="card-text">lugar del puesto: <strong
                            className="text-info">{city.map((element) => {
                            if (element.id == emp.ciudad_id) {
                                return element.name_ciu;
                            }
                        })}</strong>
                        </p>
                        <p className="card-text">tecnologia: <strong className="text-info">{tecnos.map((element) => {
                            if (element.id == data.tecnologia_id) {
                                return element.name_tec;
                            }
                        })}</strong>
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="card-text">exp. mínima: <strong className="text-info">{data.experiencia_min}
                            {data.experiencia_min > 1 ? 'años' : 'año'}</strong></p>
                        <p className="card-text">salario: <strong
                            className="text-info">{data.salario_min} - {data.salario_max
                        }</strong></p>
                        <p className="card-text"><strong className="text info"></strong></p>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="card-text"><strong className="text info"></strong></p>
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
        tecnos: state.Tecnologias.list
    }
}

export default connect(mapStateToProps)(CardEmpresa)