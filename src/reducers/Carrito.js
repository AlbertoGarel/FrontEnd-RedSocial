import {ADD_PRODUCT} from '../actions'
import {SUBTRACT_PRODUCT} from '../actions'
import {DELETE_ORDER} from '../actions'

const initialState = {
    // cant: 0,
    list: []
};

function Carrito(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT :
            for (let prop of state.list) {
                if (action.payload.data.id === prop.id) {
                    prop.total = parseFloat(prop.total) + parseFloat(prop.price);
                    prop.cant = parseInt(prop.cant) + 1;
                    return {
                        list: [...state.list]
                    }
                }
            }
            if (action.payload.data.cant <= 0) {
                action.payload.data.cant = 1;
                action.payload.data.total = action.payload.data.price;
            }
            return {
                list: [...state.list, action.payload.data]
            };

        case SUBTRACT_PRODUCT :
            for (let prop of state.list) {
                if (action.payload.data.id === prop.id) {
                    prop.cant = parseInt(prop.cant) - 1;
                    prop.total = parseFloat(prop.total) - parseFloat(prop.price);
                    console.log('propCant___RESTA', prop.cant);
                    if (prop.cant <= 0) {
                        let el = state.list.indexOf(prop);
                        state.list.splice(el, 1);
                    }

                    console.log('return', state.list)
                    return {
                        list: [...state.list]
                    }
                }
            }
            break;
        case DELETE_ORDER:
            return {
                ...state,
            list: action.payload
            };
        default:
            return state;
    }
}

export default Carrito
