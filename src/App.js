import {useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateTaskForm from './components/UpdateTaskForm';
import ToDoTask from './components/ToDoTask';

import './App.css';



function App() {
  //To do List task state
const [toDo,setToDo]=useState([
  {"id":1,"title":"Task 1","status":false},
  {"id":2,"title":"Task 2","status":false},
]);

//Temp state
const [newTask,setNewTask]=useState('');
const [updateData,setUpdateData]=useState('');

//Add Task
const addTask = () =>
{
  if(newTask){
    let num=toDo.length+1;
    let newEntry={id:num,title:newTask,status:false};
    setToDo([...toDo,newEntry]);
    setNewTask('');
  }
}

//Delete Task
const deleteTask = (id) =>
{
  let newTasks=toDo.filter(task => task.id!==id);
  setToDo([...newTasks]);
}

//Mark task as completed
const markDone = (id) =>
{
  let newTask=toDo.map(task =>{
    if(task.id===id){
      return ({...task,status:!task.status});
    }
    return task;
  })
  setToDo(newTask);
}

//Cancel update
const cancelUpdate = () =>
{
  setUpdateData('');
}

//Change task for update
const changeTask = (e) =>
{
  let newEntry={
    id:updateData.id,
    title:e.target.value,
    status:updateData.status
  }
  setUpdateData(newEntry);
}

//Update task
const updateTask = () =>
{
  let filterrecords=[...toDo].filter(x=>x.id!==updateData.id);
  setToDo([...filterrecords,updateData]);
  setUpdateData('');
}

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App (ReactJs)</h2>
      <br></br>

      {/*Update task form */}

      { updateData && updateData?(
          <UpdateTaskForm 
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          />
        ):
        (          
          <AddTaskForm
           newTask={newTask}
           setNewTask={setNewTask}
           addTask={addTask} />
        )      
      } 

      {toDo && toDo.length?'':'No Task...'}
      
      <ToDoTask
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      />  

    </div>
  );
}

export default App;
