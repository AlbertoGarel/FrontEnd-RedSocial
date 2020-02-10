import {SHOW_EMPRESAS} from '../actions';

const initialState = {
    list: []
};

function Empresas(state = initialState, action) {
    switch (action.type) {
        case SHOW_EMPRESAS :
            return Object.assign({}, state, {list: action.payload});
            break;
        default:
            return state;
    }
}

export default Empresas;