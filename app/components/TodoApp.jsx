var React = require('react');
var createReactClass = require('create-react-class')
var uuid = require('node-uuid')

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
          id: uuid(),
          text: 'Fuck you ka'
        },
        {
          id: uuid(),
          text: 'Tang ina mo'
        },
        {
          id: uuid(),
          text: 'Putang ina mo'
        },
        {
          id: uuid(),
          text: 'Tarantado ka'
        }
      ]
    };
  },
  // this handles the input box for adding the todos
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text

        }
      ]
    })
  },
  // this will handle the search input box
  // the showCompleted will be set to showCompleted and searchText will be lower cased
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
