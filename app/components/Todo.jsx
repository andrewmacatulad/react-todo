var React = require('react');
var createReactClass = require('create-react-class')
var moment = require('moment')

var Todo = createReactClass({
  render: function() {
    // set the text and id which you have from the todoApp as a property for the todos
    var {text, id, completed, createdAt, completedAt} = this.props;
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
      // now you can get the id and text of each item in the todos
      <div onClick={() =>{
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
})

module.exports = Todo;
