import {SHOW_CONTRATOS} from '../actions'

const initialState = {
    list: []
};

function Contratos(state = initialState, action) {
    switch (action.type) {
        case SHOW_CONTRATOS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Contratos;