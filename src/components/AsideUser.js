import React, {Component, Fragment} from 'react';

/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {showOfertaByExp} from '../actions';

/**
 * IMPORT OWN Components
 * */
import OptionSelectCiud from '../components/OptionSelectCiud';
import EstudiosSelectUser from '../components/EstudiosSelectUser';
import OptionSelectJornada from '../components/OptionSelectJornada';
import OptionSelectContrato from '../components/OptionSelectContrato';

import {showOfertas, showOfertaBySal} from '../actions';

class AsideUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorRange: 5,
        }
    }

    handler = () => {
        showOfertas();
    };

    handlerSal = (e) => {
        showOfertaBySal(e.target.dataset.value)
    };

    handlerRange() {
        let slider = document.getElementById("myRange");
        this.setState({valorRange: parseInt(slider.value)});
        if(parseInt(slider.value) === 5){
            showOfertaByExp(50);
        }else{
            showOfertaByExp(this.state.valorRange);
        }


    }

    render() {

        return (
            <Fragment>
                <li>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Buscando por...</label>
                        <input type="email" className="form-control" defaultValue={this.props.data}
                               readOnly/>
                        <small id="emailHelp" className="form-text text-muted">Refleja el último criterio de
                            búsqueda.
                        </small>
                    </div>
                </li>
                <li>
                    <div className="text-center">
                        <button type="button" className="btn btn-secondary text-center"
                                onClick={() => this.handler()}
                        >ver todas
                        </button>
                    </div>
                </li>
                <li>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="ciudades_lista">Provincias</label>

                            <OptionSelectCiud/>

                        </div>
                    </form>
                </li>
                <li>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="ciudades_lista">Estudios</label>

                            <EstudiosSelectUser/>

                        </div>
                    </form>
                </li>
                <li>
                    <div className="dropdown text-center">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        >
                            Salario mínimo
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"

                        >
                            <p className="dropdown-item" data-value="10000" onClick={(e) => this.handlerSal(e)}>10.000 €</p>
                            <p className="dropdown-item" data-value="12000" onClick={(e) => this.handlerSal(e)}>12.000 €</p>
                            <p className="dropdown-item" data-value="14000" onClick={(e) => this.handlerSal(e)}>14.000 €</p>
                            <p className="dropdown-item" data-value="15000" onClick={(e) => this.handlerSal(e)}>16.000 €</p>
                            <p className="dropdown-item" data-value="20000" onClick={(e) => this.handlerSal(e)}>más d 20.0000 €</p>
                        </div>
                    </div>
                </li>
                <li>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="ciudades_lista">Experiencia</label>
                            <input list="tickmarks" type="range" className="custom-range" min="0" max="5" step="1"
                                   id="myRange" onChange={() => this.handlerRange()}/>
                            <p className="text-center text-secondary" style={{fontSize: 1.3 + 'em'}}>

                                años:

                                <span className="text-info ml-2"
                                      style={{fontSize: 1.1 + 'em'}}
                                      id="value"
                                >
                                        {this.state.valorRange}
                                      </span>
                            </p>

                        </div>
                    </form>
                </li>
                <li>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="ciudades_lista">Jornada</label>
                            <OptionSelectJornada/>
                        </div>
                    </form>
                </li>
                <li>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="ciudades_lista">Contratos</label>
                            <OptionSelectContrato/>
                        </div>
                    </form>
                </li>
            </Fragment>
        )
    }

}

export default AsideUser;