var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var { Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');
import Login from 'Login'
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI')


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

var RoutingFunc = React.createClass({
  render: function(){
    return(
      <Router history={hashHistory}>

        <Route path="/">
          <Route path="todos" component = {TodoApp}/>
          <IndexRoute component = {Login}/>
        </Route>
      </Router>
    )
  }
})


ReactDOM.render(

  <Provider store={store}>
    <RoutingFunc/>
  </Provider>,
  document.getElementById('myBtn')
)
