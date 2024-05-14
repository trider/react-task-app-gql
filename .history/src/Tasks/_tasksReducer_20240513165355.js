import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';




const tasksReducer = (tasks, action) =>{
 switch (action.type) {
   case 'added': {
    const { loading, error, data } = useMutation(AppRun, {
      variables: {
        api: "tasks",
        command: "createTask",
        payload: {
          name: task.name,
          description: task.description,
          user: task.user,
        }
      }
    })
     return [
       ...tasks,
       { ...action.task }

     ];
   }
   case 'changed': {


     return tasks.map((t) => {
      if (t.taskId === action.task.taskId) return action.task
      return t;
     })
   }
   case 'deleted': {
     return tasks.filter((t) => t.taskId !== action.task.taskId);
   }
   default: {
     throw Error('Unknown action: ' + action.type);
   }
 }
}

export default tasksReducer;
