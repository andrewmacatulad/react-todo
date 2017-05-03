var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

import firebase from 'app/firebase'
var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/'


  // onAuthStateChanged takes only  function as an argument
  // it get calleds with the user argument
  // if the user is present it is logged in
  // if the user is missing it is logged out
firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

// import './../playground/firebase/index';

// store.subscribe (() => {
//   var state = store.getState();
//   console.log('New State', state);
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());


// LOAD FOUNDATION
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')




ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('myBtn')
)
