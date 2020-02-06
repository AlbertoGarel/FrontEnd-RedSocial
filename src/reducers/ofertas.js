import { SHOW_OFERTAS } from '../actions';
import { SHOW_OFERTABYID } from '../actions';



const initialState = {
    list: [],
    ofertasbyid: []
};

function Ofertas(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTAS:
            return Object.assign({}, state, { list: action.payload });
            break;
        case SHOW_OFERTABYID:
            return Object.assign({}, state, { ofertasbyid: action.payload });

            break;
        default:
            return state;
    }
}


export default Ofertas