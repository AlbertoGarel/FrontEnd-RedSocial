import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'
import {openNowCart, closeNowCart} from '../actions'

import Contenidocarrito from '../components/ContenidoCarrito'
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
            // showClass: this.props.cartAction,
            message: ''
        };

    }

    componentDidMount() {

    }

    openCart = () => {
        // (this.state.showClass === 'noShow') ? this.setState({showClass: ''}) : this.setState({showClass: 'noShow'});
        // (this.state.showClass === 'noShow') ?  closeNowCart() : openNowCart();
        (this.props.cartAction === 'noShow') ?  openNowCart() : closeNowCart() ;
    };



    renderItemsOfertas(i) {
        if (this.props.ofertasById.length === undefined) {
            return (
                <Fragment>
                    <Contenidocarrito data={this.props.ofertasById}
                    />
                </Fragment>
            )
        }
    }




    render() {

        return (
            <Fragment>
                <button id="btn_carrito" style={{position: 'relative'}} onClick={this.openCart}>
                    <i className="fa fa-3x fa-object-ungroup"/>
                    <span style={
                        {
                            position: 'absolute',
                            top: 50 + '%',
                            left: 58 + '%',
                            transform: 'translate(' + '-' + 50 + '%' + ',' + '-' + 50 + '%)',
                            fontSize: 1.3 + 'em',
                            color: 'white',

                        }}> </span>
                </button>
                {/*<section id="carrito_container" className={this.state.showClass}>*/}
                <section id="carrito_container" className={this.props.cartAction}>
                    <div id="header_carrito">
                        <button id="btn_close_carrito" onClick={()=>closeNowCart()}>X</button>
                        <p className="lugar_entrega"><span style={{display: "block"}}>//</span> // </p>
                    </div>
                    <div id="body_carrito">
                    
                        {this.renderItemsOfertas()}

                    </div>
                    <hr/>
                </section>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        ofertasById: state.Ofertas.ofertasbyid,
        cartAction: state.Cart.showClass

    }
}

export default connect(mapStateToProps)(Carrito);
