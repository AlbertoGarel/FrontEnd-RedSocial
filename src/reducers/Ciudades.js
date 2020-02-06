import {SHOW_CIUDADES} from '../actions'

const initialState = {
    list: []
};

function Ciudades(state = initialState, action) {
    switch (action.type) {
        case SHOW_CIUDADES :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Ciudades;