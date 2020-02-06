import {GET_USER} from '../actions'
import {USER_DELETE} from '../actions'

const initialState = {
    id: '',
    username:'',
    prim_apellido: '',
    seg_apellido: '',
    email:'',
    password: '',
    about: '',
    ciudad_id: '',
    direccion: '',
    imagen: '',
    sexo:'',
    especialidad: '',
    telefono: '',
    created_at: '',
    updated_at: '',
    token: ''

};

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER :
            return Object.assign({}, state, {
                // id: action.payload.id,
                // username: action.payload.username,
                // address: action.payload.address,
                // token: action.payload.token,
                // email: action.payload.email,
                // role: action.payload.role,
                id: action.payload.id,
                username: action.payload.username,
                prim_apellido: action.payload.prim_apellido,
                seg_apellido: action.payload.seg_apellido,
                email:action.payload.email,
                password: action.payload.password,
                about: action.payload.about,
                ciudad_id: action.payload.ciudad_id,
                direccion: action.payload.direccion,
                imagen: action.payload.imagen,
                sexo:action.payload.sexo,
                especialidad: action.payload.especialidad,
                telefono: action.payload.telefono,
                created_at: action.payload.created_at,
                updated_at: action.payload.updated_at,
                token: action.payload.token

            });
            // case USER_DELETE :
            // return Object.assign({}, state, {
            //     id: action.payload.id,
            //     username: action.payload.username,
            //     address: action.payload.address,
            //     token: action.payload.token,
            //     email: action.payload.email,
            //     role: action.payload.role
            // });
        default:
            return state;
    }
}

export default Users;
