import { SHOWOFERTAS_BYID } from '../actions';



const initialState = {
    list: [],
    ofertasbyid: []
};

function CiudadesPoId(state = initialState, action) {
    switch (action.type) {
        case SHOWOFERTAS_BYID:
            return Object.assign({}, state, { list: action.payload });
            break;
        default:
            return state;
    }
}


export default CiudadesPoId