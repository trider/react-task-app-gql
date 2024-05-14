import { AppRun } from '../schema';
import { useMutation, ObservableQuery,shouldRefetchQuery } from '@apollo/client';
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
      update(cache, result) {
        // Update the cache as an approximation of server-side mutation effects
      },
      onQueryUpdated(observableQuery) {
        // Define any custom logic for determining whether to refetch
        if (shouldRefetchQuery(observableQuery)) {
          return observableQuery.refetch();
        }
      },
      
      
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // setIsLogedIn (true);
 
 return (
    <div  style={{ paddingLeft: '10%' }}>
      <button onClick={login}>Login</button>
      {!loading && <p>{JSON.stringify(data.appRun)}</p>}
      
    </div>
  );

    

}

export default Login;