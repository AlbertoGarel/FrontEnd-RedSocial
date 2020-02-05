import {SEARCH} from '../actions'
import {DELETE} from '../actions'

const initialState = {
    list: [],
    desc: '',
    vaciar: true,
};


function Search(state = initialState, action) {
    switch (action.type) {
        case SEARCH :
            return {
                ...state,
                list: action.payload.list,
                desc: action.payload.desc
            };
        case DELETE :
            return {
                ...state,
                list: [],
                desc: '',
                vaciar: action.payload

            };
        default:
            return state;
    }
}

export default Search;
