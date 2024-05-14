// import logo from './logo.svg';

import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

// const uri = 'https://flyby-router-demo.herokuapp.com/';

const uri = 'http://localhost:4021';

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }`
  
const AppQuery = gql`
  query appQuery($api:String, $command:String, $payload:JSON){
    appQuery(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;

function GetTasks() {
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

  // return <p>{  JSON.stringify(data) }</p>

  return data.appQuery.map(task=>{

    return (
      <div key={task.id} style={{ padding: '1%' }}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
    );
  
  }) 

}




const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <h1 style={{ textAlign: 'center' }}>My First Apollo App</h1>
      <GetTasks />
    </ApolloProvider>
  );
}

export default App;
