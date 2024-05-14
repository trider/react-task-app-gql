import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/Navigation';
import Footer from '../components/Footer';
import { TasksProvider } from './TasksProvider';
import TaskTable from './_taskTable';

const TaskList = () => {


 return (
  <div>
   <NavbarComponent />
   <Container style={{ padding: "2%" }}>
    <TasksProvider>
      <TaskTable />
    </TasksProvider>
   </Container>
   <Container style={{ paddingTop: '15%' }} >
   <Footer />
  </Container>

  </div>

 );
}

export default TaskList;