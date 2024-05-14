import { AppQuery } from '../schema';
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
   
   data.appQuery.map(task=>{

    return (
     <NavbarComponent />
     <Container style={{ padding: "2%" }}>
      

     </Container>
     <Container style={{ paddingTop: '15%' }} >
     <Footer />
    </Container>

    );
  
  }) 
  )

}

export default GetTasks;