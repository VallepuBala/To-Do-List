const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    text
});

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    id,
    text
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});
