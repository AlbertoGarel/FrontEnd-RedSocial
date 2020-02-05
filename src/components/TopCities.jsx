import React, {Component, Fragment} from 'react';
import axios from 'axios';
// import './styles/TopCities.css'

import 'bootstrap/dist/js/bootstrap.bundle.min';


class TopCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/cities/top')
            .then(res=>{
                console.log(res)
                this.renderTopCities(res)
            })
            .catch(err=>console.log(err));
    }

    renderTopCities(res){
        let elems=[];
        res.data.map((city, index) => {

            elems.push(

                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{city.city}</td>
                    <td>{city.qty_total}</td>
                    <td>{city.price_total.toFixed(2)}</td>
                </tr>

            )
        });
        this.setState({rows: elems})
    }

    render() {

        return (
            <Fragment>
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
                                        <th>Pos</th>
                                        <th>Ciudad</th>
                                        <th>Unidades</th>
                                        <th>Precio Total</th>
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
            </Fragment>
        )
    }
}



export default TopCities;
