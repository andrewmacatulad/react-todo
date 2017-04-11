var React = require('react');
var createReactClass = require('create-react-class')
var uuid = require('uuid')

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')

// set the initial state of the todos and set the properties and add the items on it
var TodoApp = createReactClass({
  getInitialState: function () {
    return {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
      
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
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
  // this will handle the toggle for the checkbox
  handleToggle: function (id){
    // first set the variable as a map so it will take and call the function on all the element in the array map
    // so you can make change on it
    // and make an arrow function with one argument which is todo

    var updatedTodos = this.state.todos.map((todo) => {
      // check if todo id and the id that is pass in are equal if yes
      if(todo.id === id){
        // make todo completed to be equal to the opposite on the value of it
        // so it will toggle to true/false
        todo.completed = !todo.completed;
      }
      // then return the todo
      return todo;
    });
    // now set the state of the todos to be equal to the variable you created
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
