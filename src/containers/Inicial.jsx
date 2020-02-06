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
    showOfertaById,
    showOfertas,
    showCategories,
    showPoolCat,
    sortByPrice,
    searchDelete
} from "../actions";
import CardProduct from "../components/CardProduct";
import SortBtn from "../components/SortBtn";

class Inicial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: "Agua",
            btn: false,
            render: 'category'
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
        showOfertas();
        showCategories();
        showPoolCat(this.state.cat);
    }

    renderCategoriesList() {
        if (this.props.categories.length === 0) {
            return (
                <div className="cover">
                    <img className="w-50" src="./assets/images/no_products.png" alt="no products" />
                    <p className="p_error">No hay categorías</p>
                </div>
            );
        }
        return this.props.categories.map((category) => {
            return (
                <Fragment key={category.id}>
                    <li id={category.category} key={category.id} onClick={() => this.handleCategory(category.category)}>
                        <i
                            className="fa fa-2x fa-chevron-right" />elemento
                    </li>
                    <hr />
                </Fragment>
            )
        })
    }

    renderPoolCategories() {
        // if (this.props.desc.length > 2) {
        //     if (this.state.render !== 'search') this.setState({render: 'search'});
        //
        //     return this.props.busqueda.map((product) => {
        //         return (
        //             <Fragment key={product.id}>
        //                 <CardProduct data={product}/>
        //             </Fragment>
        //         )
        //     })
        // }
        return this.props.ofertas.map((product) => {
            if (this.state.render !== 'category') this.setState({ render: 'category' });
            return (
                <Fragment key={product.id}>
                    <CardProduct data={product} />
                </Fragment>
            )
        })

    }

    handleCategory = (category) => {
        this.setState({ cat: category });
        showPoolCat(category);
        searchDelete();

    };

    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav" id="categorias">
                        <section className="cont-principal">
                            <div id="secCategorias">
                                <ul id="categorias">
                                    {/*{this.renderCategoriesList()}*/}
                                    <li>dsvsdvbsddsbbs</li>
                                    <li>dsvsdvbsddsbbs</li>
                                    <li>dsvsdvbsddsbbs</li>
                                    <li>dsvsdvbsddsbbs</li>
                                    <li>dsvsdvbsddsbbs</li>
                                </ul>
                            </div>
                            <div className="contenido">
                                {/* <div className="titulo mx-auto mb-2 ">
                                <h2>Muestra elementos</h2>
                                {
                                    (this.state.render === 'category') ?
                                        <SortBtn clickHandler={this.outputEvent} data={this.state.btn} />
                                        : <SortBtn clickHandler={this.outputEvent} data={this.state.btn}
                                            tipo={"d-none"} />
                                }
                                <hr />
                            </div> */}
                                <div className="buscador">
                                    <input id="input-buscador" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    <button id="button-buscador" type="button" class="btn btn-secondary">Buscar</button>
                                </div>
                                <div className="cards">
                                    <div className="columna">
                                        <div className="yo">
                                            {this.renderPoolCategories()}
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
        ofertas: state.Ofertas.list
    }
}


export default connect(mapStateToProps)(Inicial);





