import React, {Component, Fragment} from "react";
import axios from 'axios';
import store from "../store";
import SHOW_OFERTABYID from '../reducers/ofertas';


//REDUX
import {connect} from "react-redux";
import {addProduct, showCategories, showPoolCat, subtractProduct, showOfertaById, showCiudades} from '../actions'
//CSS
import '../components/styles/ContenidoCarrito.css';

class Contenidocarrito extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        // console.log(this.props.data.id);

        return (
            <Fragment>
                {/*<div className="card-deck col-12 bg-warning">*/}
                    <div className="card col-12 bg-light">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>fgfgfg
                            </p>
                        </div>
                    </div>
                {/*</div>*/}
            </Fragment>
        )
    }
}

export default Contenidocarrito;