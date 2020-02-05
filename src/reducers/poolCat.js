import {SHOW_POOLCAT} from '../actions'
import {SORT_BYPRICE} from '../actions'

const initialState = {
    list: [],
    btnSort: ''
};

function PoolCat(state = initialState, action) {
    switch (action.type) {
        case SHOW_POOLCAT :
            return Object.assign({}, state, {list: action.payload});
        case SORT_BYPRICE :
            if (action.payload) {
                state.list.sort((a, b) => a.price - b.price);
            } else {
                state.list.sort((a, b) => b.price - a.price);
            }
            return {
                ...state,
                btnSort: action.payload
            };


        default:
            return state;
    }
}

export default PoolCat;
