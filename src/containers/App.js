import React, {Component, Fragment} from 'react';

/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Modal from "../components/Modal";
import Modalregister from '../components/Modalregister'
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            isShowing: false,
            isShowingReg: false,
        };
        this.textInput = React.createRef()
    }

    triggerOpenModalHandler = () => {
        this.setState({
            isShowing: true
        });
    };
    triggerOpenModalHandlerReg = () => {
        this.setState({
            isShowingReg: true
        });
    };

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    };
    closeModalHandlerReg = () => {
        this.setState({
            isShowingReg: false
        });
    };

    componentDidMount() {
//comprobamos la url para ocultar navegador
        let query = window.location.origin;
        let element = document.getElementById('nav');
        if(query === 'http://localhost:3000') {
            element.classList.add("oculto");
            // console.log('element',element.hasAttribute('class'))
        }

    }

    render() {
        return (
            <Fragment>
                <div id="intro" className="cont justify-content-between align-items-center" style={{
                    height: 100 + 'vh', backgroundImage: 'url("assets/icons/fondo.svg")'
                }}>
                    <a className="navbar-brand" href="/">
                        <img src="./assets/icons/logo_300.png" className="d-inline-block align-top" alt=""/>
                    </a>
                    <div id="buttons-cont" className="d-flex justify-content-end align-items-center"
                         style={{height: 10 + '%',}}>
                        <button type="button" className="btn btn-primary btn-lg raised"
                                onClick={this.triggerOpenModalHandler}>Login
                        </button>
                        <button type="button" className="btn btn-primary btn-lg raised"
                                onClick={this.triggerOpenModalHandlerReg}>Register
                        </button>
                    </div>

                    <h1 id="texto"></h1>

                    //modal1
                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        //
                    </Modal>
                    <Modalregister
                        className="modal"
                        show={this.state.isShowingReg}
                        close={this.closeModalHandlerReg}>
                        //
                    </Modalregister>
                </div>


                {/*<div className="flip-container" onTouchStart="this.classList.toggle('hover');">*/}
                {/*    <div className="flipper">*/}
                {/*        <div className="front">*/}

                {/*            <h1>delante</h1>*/}
                {/*        </div>*/}
                {/*        <div className="back">*/}
                {/*          */}
                {/*            <h1>detras</h1>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div id="intro" className="cont justify-content-between align-items-center" style={{*/}
                {/*    height: 100 + 'vh', backgroundImage: 'url("assets/icons/fondo.svg")'*/}
                {/*}}>*/}
                {/*    <div id="buttons-cont" className="d-flex justify-content-end align-items-center"*/}
                {/*         style={{height: 10 + '%',}}>*/}
                {/*        <button type="button" className="btn btn-primary btn-lg raised">Login</button>*/}
                {/*        <button type="button" className="btn btn-primary btn-lg raised">Register</button>*/}
                {/*    </div>*/}
                {/*    <img className="img-thumbnail" src="./assets/icons/logo_300.png" alt=""/>*/}
                {/*</div>*/}
            </Fragment>
        );
    }
}

export default App
;