import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
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

function DisplayLocations() {
 const { loading, error, data } = useQuery(GET_LOCATIONS);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return data.locations.map(({ id, name, description, photo }) => (
   <div key={id}>
     <h3>{name}</h3>
     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
     <br />
     <b>About this location:</b>
     <p>{description}</p>
     <br />
   </div>
 ));
}

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

;

export default function App() {
 return (
   <div>
      <ApolloProvider client={client}>
      <h2>My first Apollo app 🚀</h2>
     <br/>
     <DisplayLocations />
   
     </ApolloProvider>,

   </div>
 );
}