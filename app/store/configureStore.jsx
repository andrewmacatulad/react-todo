var redux = require('redux');
// set the reducers that you will call
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

// create a configure function for the combineReducers for all the reducers that you will export
export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  // create a store that will be called so you can run the reducers and actions
  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ));
  return store
}
