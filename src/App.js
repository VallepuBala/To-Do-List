import { Provider } from 'react-redux';
import store from './redux/Store';
import TodoList from './Todolist';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;