import {SHOW_USUBYOFERTA} from '../actions'

const initialState = {
    list: [],
    
};

function UsuarioByOFerta(state = initialState, action) {
    switch (action.type) {
        case SHOW_USUBYOFERTA :
            return Object.assign({}, state, {list: action.payload});
            break;
        default:
            return state;
    }
}

export default UsuarioByOFerta;