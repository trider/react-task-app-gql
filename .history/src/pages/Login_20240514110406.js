import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';


const Login = () => {
  

  const [login,{ loading, error, data } ] = useMutation(AppRun, {
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
  // alert('Login Success');

 return (
    <div  style={{ paddingLeft: '10%' }}>
      <button onClick={login}>Login</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );

    

}

export default Login;