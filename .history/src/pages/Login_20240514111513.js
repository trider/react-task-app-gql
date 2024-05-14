import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


const Login = () => {
  
  const [isLogedIn, setIsLogedIn] = useState(false);

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
  if(data !==null)setIsLogedIn(true);
  if(!isLogedIn){
    return (
  
      <div  style={{ paddingLeft: '10%' }}>
        <button onClick={login}>Login</button>
     
      </div>
    );
  }
  else{
    return <p>{JSON.stringify(data)}</p>
  }



    

}

export default Login;