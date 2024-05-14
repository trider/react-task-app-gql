// import logo from './logo.svg';

import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

// const uri = 'https://flyby-router-demo.herokuapp.com/';

const uri = 'http://localhost:4021/';

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }`
  
const GET_USERS = gql`
  query getUsers() {

  }}`



function GetTasks() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <p>{JSON.stringify(data)}</p>

}


// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id} style={{ padding: '1.5%' }}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ))
// }

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <h1 style={{ textAlign: 'center' }}>My First Apollo App</h1>
      <GetTasks />
      {/* <DisplayLocations /> */}
    </ApolloProvider>
  );
}

export default App;
