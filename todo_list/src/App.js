import TaskList from "./components/taskList"
import './App.css';

const App = () => {
  let list = ['Tarea1', 'Tarea2', 'Tarea3', 'Tarea4'];
  return (
    <div>
      <header>
        <h1>Hello Dojo!</h1>
      </header>
      <main>
        <h2>Things I need to do:</h2>
        <TaskList tasks={list}/>
      </main>
    </div>
  );
}

export default App;
