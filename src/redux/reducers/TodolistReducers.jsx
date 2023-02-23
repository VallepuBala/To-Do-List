
const initialState = {
    todos: []
  };
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.text,
              completed: false
            }
          ]
        };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.id) {
              return {
                ...todo,
                text: action.text
              };
            }
            return todo;
          })
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id)
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        };
      default:
        return state;
    }
  }
  