import React, { Component } from "react";

//REDUX
import { connect } from "react-redux";
import { addProduct, showCategories, showPoolCat, subtractProduct } from '../actions'
//CSS
import './styles/CardProduct.css'

import BotonUs from "../components/BotonUs";
import {showOfertaById} from '../actions';
class CardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    //DETECCIÓN Y SUSTITUCIÓN DE IMÁGENES ROTAS POR URL FALLIDA
    // componentDidMount() {
    //     setTimeout(function () {
    //         let arrImg = document.getElementsByTagName('img');
    //         for (let element of arrImg) {
    //             // element.src = './assets/images/merca_dev.png';
    //             if (!element.complete || typeof element.naturalWidth == "undefined" || element.naturalWidth == 0) {
    //                 // image was broken, replace with your new image
    //                 // element.src = './public/assets/images/merca_dev.png';
    //                 element.src = 'http://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300';
    //             }
    //         }
    //     }, 1000);
    // }

   
    render() {
        const { data } = this.props
        return (
            <div className="card" data-idTecno = {data.tecnologia_id}>
                <div className="card bg-light mb-3" >
                    <div className="card-body">
                        <h3 className="card-title">{data.puesto}</h3>
                        <h6 className="card-subtitle">{data.name}</h6>
                        <p className="ciudad">{data.name_ciu}</p>
                        <p className="card-text">{data.descripcion}</p>
                        <p className="info text-info">{data.tipo_cont} | {data.tipo_jorn} | {data.salario_min} - {data.salario_max}</p>
                    
                     </div>
                    <BotonUs data = {data.oferta_id} />
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

export default connect(mapStateToProps)(CardProduct);
