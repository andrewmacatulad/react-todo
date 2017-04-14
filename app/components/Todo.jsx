var React = require('react');
var createReactClass = require('create-react-class')
var moment = require('moment')

var Todo = createReactClass({
  render: function() {
    // set the text and id which you have from the todoApp as a property for the todos
    var {text, id, completed, createdAt, completedAt} = this.props;

    var todoClassName = completed ? 'todo todo-completed' : 'todo';


    // create a renderDate variable that will handle the created date and the completed date
    var renderDate = () => {
      // first you set message and timestamp variables
      var message = 'Created ';
      var timestamp = createdAt;
      // if it is completed
      if(completed) {
        // set message to be Completed
        // and timestamp to be equal to completedAt
        // so that when you toggle it will change accordingly
        message = 'Completed ';
        timestamp = completedAt;
      }
      // this will return the message which is Created + the timestamp which you get from the number in the TodoApp.handleToggle
      // then format it to a better format
      return message + moment.unix(timestamp).format('MMM do YYYY @ h:mm a')
    }
    return (
      // now you can get the id and text of each item in the todos
      <div className={todoClassName} onClick={() =>{
          this.props.onToggle(id);
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

module.exports = Todo;
