import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import initialStore from "./initialStore";
import thunk from 'redux-thunk';
import combineReducers from "./rootReducer";


const store = createStore(
  combineReducers,
  initialStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store