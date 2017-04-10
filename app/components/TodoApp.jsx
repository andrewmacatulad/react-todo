var React = require('react');
var createReactClass = require('create-react-class')
var uuid = require('uuid')

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
          text: 'Fuck you ka',
          completed: false
        },
        {
          id: uuid(),
          text: 'Tang ina mo',
          completed: true
        },
        {
          id: uuid(),
          text: 'Putang ina mo',
          completed: true
        },
        {
          id: uuid(),
          text: 'Tarantado ka'
          ,completed: false
        }
      ]
    };
  },

  // this handles the input box for adding the todos
  handleAddTodo: function (text) {
    this.setState({
      // this will set the todos array state
      todos: [
        // first get all the the items in the old todos state using the spread operator
        ...this.state.todos,
        // so you can add the new ones together with the old ones
        // now you can add them adding this object with the id and text property
        {
          // uuid is use so id will be unique
          // uuid is Cryptographically strong random number generation on supporting platforms
          // this is called universally unique id
          id: uuid(),
          // the text will be equal to the text that you will input
          text: text,
          completed: false

        }
      ]
    })
  },
  handleToggle: function (id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id=== id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos:updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})


module.exports = TodoApp;
