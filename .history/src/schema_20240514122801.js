import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean

  }

  # extend type Launch {
  #   isInCart: Boolean!
  # }

  # extend type Mutation {
  #   addOrRemoveFromCart(id: ID!): [Launch]
  # }
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