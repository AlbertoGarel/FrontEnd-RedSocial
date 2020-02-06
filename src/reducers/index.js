import {combineReducers} from 'redux';
//import reducers
import Categories from './categories'
import TopProducts from './TopProducts'
import Slider from './slider'
import PoolCat from './poolCat'
import Search from "./SearchPoduct";
import Users from "./users";
import Carrito from "./Carrito";

import Ofertas from "./ofertas";
import Usuarios from "./usuarios";


let reducers = combineReducers({
    //reducers...
    Categories,
    TopProducts,
    Slider,
    PoolCat,
    Search,
    Users,
    Carrito,
    Ofertas,
    Usuarios
});

export default reducers;
