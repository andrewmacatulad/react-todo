var React = require('react');
var createReactClass = require('create-react-class')
var uuid = require('uuid')
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')

// set the initial state of the todos and set the properties and add the items on it
var TodoApp = createReactClass({
  getInitialState: function () {
    return {
        showCompleted: false,
        searchText: '',
        // set the todos state to be equal to the todoapi.gettodos so you can use them
        todos: TodoAPI.getTodos()

    };
  },
  // use the componentdidupdate because it will run after the update of things
  componentDidUpdate: function () {
    // this will set the setTodos to be equal to state.todos which is equal to the item you inputted
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
          completed: false,
          // this will add a createdAt to be equal to moment().unix() as a default state
          createdAt: moment().unix(),
          // Add a completedAt to undefined because no value yet in the state
          completedAt: undefined
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    // set the todos from the todolist to todos state
    // with this you can now display all th todos and its items
    return(
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = TodoApp;
