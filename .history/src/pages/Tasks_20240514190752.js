import { AppQuery, GET_USER } from '../schema';
import { useQuery } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import tableCols from '../_data/_Cols';
import ModalComponent from '../components/Modal';

const GetUser = () => {
 try {
  const { data } = useQuery(GET_USER);
  return data.user 
 } catch (error) {
  return JSON.parse(localStorage.getItem('user'));
 }

 // const objectArray = Object.entries(data.user);


 // return (
 //  <Table striped bordered hover size="lg">
 //   <thead>
 //    <tr>
 //     <th>Key</th>
 //     <th>Value</th>
 //    </tr>
 //   </thead>
 //   <tbody>
 //    {objectArray.map(([key, value]) => (
 //     <tr key={key}>
 //      <td>{key}</td>
 //      <td>{JSON.stringify(value)}</td>
 //     </tr>
 //    ))}
 //   </tbody>
 //  </Table>
 // )



 // return <p>{JSON.stringify(data.user)}</p>;
}


const GetTasks = () => {
 const user = GetUser();
 const { loading, error, data } = useQuery(AppQuery, {
  query: AppQuery,
  pollInterval: 60000,
  variables: {
   api: "tasks",
   command: "getTasks",
   payload: {
    user: user.userName
   }
  }
 });


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return (
  <div>
   <NavbarComponent />
   <Container style={{ padding: "2%" }}>
   <Table striped bordered hover size="lg">
    <thead>
     <tr>
      {tableCols.map((col) => (
       <th key={col}>{col.toUpperCase()}</th>
      ))}
      {/* <th colSpan={"2"}></th> */}
     </tr>
    </thead>

    <tbody>
     {data.appQuery.map((task) => (
      <tr key={task.id}>
       {tableCols.map((col) => (
        <td key={col}>

         {task[col]}

        </td>
     

       ))}
      
      </tr>
     ))}

    </tbody>
    <tfoot>
     <tr> 
     <td colSpan={tableCols.length + 2} style={{ backgroundColor: "white" }}>
       <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <ModalComponent
         title='Add'
         task={{
          name: 'New Task',
          description: 'Task Description',
          user: 'jonnygold',
          status: 'do',
          taskId: data.appQuery.length + 1,
          added: new Date().toISOString(),
          updated: new Date().toISOString(),
          isActive: true,
          isEdit: false
         }}
   

          />
       </div>



      </td>







     </tr>

    </tfoot>

   </Table>

   </Container>
   <Footer />
  </div>

 )

}

export default GetTasks;