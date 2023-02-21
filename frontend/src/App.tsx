import { ToDoList } from "./to-do-list/ToDoList";
import {Provider} from 'react-redux'
import { createStore } from "./app-state/Store";


const store = createStore();


const App = () => {

  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;