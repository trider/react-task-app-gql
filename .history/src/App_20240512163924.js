// import logo from './logo.svg';


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


function App() {
  return (
    <div >
      
      <h1 style={{textAlign:'center'}}>My First Apollo App</h1>
      <DisplayLocations />
  
    </div>
  );
}

export default App;
