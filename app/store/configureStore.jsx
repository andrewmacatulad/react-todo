import * as redux from 'redux';
// thunk is redux middleware
// thunk you can have action generator that dont return object instead they return function which you can do async codes
import thunk from 'redux-thunk';

// set the reducers that you will call
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

// create a configure function for the combineReducers for all the reducers that you will export
export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer,
  });
  // create a store that will be called so you can run the reducers and actions
  var store = redux.createStore(reducer, initialState, redux.compose(
    // this will take a middleware function in this case is the thunk
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ));
  return store
}
