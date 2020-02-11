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
        localStorage.removeItem( 'user' );
        window.location.href = "/";
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
                    <h1 className="dropdown-item">Hasta pronto, {user.username}</h1>
                        <button className="dropdown-item info"
                                onClick={() => this.handlerLogout()}>
                            <i className="fa fa-2x fa-sign-out" style={{transform: 'rotate(180deg)'}}/>
                            <span>Logout</span>
                        </button>
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
