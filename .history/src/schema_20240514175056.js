import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean

  }
`;

export const GET_USER = gql`
  query GET_USER {
    user @client
  }
`;


export const AppQuery = gql`
  query appQuery($api:String, $command:String, $payload:JSON){
    appQuery(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;


export const AppRun = gql`
  mutation appRun($api:String, $command:String, $payload:JSON){
    appRun(
       api:$api
       command:$command
       payload:$payload
    )
  }
`;