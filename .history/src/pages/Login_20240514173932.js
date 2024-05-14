import { AppQuery, AppRun } from '../schema';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Navigate } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// import Users from '../_data/_Users';
import Footer from '../components/Footer';


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

  const logout = () => {
    setIsLogedIn(false);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // setIsLogedIn (true);
  if (!isLogedIn) {
    return (
      <div>
      <Container fluid className='container-lg' style={{ marginTop: '100px', width: '40%' }}>
        <Card className='card-sm'>
          <Card.Header className='bg-primary text-light text-center' >
            <h2>Login</h2>
          </Card.Header>
          <Card.Body>
          <div style={{ paddingLeft: '10%' }}>
              <button onClick={login}>Login</button>
          </div>
            

          </Card.Body>
         <Card.Footer>
          <Footer />
         </Card.Footer>
        </Card>

      </Container>
      
    </div>
     
    );
  }
  else {
    return (
      <div>
        <Navigate to="/tasks" replace={true} />
        <h2 style={{ textAlign: 'center' }}>User</h2>
        <p style={{ paddingLeft: '10%' }}>{JSON.stringify(data.appRun)}</p>


      </div>
    );
  }





}

export default Login;