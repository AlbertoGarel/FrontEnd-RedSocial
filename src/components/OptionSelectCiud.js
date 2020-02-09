import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {showCiudades, showByProvincias} from '../actions'
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";


class OptionSelectCiud extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        showCiudades()
    }

    renderOptionsCiud() {

        return this.props.ciud.map((element, index) => {
            return (
                <Fragment key={index}>
                    <option defaultValue={element.id}
                            onClick={()=>this.handler(element.id)}
                    >{element.name_ciu}</option>
                </Fragment>
            )
        })

    }
    handler = (paramBusquedaCiudad) =>{
        showByProvincias(paramBusquedaCiudad,);
    }

    render() {

        return (
            <Fragment>
                <select multiple className="form-control" id="ciudades_lista">
                    {this.renderOptionsCiud()}
                </select>
            </Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        ciud: state.Ciudades.list,
    }
}


export default connect(mapStateToProps)(OptionSelectCiud);