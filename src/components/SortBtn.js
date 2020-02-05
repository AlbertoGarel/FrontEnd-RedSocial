import React, {Component, Fragment} from "react";

// const SortBtn = (props) => {
// const [state, setState] = React.UseState({});
class SortBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    renderTypeButton() {
        // if (this.props.data === false) {
        //     return <i className="fa fa-2x fa-chevron-down"/>
        // } else {
        //     return <i className="fa fa-2x fa-chevron-up"/>
        //
        // }

    }

    render() {
        return (
            <Fragment>
                <div className={`btn-group btn-group-toggle float-right ${this.props.tipo}`} data-toggle="buttons">
                    <i className="fa fa-2x fa-eur"/>
                    <button type="btn" name="options" id="option1" autoComplete="off"
                            onClick={this.props.clickHandler}>
                        {/*{this.renderTypeButton()}*/}
                    </button>
                </div>

            </Fragment>


        )
    };


}


export default SortBtn;
