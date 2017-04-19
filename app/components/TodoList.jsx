var React = require('react');
var createReactClass = require('create-react-class')
// it is the companion of the provider
// so the connect so components can access state properties and the dispatch method
var {connect} = require('react-redux');
import Todo from 'Todo'

export var TodoList = React.createClass({
  render: function() {
    // set todos as a props
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0 ) {
        return(
          <p className="container__message">Nothing To Do</p>
        )
      }
      return todos.map((todo) => {
        return (
          // remove the onToggle method because there isnt a handleToggle
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
  return {
    todos: state.todos
  }
})(TodoList);
