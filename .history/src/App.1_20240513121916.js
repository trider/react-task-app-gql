import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client, GetTasks } from './App';

export function App() {
  return (
    <ApolloProvider client={client}>
      <h1 style={{ textAlign: 'center' }}>My First Apollo App</h1>
      <GetTasks />
      {/* <DisplayLocations /> */}
    </ApolloProvider>
  );
}
