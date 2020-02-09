import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {showEstudios} from '../actions'
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";

/**
 * IMPORT OWN STYLES
 * */


class OptionSelectSalarios extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //  BUSCAR CON FILTRO SALARIOS
    }

    // renderOptionsSal() {
    //
    //     return this.props.est.map((element, index) => {
    //         return (
    //             <Fragment key={index}>
    //                 <option defaultValue={element.id}>{element.tipo_est}</option>
    //             </Fragment>
    //         )
    //     })
    //
    // }

    render() {
        // console.log('props de ciu', this.props.ciu)
        return (
            <Fragment>
                <select multiple className="form-control" id="estudios_lista">
                    {/*{this.renderOptionsSal()}*/}
                </select>
            </Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        // est: state.Salario.list,
    }
}


export default connect(mapStateToProps)(OptionSelectSalarios);