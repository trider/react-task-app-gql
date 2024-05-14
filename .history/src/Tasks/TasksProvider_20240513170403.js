import { useReducer } from 'react';
import userTasks from '../_data/_Tasks';
import tasksReducer from './_tasksReducer';
import { GetTasks, TasksContext, TasksDispatchContext } from './_tasksContext';


export const TasksProvider = ({ children }) => {
  let tasksList = userTasks;
  tasksList = GetTasks();
  const [tasks, dispatch] = useReducer(tasksReducer, tasksList);



  return (

    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );


};
