var uuid = require('node-uuid');
var moment = require('moment');

// for Search Text Reducer
// just make the default state to blank
export var searchTextReducer = (state ='', action) => {
  // then create a switch statement for reducers
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
    // just return the action.searchText that you will get
      return action.searchText;
    default:
      return state;
  }
}

// same as the search text reducer but the default state is false
// this is for toggle the status of the showCompleted
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
    // so you will return the opposite of the state every toggle
      return !state;
    default:
      return state;
  }
}

// this tosoReducer is for adding todo and toggling todo
// the default state will be an array
export var todosReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_TODO':
      // return an array
        return [
          // this state is for adding all the values before
          ...state,
          {
            // now set the properties and its values
            // this is like in the todoApp
            id: uuid(),
            // this is the only difference because this will get the action.text instead of a text in todo etc
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ];

        // add case for TOGGLE_TODO complete equal to opposite value & updateCompletedAt
      case 'TOGGLE_TODO':
      // this is like the handleToggle function in the TodoApp.jsx
      // the map will call your callback once every items in your array
      // so it will call every item in todo
        return state.map((todo) => {
          // now check if todo.id will be equal to the action.id
          if(todo.id === action.id) {
            // this will just make a variable for the value opposite of the todo.completed
            var nextCompleted = !todo.completed;

            // now return an object
            return {
              // this will get all the properties as a todo
              ...todo,
              // but this have different values which is completed will be equal to the reverse todo.completed
              completed: nextCompleted,
              // this is still like in the handletoggle which will get the time if true and undefined if false
              completedAt: nextCompleted ? moment().unix() : undefined
            }
          } else {
            // return todo if id is not match
            return todo;
          }
        })
    default:
      return state;
  }
}
