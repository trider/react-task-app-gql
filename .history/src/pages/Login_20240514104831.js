import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';


const Login = () => {
  

  const [login,{ loading, error } ] = useMutation(AppRun, {
      // pollInterval: 60000,
      mutation:AppRun,
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
      <h3>{login}</h3>
    </div>
  );

    

}

export default Login;