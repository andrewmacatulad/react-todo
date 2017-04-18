var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
// Object destructuring this will make Route,Router,IndexRoute,hashHistory will be set to react-router
var { Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe (() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Fuck you ka'));
store.dispatch(actions.setSearchText('yosu'));
store.dispatch(actions.toggleShowCompleted());

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')


ReactDOM.render(

  <TodoApp/>,
  document.getElementById('myBtn')
)
