import { useState } from 'react';
import TaskList from './components/taskList';
import TaskInput from './components/taskInput';
import './App.css';

function App() {
  const [list, setList] = useState([
    {
      description: "Go to the doctor",
      done: false
    }
  ])

  return (
    <div className="container">
      <TaskInput list={list} setList={setList} />
      <TaskList list={list} setList={setList} />
    </div>
  );
}

export default App;
