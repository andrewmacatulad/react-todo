var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery')
var expect = require('expect');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect('AddTodo').toExist();
  });

  it('should call onAddTodo prop with valid data', () => {
    var todoText = "Fuck"
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.addtodos.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
  })

  it('should not call onAddTodo prop with valid data', () => {
    var todoText = ""
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.addtodos.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  })
});
