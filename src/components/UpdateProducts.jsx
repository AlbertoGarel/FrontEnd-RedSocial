import React, {Component, Fragment} from 'react';
import Rows from '../components/Rows'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {connect} from "react-redux";
import {showCategories} from "../actions";


class UpdateProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        showCategories();
        // showPoolCat(this.state.cat);
    }

    renderSearchList(){
        return this.props.busqueda.map((product) => {
            return (
                <tr key={product.id}>
                    <Rows data={product}/>
                </tr>
            )
        })
    }

    render() {

        return (
            <Fragment>
                {/*<div className="container mt-100">*/}
                    {/*<div className="row">*/}
                        <div className="col-md-12">
                            <div className="">
                                <div className="card-header">
                                    <h5>Editar campos haciendo 'click'</h5>
                                    <span>Click en campo para editar y click en botón para confirmar y guardar.</span>
                                </div>
                                <div className="card-block">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered" >
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Unidades</th>
                                                <th>Precio</th>
                                                <th>Volumen</th>
                                                <th>Categoria</th>
                                                <th>buttons</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {this.renderSearchList()}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                {/*</div>*/}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        busqueda: state.Search.list,
        categories: state.Categories.list,
    }

}

export default connect(mapStateToProps)( UpdateProducts);
