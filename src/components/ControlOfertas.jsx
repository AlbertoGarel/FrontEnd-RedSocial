import React, { Component } from "react";

//REDUX
import { connect } from "react-redux";

class ControlOfertas extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { data } = this.props;
        
        console.log('ASD',this.props.data);
return(
    
        <div className="card mt-2 mb-2">
            <div className="card-header">
                <p>{data.puesto}</p>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous
                    in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </div>
            <button type="button" className="btn btn-outline-info">Informacion</button>
        </div>
)}
}

function mapStateToProps(state) {
    return {
        // user: state.Users,
        // items: state.Carrito.list
    }
}

export default connect(mapStateToProps)(ControlOfertas);
