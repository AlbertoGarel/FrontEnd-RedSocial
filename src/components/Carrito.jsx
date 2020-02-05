import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'
import {AddOrder} from '../actions'
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
import './styles/Carrito.css';
import CardProduct from "./CardProduct";

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showClass: 'noShow',
            message: ''
        };

    }


    openCart = () => {
        (this.state.showClass === 'noShow') ? this.setState({showClass: ''}) : this.setState({showClass: 'noShow'});
    };

    renderItemsToCart() {

    }


    render() {

        return (
            <Fragment>
                <button id="btn_carrito" style={{position:'relative'}} onClick={this.openCart}>
                    <i className="fa fa-3x fa-linkedin-square pintagris"></i>
                    <span style={
                        {position:'absolute',
                            top:50+'%',
                            left:58+'%',
                            transform: 'translate('+ '-' +50 + '%' + ','+ '-'+50+'%)',
                            fontSize: 1.3+'em',
                            color:'white',

                        }}> </span>
                </button>
                <section id="carrito_container" className={this.state.showClass}>
                    <div id="header_carrito">
                        <button id="btn_close_carrito" onClick={this.openCart}>X</button>
                        <p className="lugar_entrega"><span style={{display: "block"}}>//</span> // </p>
                    </div>
                    <div id="body_carrito">

                        {/*RENDER ELEMENTS*/}

                    </div>
                    <hr/>
                </section>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.Carrito.list,

    }
}

export default connect(mapStateToProps)(Carrito);
