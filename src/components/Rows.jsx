import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class Rows extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.id = React.createRef();
        this.image = React.createRef();
        this.name = React.createRef();
        this.ud = React.createRef();
        this.price = React.createRef();
        this.volume = React.createRef();
        this.category = React.createRef();
    }


    handleChange = () => {
        let paramsBody = {
            id: parseInt(this.id.current.value),
            image: this.image.current.value,
            name: this.name.current.value,
            ud: this.ud.current.value,
            price: parseFloat(this.price.current.value),
            volume: this.volume.current.value,
            fk_category : this.category.current.value
        };
        console.log(paramsBody);
        axios.patch('http://localhost:3000/products/update', paramsBody)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    };

    renderCategories() {
        return this.props.categories.map((cat) => {
            return (
                <Fragment key={cat.id}>
                    <option value={cat.id}>{cat.category}</option>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <Fragment>
                {/*<tr>*/}
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm"
                        type="text"
                        name="imagen"
                        // style={{display: 'none'}}
                        ref={this.id}
                        readOnly={true}
                        value={this.props.data.id}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm"
                        type="text"
                        name="imagen"
                        // style={{display: 'none'}}
                        ref={this.image}
                        defaultValue={this.props.data.image}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm fill"
                        type="text"
                        name="nombre"
                        // style={{display: 'none'}}
                        ref={this.name}
                        defaultValue={this.props.data.name}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm fill"
                        type="text"
                        name="ud"
                        // style={{display: 'none'}}
                        ref={this.ud}
                        defaultValue={this.props.data.ud}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm fill"
                        type="text"
                        name="precio"
                        // style={{display: 'none'}}
                        ref={this.price}
                        defaultValue={this.props.data.price.toFixed(2)}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <input
                        className="tabledit-input form-control input-sm fill"
                        type="text"
                        name="volume"
                        // style={{display: 'none'}}
                        defaultValue={this.props.data.volume}
                        ref={this.volume}
                    />
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <select name="categoria"
                            className="tabledit-input form-control input-sm fill"
                            ref={this.category}
                            defaultValue={this.props.data.fk_category}
                    >
                        {this.renderCategories()}
                    </select>
                </td>
                <td className="tabledit-view-mode"
                    style={{cursor: 'pointer'}}>
                    <button className="btn btn-sm btn-success" onClick={() => {
                        this.handleChange()
                    }}>
                        Cambiar
                    </button>
                </td>

                {/*</tr>*/}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.Categories.list,
    }
}

export default connect(mapStateToProps)(Rows);
