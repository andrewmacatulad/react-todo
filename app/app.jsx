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
  // if user is present it can go to /todos
  if(user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
    // if not it will redirect to /
  } else {
    store.dispatch(actions.logout())
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
