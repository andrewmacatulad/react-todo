var React = require('react');
var createReactClass = require('create-react-class')
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = createReactClass({
  onSubmit:function (e) {
    e.preventDefault();
    var {dispatch} = this.props
    var addTodos = this.refs.addtodos.value;
    if(addTodos.length > 0){
    this.refs.addtodos.value = "";
    // this.props.onAddTodo(addTodos);
    dispatch(actions.startAddTodo(addTodos));
    } else {
      this.refs.addtodos.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="addtodos" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodo);
