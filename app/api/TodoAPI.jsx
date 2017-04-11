module.exports = {
  // setTodos function is for adding/saving the item to the localstorage
  setTodos: function(todos) {
    // this .isArray takes a variable and returns true if an array false if not
    if ($.isArray(todos)) {
      // this is how you locally store an item
      // todos is the key/string and next should be a string
      // so JSON.stringify will convert array to a string
      localStorage.setItem('todos', JSON.stringify(todos));
      // now return the todos array
      // so you can differentiate a failed and a valid one
      // you need to return it so it will not be undefined
      return todos;
    }
  },
  // setTodos function is for getting/call the item from the localstorage
  getTodos: function() {
    // this is how you locally call/get the item from the local storage

    var stringTodos = localStorage.getItem('todos');
    // now make a todos empty array
    var todos = [];
    // The try is for the json parse because it can fail
    try {
      // the JSON.parse is for extracting the array from the string in this case stringTodos
      todos = JSON.parse(stringTodos)
    } catch (e) {
      alert(e)
    }

// now return the .isArray which takes the variable todos and if true return todos
// if not return an empty array
// this os an example of ternary operator
    return $.isArray(todos) ? todos : [];
// this is the same
    // if($.isArray(todos)) {
    //   return todos
    // } else {
    //   return [];
    // }

  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    // Filter by search text
    'something here'.indexOf('here')
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })
    // Sort todos win non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    })
    return filteredTodos;
  }
}
