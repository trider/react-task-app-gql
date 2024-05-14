import { AppQuery } from '../schema';
import { useQuery } from '@apollo/client';


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

  return (
   <div style={{ paddingLeft: '10%' }}>
    {
        data.appQuery.map(task=>{

         return (
           <div key={task.id}>
             <h3>{task.name}</h3>
             {JSON.stringify(task)}
           </div>
         );
       
       }) 
    }

   </div>

  )

}

export default GetTasks;