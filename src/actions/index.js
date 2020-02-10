import axios from 'axios';
import store from "../store";


export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';
export const SHOW_TOPPRODUCTS = 'SHOW_TOPPRODUCTS';
export const SHOW_SLIDERPRODUCTS = 'SHOW_SLIDERPRODUCTS';
export const SHOW_POOLCAT = 'SHOW_POOLCAT';
export const SORT_BYPRICE = 'SORT_BYPRICE';
export const SEARCH = 'SEARCH';
export const DELETE = 'DELETE';
export const GET_USER = 'GET_USER';
export const USER_DELETE = 'USER_DELETE';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT';
export const DELETE_ORDER = 'DELETE_ORDER';
export const SHOW_CART = 'SHOW_CART';
export const NOSHOW_CART = 'NOSHOW_CART';


// -------
export const SHOW_CIUDADES = 'SHOW_CIUDADES';
export const SHOW_OFERTAS = 'SHOW_OFERTAS';
export const SHOW_USUARIO = 'SHOW_USUARIO';
export const SHOW_OFERTABYID = 'SHOW_OFERTABYID';
export const SHOW_ESTUDIOS = 'SHOW_ESTUDIOS';
export const SHOW_JORNADAS = 'SHOW_JORNADAS';
export const SHOW_CONTRATOS = 'SHOW_CONTRATOS';
//por condiciones
export const SHOWOFERTA_BYPROVINCIAID = 'SHOWOFERTA_BYPROVINCIAID';
export const SHOWOFERTA_BYESTUDIOS = 'SHOWOFERTA_BYESTUDIOS';
export const SHOW_OFERTABYEXP = 'SHOW_OFERTABYEXP';
export const SHOW_OFERTABYSAL = 'SHOW_OFERTABYSAL';
export const SHOW_OFERTABYJOR = 'SHOW_OFERTABYJOR';
export const SHOW_OFERTABYCONT = 'SHOW_OFERTABYCONT';

// let userHeader = '';
// if(localStorage.getItem('user')){

    const tokenUser = JSON.parse(localStorage.getItem('user')).token;
    let userHeader = {
        headers: {
            'Authorization': `Bearer ${tokenUser}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        }
    };
// }


//BUSQUEDAS POR CONDICIONES  http://127.0.0.1:8000/api/ofertas/provincia/41
//BUSQ POR PROVINCIAS  SHOWOFERTA_BYESTUDIOS
export function showByProvincias(provincia) {
    axios.get(`http://127.0.0.1:8000/api/ofertas/provincia/${provincia}`, userHeader)
        .then(res => {
            store.dispatch({type: SHOWOFERTA_BYPROVINCIAID, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}

//BUSQ POR ESTUDIOS
export function showByEstudios(estudios) {
    axios.get(`http://127.0.0.1:8000/api/ofertas/estudios/${estudios}`, userHeader)
        .then(res => {
            store.dispatch({type: SHOWOFERTA_BYESTUDIOS, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}

// Oferta por ID
export function showOfertaById(id) {
    axios.get('http://localhost:8000/api/ofertas/' + id, userHeader)
        .then(res => {
            store.dispatch({type: SHOW_OFERTABYID, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}
//OFERTAS POR EXPERIENCIA
export function showOfertaByExp(id) {
    axios.get('http://localhost:8000/api/ofertas/experiencia/' + id, userHeader)
        .then(res => {
            store.dispatch({type: SHOW_OFERTABYEXP, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}

//OFERTAS POR SALARIO MÍNIMO
export function showOfertaBySal(id) {
    axios.get('http://localhost:8000/api/ofertas/salario/' + id, userHeader)
        .then(res => {
            store.dispatch({type: SHOW_OFERTABYSAL, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}

//OFERTAS POR SALARIO MÍNIMO
export function showOfertaByJor(id) {
    axios.get('http://localhost:8000/api/ofertas/jornada/' + id, userHeader)
        .then(res => {
            store.dispatch({type: SHOW_OFERTABYJOR, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}

//OFERTAS POR CONTRATO
export function showOfertaByCont(id) {
    axios.get('http://localhost:8000/api/ofertas/contratos/' + id, userHeader)
        .then(res => {
            store.dispatch({type: SHOW_OFERTABYCONT, payload: res.data.obj})
        })
        .catch(err => {
                console.log(err.error)
            }
        )
}



//////PUBLICOS
//JORNADA
export function showJornada() {
    axios.get('http://127.0.0.1:8000/api/jornadas')
        .then(res => {
            store.dispatch({type: SHOW_JORNADAS, payload: res.data.obj})
        })
}

//CONTRATOS
export function showContratos() {
    axios.get('http://127.0.0.1:8000/api/contratos')
        .then(res => {
            store.dispatch({type: SHOW_CONTRATOS, payload: res.data.obj})
        })
}

//ESTUDIOS
export function showEstudios() {
    axios.get('http://127.0.0.1:8000/api/estudios')
        .then(res => {
            store.dispatch({type: SHOW_ESTUDIOS, payload: res.data.obj})
        })
}

//CIUDADES
export function showCiudades() {
    axios.get('http://127.0.0.1:8000/api/ciudades')
        .then(res => {
            store.dispatch({type: SHOW_CIUDADES, payload: res.data.obj})
        })
}

//OFERTAS
export function showOfertas() {
    axios.get('http://localhost:8000/api/ofertas')
        .then(res => {
            console.log('index', res.data.obj)
            store.dispatch({type: SHOW_OFERTAS, payload: res.data.obj});
        })
        .catch(err => {
                alert(err.error)
                console.log(err.error)
            }
        )
}

//usuarios
export function showUsuario(type, data) {
    store.dispatch({type: type, payload: data});
}

//FUNCIONALIDADES FRONT

//Abrir carro lateral
export function openNowCart() {
    store.dispatch({type: SHOW_CART, payload: ''})
}

//Abrir carro lateral
export function closeNowCart() {
    store.dispatch({type: NOSHOW_CART, payload: 'noShow'})
}

//-------------------------------------------------------------------------
export function showCategories() {
    axios.get('http://localhost:8000/api/year')

        .then(res => {
            console.log('index', res.data.obj)
            store.dispatch({type: SHOW_CATEGORIES, payload: res.data.obj});
        })
}

export async function showTopProducts() {
    const res = await axios.get('http://localhost:3000/products/top');
    store.dispatch({type: SHOW_TOPPRODUCTS, payload: res.data});

}

export async function showSliderProducts() {
    const res = await axios.get('http://localhost:3000/products/promo');
    store.dispatch({type: SHOW_SLIDERPRODUCTS, payload: res.data});
}

export function showPoolCat(cat) {
    axios.get(`http://localhost:3000/products/?category=${cat}`)
        .then(res => {
            store.dispatch({type: SHOW_POOLCAT, payload: res.data});
        })
}

export function sortByPrice(btnBol) {
    store.dispatch({type: SORT_BYPRICE, payload: btnBol})
};

export async function search(desc) {
    const res = await axios.get(`http://localhost:3000/products/?name=${desc}`);
    store.dispatch({type: SEARCH, payload: {list: res.data, desc: desc}})
};

export async function searchDelete(desc) {
    await store.dispatch({type: DELETE, payload: true})
};

// export function userRegister(paramsBody) {
//     axios.post('http://localhost:3000/users/login', paramsBody)
//         .then(res => {
//             if(res.status === 200){
//                 store.dispatch({
//                     type: GET_USER, payload: {
//                         id: res.data.id,
//                         username: res.data.user_name,
//                         address: res.data.address,
//                         token: res.data.token,
//                         email: res.data.email,
//                         role: res.data.role
//                     }
//                 });
//                 localStorage.setItem('user', JSON.stringify(res.data))
//                 window.location.href = "/";
//             }
//
//         })
//         .catch(err => console.log(err));
// }

export function logOut(paramsBody, paramsHeaders) {
    axios.patch('http://localhost:3000/users/logout', paramsBody, paramsHeaders)
        .then(res => {
            if (res.status === 200) {
                store.dispatch({
                    type: USER_DELETE, payload: {
                        id: '',
                        username: '',
                        address: '',
                        token: '',
                        email: '',
                        role: ''
                    }
                });
                localStorage.removeItem('user');
                localStorage.removeItem('redux_localstorage_simple_Carrito');
                store.dispatch({type: DELETE_ORDER, payload: []});
                window.location.href = "/";
                return res.data.message
            }

        })
        .then(err => console.log(err))

}

//carrito
export function addProduct(data) {
    store.dispatch({
        type: ADD_PRODUCT, payload: {
            data
        }
    })
}

export function subtractProduct(data) {
    store.dispatch({
        type: SUBTRACT_PRODUCT, payload: {
            data
        }
    })
}

export function AddOrder(paramsBody, paramsHeaders) {
    axios.post('http://localhost:3000/orders/add', paramsBody, paramsHeaders)
        .then(res => {
            store.dispatch({type: DELETE_ORDER, payload: []});
            return res.data.message
        })
        .catch(err => console.log(err))


}



