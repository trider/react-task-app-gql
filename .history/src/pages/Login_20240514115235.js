import { AppRun } from '../schema';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


const Login = () => {
  
  const [isLogedIn, setIsLogedIn] = useState(false);

  const [login,{ data, loading, error, reset} ] = useMutation(AppRun, {
      // pollInterval: 60000,
      mutation:AppRun,
      variables: {
        api:"users",
        command:"login",
        payload:{ 
          email:"jonnygold@gmail.com",
          password:"1234"
        }
      },
      update: (cache, { data }) => {

        setIsLogedIn(true);

        // cache.writeQuery({
        //   query: App,
        //   data: {
        //     appRun: data.appRun
        //   }
        // });
      }
      
      
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // setIsLogedIn (true);
  if (!isLogedIn) {
    <div  style={{ paddingLeft: '10%' }}>
      <button onClick={login}>Login</button>
      <p>{JSON.stringify(data)}</p>
      
    </div>
  }
  else {
    return (
      <div  style={{ paddingLeft: '10%' }}>
        <button onClick={login}>Login</button>
        <p>{JSON.stringify(data)}</p>
        
      </div>
    );
  }
 


    

}

export default Login;