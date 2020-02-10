import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {showEmpresas, showOfertaByEmp} from '../actions';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";
class OptionSelectEmpresa extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        showEmpresas();
    }

    handler = (busqueda) =>{
        showOfertaByEmp(busqueda)
    }

    renderOptionsEmp() {

        return this.props.emp.map((element, index) => {
            return (
                <Fragment key={index}>
                    <option defaultValue={element.id}
                            onClick={()=>this.handler(element.id)}
                    >{element.name}</option>
                </Fragment>
            )
        })}

    render(){
        return (
            <Fragment>
                <select multiple className="form-control" id="contratos_lista">
                    {this.renderOptionsEmp()}
                </select>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    
    return {
        emp: state.Empresas.list,
    }
}


export default connect(mapStateToProps)(OptionSelectEmpresa);