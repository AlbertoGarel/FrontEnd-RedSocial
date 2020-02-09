// ---------------------------------------------------------
import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Wrapper from '../components/Wrapper';
import Slider from '../components/Slider';
import Showproducts from "../components/ShowProducts";
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
/**
 *  IMPORT STYLES
 * */
import './styles/App.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "promoción"
        }
    }


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="my_container compens_nav">
                        <section className="cont-principal" id="contactoUser">
                            <div className="pb-5 pr-5 pl-5 shadow-lg">
                                <div className="container-fluid">
                                    <h1 className="m-3 text-center pt-5">Perfil de usuario</h1>
                                    <div className="row">
                                        <div className="col-8">
                                            <h2 className="m-3">Perfil de usuario</h2>
                                            <hr className="mb-5"/>

                                            {/*------*/}
                                            <section className="d-flex justify-content-between align-items-center">
                                                <div className="card" style={{width: 18 + 'rem'}}>
                                                    <img
                                                        src="https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg"
                                                        className="card-img-top" alt="..."/>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text"
                                                          id="inputGroupFileAddon01">Upload</span>
                                                    </div>
                                                    <div className="custom-file col-6">
                                                        <input type="file" className="custom-file-input"
                                                               id="inputGroupFile01"
                                                               aria-describedby="inputGroupFileAddon01"/>
                                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose
                                                            file</label>
                                                    </div>
                                                </div>
                                            </section>
                                            <div className="datos p-3 mb-3">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputName">Nombre</label>
                                                            <input type="text" className="form-control" id="inputName"/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputPrim_ape">Primer apellido</label>
                                                            <input type="text" className="form-control"
                                                                   id="inputPrim_ape"/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputSeg_ape">Segundo apellido</label>
                                                            <input type="text" className="form-control"
                                                                   id="inputSeg_ape"/>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputSeg_ape">Telefono</label>
                                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                   className="form-control"
                                                                   placeholder="999 999 999"
                                                                   id="inputSeg_ape"/>
                                                        </div>
                                                    </div>
                                                    {/*<div className="form-row">*/}
                                                    {/*    <div className="form-group col-md-6">*/}
                                                    {/*        <label htmlFor="inputEmail4">Email</label>*/}
                                                    {/*        <input type="email" className="form-control"*/}
                                                    {/*               id="inputEmail4"/>*/}
                                                    {/*    </div>*/}
                                                    {/*    <div className="form-group col-md-6">*/}
                                                    {/*        <label htmlFor="inputPassword4">Password</label>*/}
                                                    {/*        <input type="password" className="form-control"*/}
                                                    {/*               id="inputPassword4"/>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress"></label>
                                                        <input type="text" className="form-control" id="inputAddress"
                                                               placeholder="1234 Main St"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress2">Address 2</label>
                                                        <input type="text" className="form-control" id="inputAddress2"
                                                               placeholder="Apartment, studio, or floor"/>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputCity">City</label>
                                                            <input type="text" className="form-control" id="inputCity"/>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="inputState">State</label>
                                                            <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option>...</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-2">
                                                            <label htmlFor="inputZip">Zip</label>
                                                            <input type="text" className="form-control" id="inputZip"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                   id="gridCheck"/>
                                                            <label className="form-check-label" htmlFor="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                                </form>

                                                {/*------*/}
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h2 className="m-3">Datos de Login</h2>
                                            <hr className="mb-5"/>
                                            <div className="datos p-3 mb-3">
                                                <form action="">
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputEmail4">Email</label>
                                                            <input type="email" className="form-control"
                                                                   id="inputEmail4"/>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputPassword4">Password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputPassword4"/>
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="inputPassword4">Confirmar password</label>
                                                            <input type="password" className="form-control"
                                                                   id="inputPassword4"/>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                                </form>
                                            </div>
                                            <div className="">
                                                <h2 className="m-3">Datos para Ficha</h2>
                                                <hr className="mb-5"/>
                                                <div className="datos p-3 mb-3">
                                                    <form action="">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlTextarea1">
                                                                Sobre mí
                                                            </label>
                                                            <textarea className="form-control"
                                                                      id="exampleFormControlTextarea1"
                                                                      rows="3"/>
                                                            <div className="form-group">
                                                                <label htmlFor="inputState">Tecnología</label>
                                                                <select id="inputState" className="form-control">
                                                                    //options
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputState">Estudios</label>
                                                                <select id="inputState" className="form-control">
                                                                    //options
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <hr/>
                </Wrapper>
            </Fragment>
        );
    }
}


export default Category;