import { SHOW_OFERTASEMP } from '../actions'
import { UPDATE_OFERTASEMP } from '../actions'
import { element } from 'prop-types';


const initialState = {
    list: []
};

function OfertasEmpresa(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTASEMP:
            return Object.assign({}, state, { list: action.payload });
            break;

        case UPDATE_OFERTASEMP:
             return {
                 ...state,
                 list:action.payload
             };
           
            
        default:
            return state;
    }
}

export default OfertasEmpresa;