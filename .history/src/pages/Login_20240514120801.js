import { AppQuery, AppRun } from '../schema';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import GetTasks from './Tasks';


const Login = () => {

  const [isLogedIn, setIsLogedIn] = useState(false);

  const [login, { data, loading, error }] = useMutation(AppRun, {
    mutation: AppRun,
    variables: {
      api: "users",
      command: "login",
      payload: {
        email: "jonnygold@gmail.com",
        password: "1234"
      }
    },
    update: (cache, { data: {user}  }) => {

      setIsLogedIn(true);

      cache.writeQuery({
        query: AppQuery,
        data: {
          appRun: data.appRun
        }
      });
    }


  });

  const logout = () => {
    setIsLogedIn(false);
  }

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
        <p style={{ paddingLeft: '10%' }}>{JSON.stringify(data.appRun)}</p>
        <div style={{ paddingLeft: '10%' }}>
          <button onClick={logout}>Logout</button>
        </div>
        <h2 style={{ textAlign: 'center' }}>Tasks</h2>
        <GetTasks />
      </div>
    );
  }





}

export default Login;