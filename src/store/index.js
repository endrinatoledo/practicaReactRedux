// import{ configureStore } from '@reduxjs/toolkit';
import {applyMiddleware, compose, createStore} from 'redux';
import authreducer from './slices/auth';
import thunk from "redux-thunk";
// import users from './slices/users'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(
        // users
        authreducer,
        composeEnhancers(applyMiddleware(thunk))
);

export default store;
 
// export default configureStore({
//     reducer:{
//         // users
//         authreducer,
//         window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
//     }
// });



