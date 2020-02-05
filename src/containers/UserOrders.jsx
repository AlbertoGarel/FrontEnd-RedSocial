import React, {Component, Fragment} from 'react';
import axios from 'axios';
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
import '../components/styles/UserOrders.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";


class UserOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };

    }

    componentDidMount() {
        let paramsURL = JSON.parse(localStorage.getItem('user')).id;
        let paramsBody = {email: JSON.parse(localStorage.getItem('user')).email};
        let paramsHeaders = {
            headers: {
                Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`,
                "Content-Type": "application/json"
            }
        };
        axios.post(`http://localhost:3000/orders/?user=${paramsURL}`, paramsBody, paramsHeaders)
            .then(res => {
                this.renderTopProducts(res)
            })
            .catch(err => console.log(err));
    }

    renderTopProducts(res) {
        let elems = [];
        res.data.ordersList.map((item, index) => {

            elems.push(
            <div className="card-block" key={index}>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered margin-bottom">
                        <thead>
                        <tr>
                            <th colSpan="3" style={{backgroundColor:"#D3F2CF"}}>FECHA</th>
                            <th colSpan="3" style={{backgroundColor:"#D3F2CF"}}>TOTAL</th>
                        </tr>
                        <tr>
                            <td colSpan="3">{item.createdAt.split('T')[0]}</td>
                            <td colSpan="3" style={{backgroundColor:"#f2f2f2"}}>{item.total.toFixed(2)}€</td>
                        </tr>
                        <tr>
                            <td colSpan="6" style={{textAlign:'center',verticalAlign:'middle',backgroundColor:"#D3F2CF"}}>Contenido del pedido</td>
                        </tr>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>ud</th>
                            <th>Price</th>
                            <th>Cant</th>
                            <th>Total producto</th>
                        </tr>
                        </thead>
                        <tbody>

                        {item.products.map((product, index)=>{
                            return (
                                <tr key={index + 200}>
                                    <td> <img style={{width: 4 + 'em'}} src={product.Product.image} alt="imagen producto"/></td>
                                    <td>{product.Product.name}</td>
                                    <td>{product.Product.ud}</td>
                                    <td>{product.Product.price.toFixed(2)}€</td>
                                    <td>{product.qty}</td>
                                    <td>{product.current_price.toFixed(2)}€</td>
                                </tr>
                                )

                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            )
        });
        this.setState({rows: elems})
    }


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav">
                        <div className="container">
                            <h1 className="pt-3 pb-3 text-black-50 text-center"
                                style={{fontSize: 2 + 'em', marginTop: 5 + 'em'}}>Tus compras</h1>
                            <hr/>
                            <div className="row pt-5 pb-5">
                                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <img src="./assets/images/merca_dev.png" alt="logo mercahome" id="nav_logo"
                                         className="mb-2 mb-sm-0"/>
                                </div>

                                <div className="col-sm-12 col-md-6 d-flex flex-column flex-wrap">
                                    <div className="align-self-md-end align-self-sm-center align-self-center">
                                        <h3 className="text-black-50">
                                            <i className="fa fa-1x fa-user-o text-dark"/><span className="mr-2"/>
                                            {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user_name : ''}
                                        </h3>
                                        <h3 className="text-black-50">
                                            <i className="fa fa-1x fa-street-view text-dark"/><span className="mr-2"/>
                                            {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).address : ''}
                                        </h3>
                                        <h3 className="text-black-50">
                                            <i className="fa fa-1x fa-envelope-o text-dark"/><span className="mr-2"/>
                                            {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : ''}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {this.state.rows}

                        </div>
                    </main>
                    <hr/>
                </Wrapper>
            </Fragment>
        )
    }
}


export default UserOrders;
