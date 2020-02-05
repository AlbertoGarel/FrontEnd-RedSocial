import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
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
import '../containers/styles/Category.css'
import '../containers/styles/AdminView.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";
import TopProducts from '../components/TopProducts'
/**
 * IMPORT REDUCERS
 * */
import UpdateProducts from "../components/UpdateProducts";
import TopCities from "../components/TopCities";

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        render: 'crud'
        };

    }
    cambia = (arg) =>{
        this.setState({render: arg})
    }

    handlerRender = () => {

        switch (this.state.render) {
            case 'crud':
                return (
                    <UpdateProducts/>
                );
            case 'topVentas':
                return(
                    <div className="container">
                        <TopProducts/>
                    </div>
                );
                case 'topPaises':
                return(
                    <div className="container">
                        <TopCities/>
                    </div>
                );
            default:
                return(
                    <div className="cover">
                        <img className="w-50" src="./assets/images/no_products.png" alt="no products"/>
                        <p className="p_error">No hay categorías</p>
                    </div>
                )
        }
    };


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav">
                        <section className="cont-principal">
                            <ul id="categorias" className="admin">

                                <li
                                    onClick={() => this.cambia('crud')}
                                >Actulizar productos
                                </li>
                                <li
                                    onClick={() => this.cambia('topVentas')}
                                >Más vendidos
                                </li>
                                <li
                                    onClick={() => this.cambia('topPaises')}
                                >Top Ciudades
                                </li>

                            </ul>

                            <div className="contenido-admin">
                                <div className="titulo mx-auto mb-2 ">
                                    <h2>Panel de administración</h2>

                                    <hr/>
                                    <div className="row pt-5 pb-5">
                                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                                            <img src="./assets/images/merca_dev.png" alt="logo mercahome" id="nav_logo"
                                                 className="mb-2 mb-sm-0" style={{maxWidth:25+'em'}}/>
                                        </div>

                                        <div className="col-sm-12 col-md-6 d-flex flex-column flex-wrap">
                                            <div className="align-self-md-end align-self-sm-center align-self-center">
                                                <h3 className="text-black-50">
                                                    <i className="fa fa-1x fa-area-chart"/><span className="mr-2"/>
                                                    {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user_name : ''}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {this.handlerRender()}

                            </div>
                        </section>
                    </main>
                    <hr/>
                </Wrapper>
            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        categories: state.Categories.list,
        poolCat: state.PoolCat.list,
        busqueda: state.Search.list,
        desc: state.Search.desc
    }
};

export default connect(mapStateToProps)(AdminView);
