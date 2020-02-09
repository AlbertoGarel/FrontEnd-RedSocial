import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {showJornada} from '../actions'
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

import {showOfertaByJor} from '../actions';


class OptionSelectJornada extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        showJornada()
    }

    handler = (busqueda) => {
        showOfertaByJor(busqueda)
    };

    renderOptionsJor() {
        return this.props.jorn.map((element, index) => {
            return (
                <Fragment key={index}>
                    <option defaultValue={element.id}
                            onClick={() => this.handler(element.id)}
                    >{element.tipo_jorn}</option>
                </Fragment>
            )
        })

    }

    render() {
        // console.log('props de ciu', this.props.ciu)
        return (
            <Fragment>
                <select multiple className="form-control" id="jornada_lista">
                    {this.renderOptionsJor()}
                </select>
            </Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        jorn: state.Jornada.list,
    }
}


export default connect(mapStateToProps)(OptionSelectJornada);