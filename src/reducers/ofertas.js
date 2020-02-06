import {SHOW_OFERTAS} from '../actions';

const initialState = {
    list: [],
};

function Ofertas(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTAS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Ofertas