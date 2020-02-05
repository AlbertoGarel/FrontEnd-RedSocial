import {SHOW_TOPPRODUCTS} from '../actions'

const initialState = {
    list: []
};

function TopProducts(state = initialState, action) {
    switch (action.type) {
        case SHOW_TOPPRODUCTS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default TopProducts;
