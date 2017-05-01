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

  describe('filterTodos', () => {
    // create a todos variable so you can set the array and its objects
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
      // then use the todos you created
      // the TodoAPI.filterTodos to set the todos to be todos and the showcompleted to be true and text equals to blank
      var filteredTodos =TodoAPI.filterTodos(todos, true, '');
      // because the show completed is set to true it will show all the items in todo which is 3
      expect(filteredTodos.length).toBe(3)
    });
    it('should return items that are not complete', () => {
      // just like in the above test but instead of true its false
      var filteredTodos =TodoAPI.filterTodos(todos, false, '');
      // because the showcomplete is set to false only get the item that completed is false
      expect(filteredTodos.length).toBe(1)
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // because it is true it will show all completed but it will only get the status of the first item in the array
      // because it will be sorted out the first item should be the id 2 which is false
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter by searchText', () => {
      // this will search all items and get the text that has fuck on it
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'fuck');
      // because there is 1 the test will be completed
      expect(filteredTodos.length).toBe(1);
    })

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // because it is empty it will just display all
      expect(filteredTodos.length).toBe(3);
    })
  })
})
