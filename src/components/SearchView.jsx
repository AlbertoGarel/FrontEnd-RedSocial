import React, {Component, Fragment} from "react";
import Wrapper from "./Wrapper";
import {connect} from "react-redux";
import CardProduct from "./CardProduct";

class SearchView extends Component {

    renderSearchList(){
        // return this.props.busqueda.map((product) => {
        //     return (
        //         <Fragment key={product.id}>
        //             <CardProduct data={product}/>
        //         </Fragment>
        //     )
        // })
    }

    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="my_container compens_nav">
                        <section className="cont-principal d-flex justify-content-start flex-wrap">
                            {/*<Slider/>*/}
                            <div className="titulo mx-auto mb-2 d-flex justify-content-between">
                                <div id="left" className="w-75">
                                    <h2>tu búsqueda</h2>
                                </div>
                                <div id="right" className="d-flex justify-content-end align-items-center w-25">
                                </div>
                            </div>
                            <hr className="display-block"/>
                            {/*{this.renderSearchList()}*/}
                        </section>
                    </main>
                </Wrapper>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        // busqueda: state.Search.list
    }

}

export default connect(mapStateToProps)(SearchView);
