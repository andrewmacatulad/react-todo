module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {
      alert('Fail!')
    }

    return $.isArray(todos) ? todos : [];
// this is the same
    // if($.isArray(todos)) {
    //   return todos
    // } else {
    //   return [];
    // }

  }
}
