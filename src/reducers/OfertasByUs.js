import {SHOW_OFERTASBYUSER} from '../actions'


const initialState = {
    list: []
};

function OfertasByUs(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTASBYUSER :
            return Object.assign({}, state, {list: action.payload});
            break;
        default:
            return state;
    }
}

export default OfertasByUs;