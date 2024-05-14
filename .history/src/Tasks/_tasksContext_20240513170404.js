import { createContext } from 'react';
import { AppQuery } from '../schema';
import { useQuery } from '@apollo/client';

export function GetTasks() {
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

 return [...data.appQuery.map(task=>{

   return task
 
 }) ]

}

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
