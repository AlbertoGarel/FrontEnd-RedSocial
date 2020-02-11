import React, { Component } from "react";
import axios from 'axios';


//REDUX
import { connect } from "react-redux";
import './styles/ControlOfertas.css'
class ControlOfertas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    muestraEstado(id) {

        switch (this.props.data.tipo_est) {

            case "aceptado":
                return "aceptado";

            case "revisando":
                return "revisando";

            case "rechazado":
                return "rechazado";

            default: console.log("error style");
        }
    }

    borrarOferta(id) {

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

        axios.delete('http://localhost:8000/api/user/ofertas/delete/'+id, userHeader)
            .then(res => {

                return res
                
            }).catch(err => console.log(err))
    }

    render() {
        const { data } = this.props;

        return (
           
                <div className="card mt-2 mb-2">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p class="h5">{data.puesto}</p>
                            <p id="interlineado" class="h6" style={{ color: 'grey' }}>{data.name}</p>
                            <p id="textoDescripción">{data.descripcion}</p>
                            <p className="info text-info">{data.tipo_cont} | {data.tipo_jorn}</p>
                            <p className="info text-info">{data.salario_min}€ - {data.salario_max}€</p>
                            <p className={this.muestraEstado()}>{data.tipo_est}</p>
                            <button onClick={() => this.borrarOferta(data.oferta_id)} id="botonX" type="button" class="btn btn-outline-danger btn-sm">x</button>

                        </blockquote>
                    </div>
                </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        // user: state.Users,
        // items: state.Carrito.list
    }
}

export default connect(mapStateToProps)(ControlOfertas);
