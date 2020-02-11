import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

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
import '../containers/styles/Inicial.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";
/**
 * IMPORT REDUCERS
 * */
import {
    showOfertaByCont,
    showOfertaByJor,
    showOfertaBySal,
    showByEstudios,
    showByProvincias, showOfertaByExp,
    showOfertaById,
    showOfertas,
    sortByPrice,
    showOfertasByUs
} from "../actions";
import CardProduct from "../components/CardProduct";
import SortBtn from "../components/SortBtn";
import ControlOfertas from "../components/ControlOfertas";
import AsideUser from "../components/AsideUser";

class Inicial extends Component {
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
        sortByPrice(this.state.btn);
    }

    componentDidMount() {
        if (this.state.render === 'todas') {
            showOfertas();
        } else {
            showByProvincias();
            showByEstudios();
            showOfertaByExp();
            showOfertaBySal();
            showOfertaByJor();
            showOfertaByCont();
        }
        showOfertasByUs();
    }

    renderCategoriesList() {

    }

    renderOfertasUs = () => {
        return this.props.ofertasByUsers.map((product, index) => {
            return (
                <Fragment key={index}>
                    <ControlOfertas data={product} />
                </Fragment>
            )

        });
    }

    renderPoolRenders = () => {
        switch (this.props.controlBusq) {
            case 'todas':
                return this.props.ofertas.map((product, index) => {
                    return (
                        <Fragment key={index}>
                            <CardProduct data={product} />
                        </Fragment>
                    )
                });
                break;
            case 'ciudad':
                if (!this.props.buscPorCiud.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorCiud.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'estudios':
                if (!this.props.buscPorEst.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorEst.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'experiencia':
                if (!this.props.buscPorExp.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorExp.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'salario':
                if (!this.props.buscPorSal.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorSal.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'jornada':
                if (!this.props.buscPorJor.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorJor.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'contrato':
                if (!this.props.buscPorCont.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.buscPorCont.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            case 'empresas':
                if (!this.props.porEmpresas.length) {
                    return (
                        <div className="cover">
                            <p className="p_error">No hay categorías</p>
                            <img className="w-25" src="./assets/images/checklist.png" alt="no products" />
                        </div>
                    )
                } else {
                    return this.props.porEmpresas.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <CardProduct data={product} />
                            </Fragment>
                        )
                    });
                }
                break;
            default:
                return this.props.ofertas.map((product, index) => {
                    return (
                        <Fragment key={index}>
                            <CardProduct data={product} />
                        </Fragment>
                    )

                });
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
                                    {/*{this.renderCategoriesList()}*/}
                                    <AsideUser data={renderizado} />
                                </ul>
                            </div>
                            <div className="contenido">
                                <div className="titulo mx-auto mb-2 position-sticky">
                                    {/*<div className="">*/}
                                    <div className="buscador">
                                        <input id="input-buscador" type="text" className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default" />
                                        <button id="button-buscador" type="button"
                                            className="btn btn-secondary">Buscar
                                        </button>
                                    </div>
                                    <h2 className="ml-3">{
                                        renderizado === 'todas' || '' ?
                                            <h2>Todas Las Ofertas</h2>
                                            :
                                            <h2>Filtrado por <span className="text-info"
                                                style={{ fontSize: 'inherit' }}>{renderizado}</span>
                                            </h2>
                                    }
                                    </h2>
                                    {
                                        (this.state.render === 'category') ?
                                            <SortBtn clickHandler={this.outputEvent} data={this.state.btn} />
                                            : <SortBtn clickHandler={this.outputEvent} data={this.state.btn}
                                                tipo={"d-none"} />
                                    }
                                    <hr className="mb-5" />
                                    {/*</div>*/}
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8">
                                            {this.renderPoolRenders()}
                                        </div>
                                        <div style={{ backgroundColor: '#00ced114' }} className="col-4">
                                            <div className="container-flui">
                                                <div id="div_control_ofertas" className="bg-info text-white shadow-lg mb-3">
                                                    <h2 id="control_ofertas">Control de tus ofertas</h2>
                                                </div>
                                                <hr />
                                                <div className="col-13">
                                                    {this.renderOfertasUs()}

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
        ofertas: state.Ofertas.list,
        buscPorCiud: state.Ofertas.porProvincia,
        buscPorEst: state.Ofertas.porEstudios,
        buscPorExp: state.Ofertas.porExperiencia,
        buscPorSal: state.Ofertas.porSalario,
        buscPorJor: state.Ofertas.porJornada,
        buscPorCont: state.Ofertas.porContrato,
        controlBusq: state.Ofertas.controlBusq,
        porEmpresas: state.Ofertas.porEmpresas,
        ofertasByUsers: state.OfertasByUs.list
    }
}


export default connect(mapStateToProps)(Inicial);





