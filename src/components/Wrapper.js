import React, {Component, Fragment} from "react";
import Footer from "./Footer";

class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>

                {this.props.children}

                <Footer/>
            </Fragment>
        )
    }
}

export default Wrapper;
