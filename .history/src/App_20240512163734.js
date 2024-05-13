// import logo from './logo.svg';

import './App.css';
import GetLocations from './graphql/main';



function App() {
  return (
    <div >
      
      <h1 style={{textAlign:'center'}}>My First Apollo App</h1>
      <GetLocations />
  
    </div>
  );
}

export default App;
