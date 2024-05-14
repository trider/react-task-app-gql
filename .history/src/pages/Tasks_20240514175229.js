import { AppQuery, GET_USER } from '../schema';
import { useQuery } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';


const GetTasks = () => {
  const { loading, error, data } = useQuery(AppQuery, {
    query: AppQuery,
      pollInterval: 60000,
      variables: {
        api:"tasks",
        command:"getTasks",
        payload:{ 
            user:"jonnygold"
        }
      }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
   <div>
    <NavbarComponent />
    <Container style={{ padding: "2%" }}>

    {
      data.appQuery.map(task=>{

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