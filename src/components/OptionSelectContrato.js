import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {showContratos} from '../actions'
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

import {showOfertaByCont} from '../actions';

class OptionSelectContrato extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        showContratos()
    }

    handler = (busqueda) =>{
        showOfertaByCont(busqueda)
    }


    renderOptionsCont() {
        return this.props.cont.map((element, index) => {
            return (
                <Fragment key={index}>
                    <option defaultValue={element.id}
                            onClick={()=>this.handler(element.id)}
                    >{element.tipo_cont}</option>
                </Fragment>
            )
        })

    }

    render() {

        return (
            <Fragment>
                <select multiple className="form-control" id="contratos_lista">
                    {this.renderOptionsCont()}
                </select>
            </Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        cont: state.Contratos.list,
    }
}


export default connect(mapStateToProps)(OptionSelectContrato);