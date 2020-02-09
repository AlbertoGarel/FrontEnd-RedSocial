import React, { Component } from "react";
import axios from 'axios';
import store from "../store";


//REDUX
import { connect } from "react-redux";
import { showOfertaById, openNowCart } from '../actions'
//CSS
import '../components/styles/BotonUs.css';

class BotonUs extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }
    muestraOferta =(id)=>{
        // axios.get('http://localhost:8000/api/ofertas/'+ id)
        // .then(res => {
        //    console.log(res.data.obj);
        //     store.dispatch({type: SHOW_OFERTABYID, payload: res.data.obj})
        // }).catch(err => console.log(err))

        // showOfertaById(id);

        showOfertaById(id);
        openNowCart();
    }

    render() {
        // console.log(this.props.data.id);
        
        return (
            <div className="botonLlamada">
                <button
                    id="botonVer"
                    type="button"
                    className="btn btn-primary btn-lg raised float-right mr-3 mb-3"
                    onClick={() => this.muestraOferta(this.props.data)}
                >Solicitar
                </button>
            </div>
        )
    }
}



export default BotonUs;