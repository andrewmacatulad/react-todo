export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

// toggleTodo(id) TOGGLE_TODO
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
