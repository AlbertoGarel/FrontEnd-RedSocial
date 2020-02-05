import React, {Component} from "react";

//REDUX
import {connect} from "react-redux";
import {addProduct, showCategories, showPoolCat, subtractProduct} from '../actions'
//CSS
import './styles/CardProduct.css'

class CardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    //DETECCIÓN Y SUSTITUCIÓN DE IMÁGENES ROTAS POR URL FALLIDA
    componentDidMount() {
        setTimeout(function () {
            let arrImg = document.getElementsByTagName('img');
            for (let element of arrImg) {
                // element.src = './assets/images/merca_dev.png';
                if (!element.complete || typeof element.naturalWidth == "undefined" || element.naturalWidth == 0) {
                    // image was broken, replace with your new image
                    // element.src = './public/assets/images/merca_dev.png';
                    element.src = 'http://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300';
                }
            }
        }, 1000);
    }

    render() {

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pr-0 pl-0">
                <div className="card">
                    <div className="position-relative">
                        <img className="card-img-top" src="" alt=""/>
                        <span className="product-cell__image-overlay"/>
                    </div>
                    <div className="card-body">
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <p className="card-text font-weight-bold">
                            //
                            <span className="card-text">      </span>
                        </p>
                    </div>
                    <div className="buttons d-flex align-items-center">

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // user: state.Users,
        // items: state.Carrito.list
    }
}

export default connect(mapStateToProps)(CardProduct);
