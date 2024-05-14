import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';


const Login = () => {
  const { loading, error, data } = useQuery(AppQuery, {
    query: AppQuery,
      pollInterval: 60000,
      variables: {
        api:"users",
        command:"login",
        payload:{ 
          email:"jonnygold@gmail.com",
          password:"1234"
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

export default Login;