import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect')
import firebase, {firebaseRef} from 'app/firebase'

import * as actions from 'actions';
import {Todo} from 'Todo'

var createMockStore = configureMockStore([thunk]);
describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'sample search'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate Add Todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'anything',
        completed: false,
        createdAt: 33000
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
});

  it('should create todo and dispatch ADD_TODO', (done) => {
    // set the createdMockstore
    const store = createMockStore({});
    // set a todoText
    const todoText = 'My item';
    // dispatch if the actions is complete then
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      // the actions will shown up in the mockStore
      const actions = store.getActions();
      // now expect the first action element
      // the toInclude is like toEquals but take object with some properties
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      // done is a must here or else it will not end and will end up as an error
      done();
      // catch and just set done
    }).catch(done);

  })

    it('should generate Add Todos action object', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  })

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  })

  it('should generate update Todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 'Todo things',
      updates: {completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  })

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done)=> {
      var todosRef = firebaseRef.child('todos');
      // wipe all the data first so it will be clean
      todosRef.remove().then(() => {
        // now you can add data
        testTodoRef = firebaseRef.child('todos').push();
        return testTodoRef.set({
          text: 'fuck',
          completed: false,
          createdAt: 23453
        })
        // if goes well call done
      }).then(() => done())
      // if not then catch and done
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true)
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist;
        done();
      }, done)

    });
    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        // check if the type which you can get from mockActions is equal to add Todos
        expect(mockActions[0].type).toEqual('ADD_TODOS')
        // check if the length of todos is equal to 1
        expect(mockActions[0].todos.length).toEqual(1);
        //check if the first todos text is equal to fuck
        expect(mockActions[0].todos[0].text).toEqual('fuck');
        done();
      }, done)

    })
  })
})
