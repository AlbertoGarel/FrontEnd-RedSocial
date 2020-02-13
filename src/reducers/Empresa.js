import {GET_EMPRESA} from '../actions'
import {UPDATE_EMPRESA} from '../actions'

const initialState = {
    // list:[]
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

function Empresa(state = initialState, action) {
    switch (action.type) {
        case GET_EMPRESA :
            return Object.assign({}, state, {
                // list: action.payload
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
        case UPDATE_EMPRESA:
            // return Object.assign({}, state, {
            //
            //     username: action.payload,
            //
            // });
            // for(let key in state) {
            //     if(state.hasOwnProperty(key)){
            //         if(action.payload[key] == state[key]){
            //             // console.log('key',action.payload[key] == state[key] )
            //             console.log('key',action.payload)
            //         }
            //     }
            // }
return  state=action.payload;



            // return [...state, state];
                break;
        default:
            return state;
    }
}

export default Empresa;
