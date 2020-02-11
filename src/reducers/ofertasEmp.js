import {SHOW_OFERTASEMP} from '../actions'


const initialState = {
    list: []
};

function OfertasEmp(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTASEMP :
            return Object.assign({}, state, {list: action.payload});
            break;
        default:
            return state;
    }
}

export default OfertasEmp;