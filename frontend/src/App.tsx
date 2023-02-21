import { ToDoList } from "./to-do-list/ToDoList";


export const App = () => {

  const items = [{title: 'Eggs'}, {title:'Cheese'}, {title:'Milk'}]
  return (
    <div >
      <ToDoList items={items}/>
    </div>
  );
}

export default App;