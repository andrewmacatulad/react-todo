var React = require('react');
var createReactClass = require('create-react-class')



var AddTodo = createReactClass({
  onSubmit:function (e) {
    e.preventDefault();
    var addTodos = this.refs.addtodos.value;

    if(addTodos.length > 0){
    this.refs.addtodos.value = "";
    this.props.onAddTodo(addTodos);
    } else {
      this.refs.addtodos.focus();
    }
  },
  render: function () {
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
