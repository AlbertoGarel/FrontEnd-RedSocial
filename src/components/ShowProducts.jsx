import React, {Component, Fragment} from "react";

import './styles/ShowProducts.css';
import {connect} from 'react-redux'
import {showTopProducts} from "../actions";
import CardProduct from "./CardProduct";

class Showproducts extends Component {

    componentWillMount() {

    }

    renderTopProducts() {
    }

    render() {
        return (
            <div className="container-fluid">
                <section className="d-flex justify-content-start flex-wrap">

                    <h1>CONTENEDOR</h1>

                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // topProducts: state.TopProducts.list,
        // busqueda: state.Search.list,
        // desc: state.Search.desc
    }
}

export default connect(mapStateToProps)(Showproducts);
