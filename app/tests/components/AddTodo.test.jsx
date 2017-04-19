var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery')
var expect = require('expect');

import {AddTodo} from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect('AddTodo').toExist();
  });

  it('should dispatch ADD_TODO when valid text', () => {
    var todoText = "Fuck"
    // add an action
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    // replace it with dispatch the spy
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.addtodos.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);
    // check if spy is called with action
    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should not dispatch ADD_TODO when invalid text', () => {
    var todoText = ""
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.addtodos.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  })
});
