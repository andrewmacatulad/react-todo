var React = require('react');
var createReactClass = require('create-react-class')



var AddTodo = createReactClass({
  // onSubmit function will handle when you submit or click the button for the form
  onSubmit:function (e) {
    e.preventDefault();
    // set addTodos refs value
    var addTodos = this.refs.addtodos.value;
    // check if addTodos is empty if not then
    if(addTodos.length > 0){
      // empty the input box
    this.refs.addtodos.value = "";
    // set the props onAddTodo to be equal to the addTodos refs which you will pass as a props onthe TodoApp
    this.props.onAddTodo(addTodos);
    } else {
      // this will make the input box to be automatically focus
      this.refs.addtodos.focus();
    }
  },
  render: function () {
    // set onSubmit as the onSubmit function
    // set ref as addtodos for the input
    // add a button
    return (
      <div>
        <form onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="addtodos" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

module.exports = AddTodo;
