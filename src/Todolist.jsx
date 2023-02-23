import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo, toggleTodo } from './redux/actions/index';

import './Todolist.css';

function TodoList() {
  const todos = useSelector(state => state.todos); 
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const input = e.target.elements.todo;
    const text = input.value.trim();
    if (text) {
      dispatch(addTodo(text));
      input.value = '';
    }
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    const text = editText.trim();
    if (text) {
      dispatch(editTodo(editId, text));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <form onSubmit={handleEditTodo}>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button type="submit">Save</button>
                <button
                  type="button"
                  onClick={() => {
                    setEditId(null);
                    setEditText('');
                  }}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}
                >
                  {todo.text}
                </span>
                <button className='completed' onClick={() => dispatch(toggleTodo(todo.id))}>
                  {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button className='delete' onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
                <button className='edit'
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
