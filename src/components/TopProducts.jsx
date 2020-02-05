import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './styles/TopProducts.css'

import 'bootstrap/dist/js/bootstrap.bundle.min';


class TopProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

componentDidMount() {
        axios.get('http://localhost:3000/products/top')
            .then(res=>{
                this.renderTopProducts(res)
            })
            .catch(err=>console.log(err));
}

    renderTopProducts(res){
           let elems=[];
       res.data.map((product) => {

               elems.push(

                   <tr key={product.Product.id}>
                       <td>{product.Product.id}</td>
                       <td>{product.Product.name}</td>
                       <td>{product.Product.ud}</td>
                       <td>{product.Product.volume}</td>
                       <td>{product.qty_total}</td>
                       <td>{product.price_total.toFixed(2)}</td>
                   </tr>

       )
        })
        console.log(elems)
        this.setState({rows: elems})
    }

    render() {

        return (
            <Fragment>
                {/*<div className="container mt-100">*/}
                {/*<div className="row">*/}
                <div className="col-md-12">

                    <div className="">
                        <div className="card-header">
                            <h1 style={{textAlign:'center', color:'#009660'}}>TOP VENTAS PRODUCTOS</h1>
                        </div>
                        <div className="card-block">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered" >
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Unidades</th>
                                        <th>Volumen</th>
                                        <th>Cantidad total</th>
                                        <th>Precio total</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    { this.state.rows}


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



export default TopProducts;
