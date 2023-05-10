import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import flights from '../dataset.json' assert { type: "json" };


const typeDefs = `#graphql

  type Flight{
        date: String!
        origin: String!
        destination: String!
        price: Float!
        availability: Int!
    }


  type Query {
    allFlights: [Flight]!
  }
`;


const resolvers = {
    Query: {
        allFlights: () => flights,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);