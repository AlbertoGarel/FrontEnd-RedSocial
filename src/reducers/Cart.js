import { SHOW_CART } from '../actions';
import { NOSHOW_CART } from '../actions';



const initialState = {
    showClass : 'noShow'
};

function Cart(state = initialState, action) {
    switch (action.type) {
        case SHOW_CART:
            return Object.assign({}, state, { showClass: action.payload });
            break;
        case NOSHOW_CART:
            return Object.assign({}, state, { showClass: action.payload });

            break;
        default:
            return state;
    }
}
export default Cart;