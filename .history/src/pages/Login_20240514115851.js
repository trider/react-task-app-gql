import { AppQuery, AppRun } from '../schema';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import GetTasks from './Tasks';


const Login = () => {

  const [isLogedIn, setIsLogedIn] = useState(false);

  const [login, { data, loading, error }] = useMutation(AppRun, {
    // pollInterval: 60000,
    mutation: AppRun,
    variables: {
      api: "users",
      command: "login",
      payload: {
        email: "jonnygold@gmail.com",
        password: "1234"
      }
    },
    update: (cache, { data }) => {

      setIsLogedIn(true);

      cache.writeQuery({
        query: AppQuery,
        data: {
          appRun: data.appRun
        }
      });
    }


  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // setIsLogedIn (true);
  if (!isLogedIn) {
    return (
      <div style={{ paddingLeft: '10%' }}>
        <button onClick={login}>Login</button>
      </div>
    );
  }
  else {
    return (
      <div>
                  <h2 style={{ textAlign: 'center' }}>User</h2>
        <div style={{ paddingLeft: '10%' }}>
          <p>{JSON.stringify(data.appRun)}</p>
          <h2 style={{ textAlign: 'center' }}>Tasks</h2>
          <GetTasks />
        </div>
      </div>
    );
  }





}

export default Login;