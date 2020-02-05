import React, { Component } from "react";

//REDUX
import { connect } from "react-redux";
import { addProduct, showCategories, showPoolCat, subtractProduct } from '../actions'
//CSS
import './styles/CardProduct.css'

class CardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    //DETECCIÓN Y SUSTITUCIÓN DE IMÁGENES ROTAS POR URL FALLIDA
    // componentDidMount() {
    //     setTimeout(function () {
    //         let arrImg = document.getElementsByTagName('img');
    //         for (let element of arrImg) {
    //             // element.src = './assets/images/merca_dev.png';
    //             if (!element.complete || typeof element.naturalWidth == "undefined" || element.naturalWidth == 0) {
    //                 // image was broken, replace with your new image
    //                 // element.src = './public/assets/images/merca_dev.png';
    //                 element.src = 'http://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300';
    //             }
    //         }
    //     }, 1000);
    // }

    render() {

        return (
            <div className="card">
                <div class="card bg-light mb-3" >
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
