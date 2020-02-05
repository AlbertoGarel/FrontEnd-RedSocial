import {SHOW_SLIDERPRODUCTS} from '../actions'

const initialState = {
    list: []
};

function Slider(state = initialState, action) {
    switch (action.type) {
        case SHOW_SLIDERPRODUCTS :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default Slider;








