import { createContext, useReducer } from 'react';
import userTasks from '../_data/_Tasks';
import tasksReducer from './_tasksReducer';
import { useQuery } from '@apollo/client';
import { AppQuery } from '../schema.js';


const GetTasks = () => {
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

 return data.appQuery


}

export const TasksProvider = ({ children }) => {
 const userTasks = GetTasks();
 const [tasks, dispatch] = useReducer(tasksReducer, userTasks);

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
