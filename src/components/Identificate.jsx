import React, {Component, Fragment} from 'react';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 * IMPORT OWN STYLES
 * */
import './styles/Identificate.css';
import {connect} from "react-redux";
import {logOut} from "../actions";

class Identificate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handlerLogout = () => {
        let paramsBody = {email: JSON.parse(localStorage.getItem('user')).email};
        let paramsHeaders = {headers: {Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}};
        logOut(paramsBody, paramsHeaders);
    };


    render() {
        const {evento, user} = this.props;

        return (
            <div className="dropdown open">
                <label className="dropdown-toggle menu-item__label"
                       id="dropdownMenu5" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                    {user.username ? `Hola, ${user.username}` : 'Identificate'}
                </label>
                <i className="fa fa-2x fa-chevron-down"/>
                <div className="dropdown-menu">
                    <h1 className="dropdown-item">{user.username ? user.username : 'Invitado'}</h1>
                    <p className="lugar_entrega dropdown-item">
                        {/*{user.address ? user.address : 'Entregar en...'}*/}
                    </p>
                    <div className="dropdown-divider"/>
                    {user.username ?
                        <Fragment>
                            <a className="dropdown-item info" href="/mispedidos">
                                <i className="fa fa-2x fa-pencil-square-o"/>
                                <span>Editar Perfil</span></a>
                            {/*<a className="dropdown-item info" href="/">*/}
                            {/*    <i className="fa fa-2x fa-user"/>*/}
                            {/*<span>Cuenta</span>*/}
                            {/*</a>*/}
                        </Fragment>
                        :
                        <button id="identificate_btn" type="button" className="btn btn-lg btn-block"
                                onClick={evento}>Identificate
                        </button>
                    }
                    <div className="dropdown-divider"/>
                    {/*-----perfil------*/}
                    <p className="dropdown-item info">
                        {!user.username ?
                            <i className="fa fa-lg fa-question info"/>
                            :
                            <i className="fa fa-lg fa-check text-success"/>
                        }
                        <span>Nombre: {user.username}</span>
                    </p>
                    <p className="dropdown-item info">
                        {!user.prim_apellido ?
                            <i className="fa fa-2x fa-commenting"/>
                            :
                            <i className="fa fa-lg fa-check text-success"/>
                        }
                        <span>Apellidos: {user.prim_apellido} {user.seg_apellido}</span>
                    </p>
                    <p className="dropdown-item info">
                        {!user.email ?
                            <i className="fa fa-2x fa-commenting"/>
                            :
                            <i className="fa fa-lg fa-check text-success"/>
                        }
                        <span>Email: {user.email}</span>
                    </p>
                    <p className="dropdown-item info">
                        {!user.Ciudad_id ?
                            <i className="fa fa-2x fa-commenting"/>
                            :
                            <i className="fa fa-lg fa-check text-success"/>
                        }
                        <span>Ciudad: {user.ciudad_id}</span>
                    </p>
                    <p className="dropdown-item info">
                        {!user.Ciudad_id ?
                            <i className="fa fa-2x fa-commenting"/>
                            :
                            <i className="fa fa-lg fa-check text-success"/>
                        }
                        <span>Apellidos: {user.ciudad_id}</span>
                    </p>
//completar sólo con campos no completos
                    {/*--------------*/}
                    {user.username ?
                        <button className="dropdown-item info"
                                onClick={() => this.handlerLogout()}>
                            <i className="fa fa-2x fa-sign-out" style={{transform: 'rotate(180deg)'}}/>
                            <span>Logout</span>
                        </button>
                        :
                        ''
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.Users
    }
}

export default connect(mapStateToProps)(Identificate);
