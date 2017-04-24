var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')

describe('Reducers', () => {
  // just a normal reducer for search text
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'fuck'
      }
      // deep freeze is for pure function because they don't update the argument that is pass in
      // in a pure function you can't add a property on it and deepfreeze will catch it
      // you just pass the function to the deepfreeze
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', () => {
    it('should flipped showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      // this will test the toggle reducer if working
      var res = reducers.showCompletedReducer(df(false), df(action));
      // and check if false become true
      expect(res).toEqual(true);
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () =>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '12345',
          text: 'something fuck',
          completed: false,
          createdAt: 123124
        }
      }
      // this will test the add todo reducer and you pass an empty array
      // and the action object you created
      var res = reducers.todosReducer(df([]), df(action));
      // and check if the length of the it is equal to 1 which is yes because there is only 1 item in the array
      expect(res.length).toEqual(1);
      // and check if the text array you created will be equal to the action.text which is correct
      expect(res[0]).toEqual(action.todo);
    })

    it('should toggle todo', () => {
      // you need to create a array with objects in the todos
      // and make the id the same as the id in action
      var todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]

      // the id of the action must be the same as todos.id
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }

      // test the todosReducer toggle todo and pass the todos and action you just created
      var res = reducers.todosReducer(df(todos), df(action))
      // get the first item in both the todos and action and it will be link thru the id
      // and toggle it which will be true to false
      expect(res[0].completed).toEqual(false);
      // because you set the if false the completedAt value will be undefined
      expect(res[0].completedAt).toEqual(undefined);
    })

  })
    it('should add existing todos', () => {
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

      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
})
