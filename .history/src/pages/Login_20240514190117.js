import { AppRun, GET_USER } from '../schema';
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
  const [email, setEmail] = useState("jonnygold@gmail.com");
  const [password, setPassword] = useState("1234");
  // const [user, setUser] = useState();

  const [login, { data, loading, error }] = useMutation(AppRun, {
    // pollInterval: 60000,
    mutation: AppRun,
    variables: {
      api: "users",
      command: "login",
      payload: {
        email: email,
        password: password
      }
    },
    update: (cache, { data }) => {

      setIsLogedIn(true);

      cache.writeQuery({
        query: GET_USER,
        data: {
          user: data.appRun
        }
      });
    }


  });



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (!isLogedIn) {
    return (
      <div>
        <Container fluid className='container-lg' style={{ marginTop: '100px', width: '40%' }}>
          <Card className='card-sm'>
            <Card.Header className='bg-primary text-light text-center' >
              <h2>Login</h2>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => {
                e.preventDefault();
                login();
        
              }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}


                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" >Submit</Button>
                </div>
              </Form>



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


      </div>
    );
  }





}

export default Login;