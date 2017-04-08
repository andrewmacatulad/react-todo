var React = require('react');
var createReactClass = require('create-react-class')
var TodoList = require('TodoList');


var TodoApp = createReactClass({
  getInitialState: function () {
    return {
        todos: [
        {
          id: 1,
          text: 'Fuck you ka'
        },
        {
          id: 2,
          text: 'Tang ina mo'
        },
        {
          id: 3,
          text: 'Putang ina mo'
        },
        {
          id: 4,
          text: 'Tarantado ka'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;


    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
})


module.exports = TodoApp;
