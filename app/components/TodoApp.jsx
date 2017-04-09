var React = require('react');
var createReactClass = require('create-react-class')
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch')

// set the initial state of the todos and set the properties and add the items on it
var TodoApp = createReactClass({
  getInitialState: function () {
    return {
        showCompleted: false,
        searchText: '',
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
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    // set the todos from the todolist to todos state
    // with this you can now display all th todos and its items
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})


module.exports = TodoApp;
