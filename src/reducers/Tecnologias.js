import {SHOW_TECNOLOGIAS} from '../actions'

const initialState = {
    list: []
};

function Tecnologias(state = initialState, action) {
    switch (action.type) {
        case SHOW_TECNOLOGIAS :
            return Object.assign({}, state, {list: action.payload});
            break;
        default:
            return state;
    }
}

export default Tecnologias;