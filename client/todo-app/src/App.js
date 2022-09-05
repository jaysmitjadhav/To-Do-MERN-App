import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add a task to do" />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p>Item 1</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
        <div className="todo-item">
          <p>Item 2</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
        <div className="todo-item">
          <p>Item 3</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
