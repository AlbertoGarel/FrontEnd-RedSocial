import {combineReducers} from 'redux';
//import reducers
import Categories from './categories'
import TopProducts from './TopProducts'
import Slider from './slider'
import PoolCat from './poolCat'
import Search from "./SearchPoduct";
import Users from "./users";
import Carrito from "./Carrito";
import Ciudades from "./Ciudades";
import Cart from "./Cart";

import Ofertas from "./ofertas";
import Usuarios from "./usuarios";
import Estudios from "./Estudios";
import Jornada from "./Jornada";
import Contratos from "./Contratos";
import Empresas from "./Empresas";
import OfertasByUs from "./OfertasByUs";



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
    Usuarios,
    Ciudades,
    Cart,
    Estudios,
    Jornada,
    Contratos,
    Empresas,
    OfertasByUs
});

export default reducers;
