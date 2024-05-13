// import logo from './logo.svg';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div >
      
      <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  
    </div>
  );
}

export default App;
