import React, { Component } from "react";

//REDUX
import { connect } from "react-redux";
import { addProduct, showCategories, showPoolCat, subtractProduct } from '../actions'
//CSS
import './styles/UsuariosByOferta.css'

import { showOfertaById, cambioEstado } from '../actions';

class UsuariosByOferta extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    estado(id, num){
        

       
         cambioEstado(id, num);
       
        
    }

    

    render() {
        const { data } = this.props;

        return (

            <div className="card bg-light mb-3">
                <div className="card-header" >
                    <h1 id="sizeTexto" className="card-text">{data.name} {data.prim_apellido} {data.seg_apellido}</h1>
                    <p className="card-text">{data.descripcion}</p>
                    <p className="card-text">{data.direccion}</p>
                </div>
                <div className="card-body">
                    <p className="textoTitulo">Contacto</p>
                    <hr className="mb-2" />
                    <p className="card-text"> Teléfono: <span className="text-info"> {data.telefono}</span>  </p>
                    <p className="card-text">  E-mail: <span className="text-info"> {data.email}</span>  </p>
                    <p className="card-text">Estudios:<span className="text-info"> {data.tipo_est}</span>  </p>
                    <p className="card-text">Tecnología:<span className="text-info"> {data.name_tec}</span>  </p>
                </div>
                <div className="card-body">
                    <p className="textoTitulo">Experiencia</p>
                    <hr className="mb-2" />
                    <p className="card-text">{data.puesto}</p>
                    <p>{data.fecha_inicio} | {data.fecha_fin}</p>
                    <p className="card-text">{data.about}</p>
                </div>
                <div className="botonSelect">
                    <button onClick={() => this.estado(data.ofer_user_id, 2)} id="botonSizeA" type="button" class="btn btn-success shadow">Aceptar</button>
                    <button onClick={() => this.estado(data.ofer_user_id, 3)} id="botonSizeR" type="button" class="btn btn-danger shadow">Rechazar</button>
                </div>

            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        // user: state.Users,
        // items: state.Carrito.list
        estado: state.cambioEstado.list
    }
}

export default connect(mapStateToProps)(UsuariosByOferta);