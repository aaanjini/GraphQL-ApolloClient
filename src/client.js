import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({ 
    uri: "http://0.0.0.0:4000/graphql", //graphql 백엔드 서버 주소
    cache: new InMemoryCache(),
});

export default client;