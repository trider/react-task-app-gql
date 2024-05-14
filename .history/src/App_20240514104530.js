import React from 'react';
import GetTasks from './pages/Tasks';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My First Apollo App</h1>
      <Login />
      {/* <GetTasks /> */}
    </div>
  );
}

export default App;
