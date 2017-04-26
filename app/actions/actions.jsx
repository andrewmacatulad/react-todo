import moment from 'moment'

import firebase, {firebaseRef} from 'app/firebase/index';


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

// instead of text you replace it with todo so it can link with the changes in the reducer
export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export var startAddTodo = (text) => {
  // instead of returning an object right away it will return a function first
  // the first argument dispatch will let you dispatch actions after data has been saved
  // getState is to get the currentState of the redux store
  return (dispatch, getState) => {
    // now create a todo variable that will be equal to the object you created in the reducer before
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      // instead of undefined you use null because you will use it in firebase
      completedAt: null
    };
    // now add the todo to the todos you created child
    var todoRef = firebaseRef.child('todos').push(todo);

    // the then to sync with the firebase
    return todoRef.then(() => {
      // now you can now dispatch just call the addtodo function which now pass the todo
      dispatch(addTodo({
        // grab all the property with this
        ...todo,
        // now set the id which is equal to the key
        id: todoRef.key
      }));
    })
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

// toggleTodo(id) TOGGLE_TODO
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export var startToggleTodo = (id, completed) => {
  return(dispatch, getState) => {
    //  var todoRef = firebaseRef.child('todos/' + id);
   // same as above but on es6
   var todoRef = firebaseRef.child(`todos/${id}`);
   // this object set the completed as completed and completedAt to be the time or null
   var updates = {
     completed,
     completedAt: completed ? moment().unix() : null
   }
   // return the todoref update and it takes an object just pass in the created object above
   // then use a promise
   return todoRef.update(updates).then(() => {
     // just dispatch an action updateTodo which you created above
     dispatch(updateTodo(id, updates));
   });

  };
}
