var React = require('react');
var createReactClass = require('create-react-class')
// it is the companion of the provider
// so the connect so components can access state properties and the dispatch method
var {connect} = require('react-redux');
import Todo from 'Todo'
var TodoAPI = require('TodoAPI');



export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;


    var renderTodos = () => {
      // instead of todos you need to use filteredTodos to check if todos are missing or not
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if(filteredTodos.length === 0 ) {
        return(
          <p className="container__message">Nothing To Do</p>
        )
      }
      return filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo}/>
          )

      })
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect((state) => {
  return state;
})(TodoList);
