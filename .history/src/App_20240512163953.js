// import logo from './logo.svg';

import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div >
      
      <h1 style={{textAlign:'center'}}>My First Apollo App</h1>
     
  
    </div>
  );
}

export default App;
