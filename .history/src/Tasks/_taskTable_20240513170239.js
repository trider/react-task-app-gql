import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './_tasksContext.js';


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalComponent from '../components/Modal';
import tableCols from '../_data/_Cols';

import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';

function AddTask(task) {
  const { loading, error, data } = useMutation(AppRun, {
    variables: {
      api: "tasks",
      command: "addTask",
      payload: {
        name: task.name,
        description: task.description,
        user: task.user,
      }
    }

    
  })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
 
  return  data
}









const TaskTable = (

) => { 

 const dispatch = useContext(TasksDispatchContext);
 const tasks = useContext(TasksContext);

  const onAddTask = (task) => {
  AddTask(task);
   
   dispatch({
    type: 'added',
    task: task,
   });
  }

 const onEditTask = (task) => {



  dispatch({
   type: 'changed',
   task: task,
  });

 }

 const onDeleleTask = (task) => {
  dispatch({
   type: 'deleted',
   task: task,
  });
 }

 return (
  <div >
   <Table striped bordered hover size="lg">
    <thead>
     <tr>
      {tableCols.map((col) => (
       <th key={col}>{col.toUpperCase()}</th>
      ))}
      <th colSpan={"3"}></th>
     </tr>
    </thead>

    <tbody>
     {tasks.map((task) => (
      <tr key={task.id}>
       {tableCols.map((col) => (
        <td key={col}>

         {task[col]}

        </td>

       ))}
       <td>
        <ModalComponent
         title='Edit'
         size='sm'
         color='primary'
         task={task}
         onAddTask={onAddTask}
         onEditTask={onEditTask} />
       </td>
       <td>
        <ModalComponent
         title='Details'
         size='sm'
         color='warning'
         task={task}
         onAddTask={onAddTask}
         onEditTask={onEditTask} />
       </td>


       <td>
        <Button variant="danger rounded-pill" 
          size='sm' 
          onClick={(e) => { onDeleleTask(task)}}
         >
         Delete
        </Button>
       </td>
      </tr>
     ))}



     <tr style={{ height: "40px" }}>

      <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
       <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <ModalComponent
         title='Add'
         task={{
          name: 'New Task',
          description: 'Task Description',
          user: 'jonnygold',
          status: 'do',
          taskId: tasks.length + 1,
          added: new Date().toISOString(),
          updated: new Date().toISOString(),
          isActive: true,
          isEdit: false
         }}
         onAddTask={onAddTask}

          />
       </div>



      </td>
     </tr>
    </tbody>

   </Table>





  </div>
 );
}




export default TaskTable;