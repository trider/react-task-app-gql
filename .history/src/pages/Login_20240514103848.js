import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';


const Login = () => {
  const { loading, error, data } = useMutation(AppRun, {
    query: AppRun,
      // pollInterval: 60000,
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

 return (
    <div>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );

    

}

export default Login;