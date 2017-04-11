var expect = require('expect');

var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  // this beforeEach function will run first in every test you run
  beforeEach(() => {
    // so in this case in every test you need to remove the item todos first
      localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      // set the todos to be equal to thte todos variable you just created
      TodoAPI.setTodos(todos);
      // set a variable to be equal to getting the array
      // which you can get with parsing the item stored in todos
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // now check if the actualTodos is equal to the todos variable you created here
      // toEqual is use isntead of toBe when checking an array
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      // create an invalid array
      var badTodos = {a: 'b'};
      // set the todos to be that invalid array
      TodoAPI.setTodos(badTodos);
      // now check if the item you store is to be null because it is not valid
      expect(localStorage.getItem('todos')).toBe(null)
    })
  }),

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      // get the Todos from TodoAPI which is empty
      var actualTodos = TodoAPI.getTodos();
      // then check if it is equal to an empty array
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      // set the todos
      localStorage.setItem('todos', JSON.stringify(todos));
      // then get the todos from the todos you just created
      var actualTodos = TodoAPI.getTodos()
      // then check if the variable actualTodos is equal
      // to the array you just created which is todo
      expect(actualTodos).toEqual(todos)
    })
  });
  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'fuck ka',
      completed: true
    },
    {
      id: 2,
      text: 'you',
      completed: false
    },
    {
      id: 3,
      text: 'ka',
      completed: true
    }]

    it('should return all items if showCompleted is true', () => {
      var filteredTodos =TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3)
    });
    it('should return items that are not complete', () => {
      var filteredTodos =TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1)
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'fuck');

      expect(filteredTodos.length).toBe(1);
    })

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    })
  })
})
