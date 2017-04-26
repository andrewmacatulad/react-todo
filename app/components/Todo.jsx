var React = require('react');
var createReactClass = require('create-react-class')
var {connect} = require('react-redux');
var moment = require('moment')
// this will get from the actions/actions.jsx
var actions = require('actions');

export var Todo = createReactClass({
  render: function() {
    // set the text and id which you have from the todoApp as a property for the todos
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;

    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM do YYYY @ h:mm a')
    }
    return (
      <div className={todoClassName} onClick={() =>{
          // now instead of this.props.onToggle(id)
          // this.props.onToggle(id);
          // you just use the dispatch to get the actions.toggleTodo and pass in the id
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
        <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
})

export default connect()(Todo);
