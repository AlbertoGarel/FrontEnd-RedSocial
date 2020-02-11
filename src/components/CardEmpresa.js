import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import BotonUs from "./BotonUs";






class CardEmpresa extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }



    render(){
        const {data} = this.props;
        return(
            <div className="card text-center">
                <img src={data.img} alt="" className="img-fluid w-25" />
                <div className="card-header">
                    {data.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.puesto}</h5>
                    <p className="card-text">{data.descripcion}</p>
                    <hr/>
                    <p className="card-text">lugar del puesto: {data.ciudad_id}</p>
                    <p className="card-text">Responsable: {data.name_responsable}</p>
                    <p className="card-text">{data.descripcion}</p>
                </div>
                <div>
                    <span>{data.web}</span>
                    <h4>sobre nosotros: {data.about}</h4>
                </div>
                <div className="card-footer text-muted d-flex justify-content-around align-items-center">
                    <span>{data.cif}</span>
                    <span>{data.email}</span>
                    <span>{data.direccion}</span>
                    <span>{data.telefono}</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(CardEmpresa)