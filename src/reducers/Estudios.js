import {SHOW_ESTUDIOS} from '../actions'

const initialState = {
    list: []
};

function Estudios(state = initialState, action) {
    switch (action.type) {
        case SHOW_ESTUDIOS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Estudios;