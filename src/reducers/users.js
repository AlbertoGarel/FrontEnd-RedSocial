import {GET_USER} from '../actions'
import {USER_DELETE} from '../actions'

const initialState = {
    id:'',
    username: '',
    address: '',
    token: '',
    email: '',
    role: ''
};

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER :
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                address: action.payload.address,
                token: action.payload.token,
                email: action.payload.email,
                role: action.payload.role
            });
            case USER_DELETE :
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                address: action.payload.address,
                token: action.payload.token,
                email: action.payload.email,
                role: action.payload.role
            });
        default:
            return state;
    }
}

export default Users;
