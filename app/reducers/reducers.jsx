var uuid = require('node-uuid');
var moment = require('moment');



export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }

    case 'LOGOUT':
      return  {};

    default:
      return state;
  }
}

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
          ...state,
          action.todo
        ];

        // add case for TOGGLE_TODO complete equal to opposite value & updateCompletedAt
      case 'UPDATE_TODO':
      // this is like the handleToggle function in the TodoApp.jsx
      // the map will call your callback once every items in your array
      // so it will call every item in todo
        return state.map((todo) => {
          // now check if todo.id will be equal to the action.id
          if(todo.id === action.id) {
            return {
              // just return the spread todo
              ...todo,
              // and return spread action.updates
              // when you use multiple spread the new one will overwrite the old one
              // and add if there is new and retain the old if there isn't value in the new one
              ...action.updates
            }
          } else {
            // return todo if id is not match
            return todo;
          }
        })
        case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
        case 'LOGOUT':
        return [];
    default:
      return state;
  }
}
