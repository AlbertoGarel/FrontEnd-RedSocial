import {SHOW_OFERTAS} from '../actions';
import {SHOW_OFERTABYID} from '../actions';
import {SHOWOFERTA_BYPROVINCIAID} from '../actions';
import {SHOWOFERTA_BYESTUDIOS} from '../actions';
import {SHOW_OFERTABYEXP} from '../actions';
import {SHOW_OFERTABYSAL} from '../actions';
import {SHOW_OFERTABYJOR} from '../actions';
import {SHOW_OFERTABYCONT} from '../actions';
import {SHOW_OFERTABYEMP} from '../actions';


const initialState = {
    list: [],
    ofertasbyid: [],
    porProvincia: [],
    porEstudios: [],
    porExperiencia: [],
    porSalario: [],
    porJornada: [],
    porContrato:[],
    controlBusq: '',
    porEmpresas: []

};

function Ofertas(state = initialState, action) {
    switch (action.type) {
        case SHOW_OFERTAS:
            return Object.assign({}, state, {list: action.payload, controlBusq: 'todas'});
            break;
        case SHOW_OFERTABYID:
            return Object.assign({}, state, {ofertasbyid: action.payload});
            break;
        case SHOWOFERTA_BYPROVINCIAID:
            return Object.assign({}, state, {porProvincia: action.payload, controlBusq: 'ciudad'});
            break;
        case SHOWOFERTA_BYESTUDIOS:
            return Object.assign({}, state, {porEstudios: action.payload, controlBusq: 'estudios'});
            break;
        case SHOW_OFERTABYEXP:
            return Object.assign({}, state, {porExperiencia: action.payload, controlBusq: 'experiencia'});
            break;
            case SHOW_OFERTABYSAL:
            return Object.assign({}, state, {porSalario: action.payload, controlBusq: 'salario'});
            break;
            case SHOW_OFERTABYJOR:
            return Object.assign({}, state, {porJornada: action.payload, controlBusq: 'jornada'});
            break;
            case SHOW_OFERTABYCONT:
            return Object.assign({}, state, {porContrato: action.payload, controlBusq: 'contrato'});
            break;
            case SHOW_OFERTABYEMP :
            return Object.assign({}, state, {list: action.payload, controlBusq: 'porEmpresas'});
            break;
        default:
            return state;
    }
}


export default Ofertas