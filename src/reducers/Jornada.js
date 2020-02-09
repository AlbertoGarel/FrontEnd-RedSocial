import {SHOW_JORNADAS} from '../actions'

const initialState = {
    list: []
};

function Jornada(state = initialState, action) {
    switch (action.type) {
        case SHOW_JORNADAS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Jornada;

























