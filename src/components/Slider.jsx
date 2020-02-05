import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {showSliderProducts} from "../actions";
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
import './styles/Slider.css';


class Slider extends Component {

    componentWillMount() {
       showSliderProducts();
    }

    renderSliderList() {
        if (this.props.sliderProducts?.length === 0) {
            return (
                <Fragment>
                    <div className="carousel-item active">
                        <img className="d-block w-25"
                             data-src="holder.js/900x300?auto=yes&bg=777&fg=555&text=First slide"
                             alt="First slide"
                             src="https://prod-mercadona.imgix.net/20191208/89/51189/vlc1/51189_00_01.jpg?fit=crop&h=500&w=500"
                        />
                        <span className="product-cell__image-overlay"></span>
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Próximamente en Promoción</h4>
                            <p>En su MERCAHOME más cercano</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-25"
                             data-src="holder.js/900x300?auto=yes&bg=666&fg=444&text=Second slide"
                             alt="Second slide"
                             src="https://prod-mercadona.imgix.net/20191208/25/51625/vlc1/51625_00_01.jpg?fit=crop&h=500&w=500"
                        />
                        <span className="product-cell__image-overlay"></span>
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Próximamente en Promoción</h4>
                            <p>En su MERCAHOME más cercano</p>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            let clase = 'carousel-item ';
            return this.props.sliderProducts?.map((product, index) => {
                return (
                    <div className={index === 0 ? clase.concat('active') : clase} key={product.id}>
                        <img className="d-block w-25"
                             data-src="holder.js/900x300?auto=yes&bg=777&fg=555&text=First slide"
                             alt={product.name}
                             src={product.image}
                        />
                        <span className="product-cell__image-overlay"></span>
                        <div className="carousel-caption d-md-block">
                            <h4>{product.price} €<span>{product.volume}</span> </h4>
                            <p>{product.name}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div id="slider">
                <h3>Productos del momento</h3>
                <p>Selección de productos destacados</p>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        {/*<ol className="carousel-indicators">*/}
                        {/*    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>*/}
                        {/*    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>*/}
                        {/*</ol>*/}
                        <div className="carousel-inner" role="listbox">

                            {this.renderSliderList()}

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/*<hr/>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sliderProducts: state.Slider.list
    }
};

export default connect(mapStateToProps)(Slider);
