// import logo from './logo.svg';

import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import { App } from './App.1';

// const uri = 'https://flyby-router-demo.herokuapp.com/';

const uri = 'http://localhost:4021';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }`
  
const AppQuery = gql`
  query appQuery($api:String, $command:String, $payload:JSON){
    appQuery(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;

export function GetTasks() {
  const { loading, error, data } = useQuery(AppQuery, {
    variables: {
      api: 'tasks',
      command: 'get',
      payload: {}
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.appQuery.map(({ id, name, description }) => (

    <div key={id} style={{ padding: '1.5%' }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <br />
    </div>
  ))

}


function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id} style={{ padding: '1.5%' }}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ))
}

export const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});


export default App;
