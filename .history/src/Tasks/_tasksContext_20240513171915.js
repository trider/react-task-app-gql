import { createContext, useReducer } from 'react';
import userTasks from '../_data/_Tasks';
import tasksReducer from './_tasksReducer';


export const TasksProvider = ({ children }) => {
  
//  tasksList = GetTasks();
 let [tasks, dispatch] = useReducer(tasksReducer, userTasks);

  return (
 
    <TasksContext.Provider>
     <TasksDispatchContext.Provider value={dispatch}>
      {children}
     </TasksDispatchContext.Provider>
    </TasksContext.Provider>
   );
 

  


 

};
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
