var React = require('react');
var createReactClass = require('create-react-class')


var Todo = createReactClass({
  render: function() {
    // set the text and id which you have from the todoApp as a property for the todos
    var {text, id} = this.props;
    return (
      // now you can get the id and text of each item in the todos
      <div>
      {id } {text}
      </div>
    )
  }
})

module.exports = Todo;
