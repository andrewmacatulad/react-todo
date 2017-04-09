var React = require('react');
var createReactClass = require('create-react-class')
var Todo = require('Todo');

var TodoList = createReactClass({
  render: function() {
    // set todos as a props
    var {todos} = this.props;
    var renderTodos = () => {
      // to return something that you can return to the screen you use todos.map
      // use the todos props you set and use todos.map
      // it takes a function and calls the function for every element in the array
      // if you have an array 123 you will now have 234
      return todos.map((todo) => {
        // when you are iterating over an array and you are generating multiple instances of a components
        // you need to give the a unique key prop
        // the unique key prop is the id
        // you will now use the Todo.jsx {id} {text} that will be displayed in the todoApp
        // the ...todo will let you pass all the property/attribute from an object as a props
        // without you defining everything
        // this is a spread operator
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
})

module.exports = TodoList;
