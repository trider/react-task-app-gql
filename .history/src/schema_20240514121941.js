import gql from 'graphql-tag';

export const USER = gql`


`

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