import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

/**
 * IMPORT OWN STYLES
 * */
import '../containers/styles/InicioEmpresa.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";
/**
 * IMPORT REDUCERS
 * */
import { showOfertasEmpresa, showCiudades, showTecnologias, showUsuarioByOferta } from '../actions';

import CardEmpresa from '../components/CardEmpresa'
import OfertasEmpresa from "../reducers/ofertasEmp";
import UsuariosByOferta from '../components/UsuariosByOferta';

class InicialEmpresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false,
            render: 'todas'
        };
        //bind function
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent() {
        if (this.state.btn === false) {
            this.setState({ btn: true });
        } else {
            this.setState({ btn: false });
        }

    }

    componentDidMount() {
        showCiudades();
        showTecnologias();
        if (this.state.render === 'todas') {
            showOfertasEmpresa()
            showUsuarioByOferta()

        } else {

        }

    }

    



    usuariosOferta = () => {
        return this.props.usuarioOferta.map((product, index) => {
            return (
                <Fragment key={index}>
                    <UsuariosByOferta data={product} />
                </Fragment>
            )

        });
    }


    renderToAside = () => {
        return this.props.ofertasEmp.map((product, index) => {
            return (
                <Fragment key={index}>
                    <CardEmpresa data={product} />
                </Fragment>
            )
        })
    }
    renderPoolRenders = () => {
        switch (this.props.controlBusq) {
            // case 'todas':
            //     return this.props.ofertasEmp.map((product, index) => {
            //         return (
            //             <Fragment key={index}>
            //                 <CardEmpresa data={product} />
            //             </Fragment>
            //         )
            //     });
            //     break;

            // default:
            //     return this.props.ofertasEmp.map((product, index) => {
            //         return (
            //             <Fragment key={index}>
            //                 <CardEmpresa data={product} />
            //             </Fragment>
            //         )

            //     });
        }
    };


    render() {

        const renderizado = this.props.controlBusq;

        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav" id="categorias">
                        <section className="cont-principal">
                            <div id="secCategorias">
                                <ul id="categorias">
                                    <h3 className="titulo">Tus Ofertas</h3>
                                    <hr className="mb-3" />

                                    {/*{this.renderCategoriesList()}*/}
                                    {this.renderToAside()}

                                </ul>
                            </div>
                            <div className="contenido">
                                <div className="titulo mx-auto mb-2 position-sticky">

                                    <h2 className="ml-3">
                                        {
                                            renderizado === 'todas' || '' ?
                                                <h2>Todas Las Ofertas</h2>
                                                :
                                                <h2>Usuarios Registrados <span className="text-info"
                                                    style={{ fontSize: 'inherit' }}>{renderizado}</span>
                                                </h2>
                                        }
                                    </h2>
                                    <hr className="mb-5" />
                                    {/*</div>*/}
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8">
                                            {/* {this.renderPoolRenders()} */}
                                            {this.usuariosOferta()}
                                        </div>
                                        <div style={{ backgroundColor: '#00ced114' }} className="col-4">
                                            <div className="container-flui">
                                                <div id="div_control_ofertas"
                                                    className="bg-info text-white shadow-lg mb-3">
                                                    <h2 id="control_ofertas">Crear oferta</h2>
                                                </div>
                                                <hr />
                                                <div className="col-8">
                                                    {/*{this.renderOfertasUs()}*/}
                                                </div>

                                                {/*------*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <hr />
                </Wrapper>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        ofertasEmp: state.OfertasEmpresa.list,
        usuarioOferta: state.UsuarioByOFerta.list,
        estado: state.cambioEstado.list
    }
}


export default connect(mapStateToProps)(InicialEmpresa);





