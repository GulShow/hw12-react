import './App.css';
import Form from './components/Form'
import {useState} from 'react';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);
  const handlerAdd = (e)  => {
    if(task){
      e.preventDefault();
      const newId = tasks.length ? tasks[0].id + 1 : 1;
      const newTask = { 
        id: newId,
        task: task
      }
      setTasks([newTask, ...tasks])
    setTask('')
    }
   
  }
  const onChange = (e) => {
    setTask(e.target.value)
  }
  const handlerRemove = (id) => () => {
    const newTasks = tasks.filter(item => item.id !== id );
    setTasks(newTasks)
  }
  return (
    <Form handlerAdd={handlerAdd} task={task} tasks={tasks} handlerRemove={handlerRemove} onChange={onChange}/>
  );
}

export default App;
