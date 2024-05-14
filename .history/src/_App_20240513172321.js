// import logo from './logo.svg';

import './App.css';
import { AppQuery } from './schema';
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







function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My First Apollo App</h1>
      <GetTasks />
    </div>
  );
}

export default App;
