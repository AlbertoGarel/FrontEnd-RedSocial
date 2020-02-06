import {SHOW_USUARIO} from '../actions'

const initialState = {
    list: []
};

function Usuarios(state = initialState, action) {
    switch (action.type) {
        case SHOW_USUARIO :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Usuarios