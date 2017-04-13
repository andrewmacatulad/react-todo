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
  // set filterTodos function and have 3 parameters to be use
  filterTodos: function(todos, showCompleted, searchText) {
    // make a variable equal to the todos parameter
    var filteredTodos = todos;

    // Filter by show completed
    // the filter return a new array
    // use the filteredTodos variable you created then use the filter method
    // it takes a 1 argument which is function so use an arrow function with todo as a parameter
    filteredTodos = filteredTodos.filter((todo) => {
      // then return if todo.completed equal to false then you will show only items that are not completed
      // then when the item is click return the showCompleted which returns all the items
      return !todo.completed || showCompleted;
    })

    // Filter by search text
    // use the filter
    filteredTodos = filteredTodos.filter((todo) => {
      // now create a variable that will get the text which have the todo.text and make it lowercase
      // you are making it lowercase so it will include text that are capitalize
      var text = todo.text.toLowerCase();
      // first check if searchtext is not empty then you will return all the items
      // or the text will use the indexOf which will search text inside the searchText
      // so all the text that have in any todo will display
      // to know if the searchtext is found indexOf will return -1 if it wasn't found
      // if found it will be greater than -1
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })
    // Sort todos win non-completed first
    // use the sort method it does not return a new array it modifies the existing one
    // it takes 1 argument which is a function so use arrow function
    // the function pass 2 items/parameters

    filteredTodos.sort((a, b) => {
      // if a is not completed and b is completed then return -1
      if(!a.completed && b.completed){
        // if you return -1 the sort will know that a will come before b
        return -1;
        // if a is completed and b is not completed then return 1
      } else if (a.completed && !b.completed){
        // if you return 1 the sort will know that b will come before a
        return 1;
      } else {
        // if you return 0 no change will happen
        return 0;
      }
    })
    // then return the filteredTodos function
    return filteredTodos;
  }
}
