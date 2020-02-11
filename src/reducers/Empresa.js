import {GET_USER} from '../actions'
import {USER_DELETE} from '../actions'

const initialState = {
    id: '',
    username: '',
    email:'',
    password: '',
    about: '',
    ciudad_id: '',
    direccion: '',
    imagen_logo: '',
    name_responsable: '',
    telefono: '',
    web: '',
    token: '',
    cif: '',
};

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER :
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                email:action.payload.email,
                password: action.payload.password,
                about: action.payload.about,
                ciudad_id: action.payload.ciudad_id,
                direccion: action.payload.direccion,
                imagen_logo: action.payload.imagen_logo,
                name_responsable: action.payload.name_responsable,
                telefono: action.payload.telefono,
                web: action.payload.web,
                token: action.payload.token,
                cif: action.payload.cif,

            });
        default:
            return state;
    }
}

export default Users;
