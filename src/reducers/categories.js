import {SHOW_CATEGORIES} from '../actions'

const initialState = {
    list: []
};

function Categories(state = initialState, action) {
    switch (action.type) {
        case SHOW_CATEGORIES :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Categories
