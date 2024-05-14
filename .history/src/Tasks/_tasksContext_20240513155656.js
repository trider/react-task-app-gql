import { createContext, useReducer } from 'react';
import userTasks from '../_data/_Tasks';
import tasksReducer from './_tasksReducer';
import { AppQuery } from '../schema';
import { useQuery } from '@apollo/client';

function GetTasks() {
 const { loading, error, data } = useQuery(AppQuery, {
   query: AppQuery,
     pollInterval: 60000,
     variables: {
       api:"tasks",
       command:"getTasks",
       payload:{ 
           user:"jonnygold"
       }
     }
 });

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return data.appQuery.map(task=>{

   return (
     <div key={task.id} style={{ paddingLeft: '10%' }}>
       <h3>{task.name}</h3>
       {JSON.stringify(task)}
     </div>
   );
 
 }) 

}

export const TasksProvider = ({ children }) => {
 const tasksList = GetTasks();

 const [tasks, dispatch] = useReducer(tasksReducer, userTasks);
 const taskList = GetTasks();

 if(taskList !==null){

  
 }

 return (

  <TasksContext.Provider value={tasks}>
   <TasksDispatchContext.Provider value={dispatch}>
    {children}
   </TasksDispatchContext.Provider>
  </TasksContext.Provider>
 );

};
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
