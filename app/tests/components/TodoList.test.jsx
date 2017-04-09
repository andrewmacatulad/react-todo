var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery')
var expect = require('expect');

var TodoList = require('TodoList')
var Todo = require('Todo')

describe('TodoList', () => {
  it('should exist', () => {
    expect('TodoList').toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: "fuck"
    },
    {
      id: 2,
      text: "you"
    }];

    // get the TodoList and pass the todos prop and set it to be the todos variable you created
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // this will store all the todos components that you can find in the todoList
    // scryRenderedComponentsWithType it will check how many Todo component is rendered in the todoList component
    // first will be the item you want to check then next is the class you want the item to look for which is the Todo
    // scry is use for finding all the elements
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    // this will check if the todoscomponents is equal to the todos variable length you created here
    expect(todosComponents.length).toBe(todos.length);

  })
})
