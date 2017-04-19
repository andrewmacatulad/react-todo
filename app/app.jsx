var React = require('react');
var ReactDOM = require('react-dom');
// Provider let you provide your store to its children
// so components like todolist todo etc can still access attributes on the store and use them to render
var {Provider} = require('react-redux');

// Object destructuring this will make Route,Router,IndexRoute,hashHistory will be set to react-router
var { Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

// now create a subscribe that will be the template when running an action via store.dispatch
store.subscribe (() => {
  console.log('New State', store.getState());
});

// now run the dispatch with the different actions you created
store.dispatch(actions.addTodo('Fuck you ka'));
store.dispatch(actions.setSearchText('you'));
store.dispatch(actions.toggleShowCompleted());

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')


ReactDOM.render(

  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('myBtn')
)
