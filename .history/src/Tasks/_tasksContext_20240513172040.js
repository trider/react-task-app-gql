import { createContext, useReducer } from 'react';
import userTasks from '../_data/_Tasks';
import tasksReducer from './_tasksReducer';


export const TasksProvider = ({ children }) => {
 let tasksList = userTasks;
  
//  tasksList /= GetTasks();
 let [tasks, dispatch] = useReducer(tasksReducer, tasksList);

  return (
 
    <TasksContext.Provider >
     <TasksDispatchContext.Provider value={dispatch}>
      {children}
     </TasksDispatchContext.Provider>
    </TasksContext.Provider>
   );
 

  


 

};
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
