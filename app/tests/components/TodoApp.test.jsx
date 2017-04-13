var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery')
var expect = require('expect');

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect('TodoApp').toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test lang',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handleToggle with 11
    // this will check the id of the todoData and get its values
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to incompleted', () => {
    var todoData = {
      id: 11,
      text: 'test lang',
      completed: true,
      createdAt: 0,
      completedAt: 5
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    todoApp.handleToggle(11);
    // Test that when toggle from true to false, completedAt get removed
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

})
