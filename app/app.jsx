var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
// Object destructuring this will make Route,Router,IndexRoute,hashHistory will be set to react-router
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')


ReactDOM.render(

  <p>BoilerPlate 3 Project</p>,
  document.getElementById('myBtn')
)
