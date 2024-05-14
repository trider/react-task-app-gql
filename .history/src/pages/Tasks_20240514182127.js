import { AppQuery, GET_USER } from '../schema';
import { useQuery } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';

const GetUser = () => {
 const { user, loading, error } = useQuery(GET_USER);
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;
 const objectArray = Object.entries(user.user);


 return (
  <Table striped bordered hover size="lg">
   <thead>
    <tr>
     <th>Key</th>
     <th>Value</th>
    </tr>
   </thead>
   <tbody>
    {objectArray.map(([key, value]) => (
     <tr key={key}>
      <td>{key}</td>
      <td>{JSON.stringify(value)}</td>
     </tr>
    ))}
   </tbody>
  </Table>
 )



 return <p>{JSON.stringify(data.user)}</p>;
}


const GetTasks = () => {
 const { loading, error, data } = useQuery(AppQuery, {
  query: AppQuery,
  pollInterval: 60000,
  variables: {
   api: "tasks",
   command: "getTasks",
   payload: {
    user: "jonnygold"
   }
  }
 });

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return (
  <div>
   <NavbarComponent />
   <Container style={{ padding: "2%" }}>
    <GetUser />

    {
     data.appQuery.map(task => {

      return (
       <div key={task.id}>
        <h3>{task.name}</h3>
        {JSON.stringify(task)}
       </div>
      );

     })

    }
   </Container>
   <Footer />
  </div>

 )

}

export default GetTasks;