import {CAMBIO_ESTADO} from '../actions'
import {DELETE_ORDER} from '../actions'


const initialState = {
    list: []
};

function cambioEstado(state = initialState, action) {
    switch (action.type) {
        case CAMBIO_ESTADO :
            return Object.assign({}, state, {list: action.payload});
            break;
        case DELETE_ORDER:
            return {
                ...state,
                list: action.payload
            };
        default:
         return state;
    }
}

export default cambioEstado;