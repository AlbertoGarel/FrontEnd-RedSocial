import {compose, createStore,applyMiddleware} from 'redux'
import reducers from './reducers';
import {save,load} from 'redux-localstorage-simple'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers,composeEnhancers());
const createStoreWithMiddleware = applyMiddleware(
    save({
        states:['Carrito', 'Categories']
    }), // Saving done here
)(createStore);
const store = createStoreWithMiddleware(
    reducers,
    load({
        // preloadedState: {//cargamos un estado inicial para redux en caso de no haber estado en el localStorage
        //     // Carrito: []
        // }
        states:["Carrito", 'Categories']
    }), // Loading done here
    composeEnhancers(),
);

export default store;
