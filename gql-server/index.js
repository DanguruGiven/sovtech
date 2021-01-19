const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch');

const chuckAPI = `https://api.chucknorris.io/jokes/`;
const categoriesAPI = 'https://api.chucknorris.io/jokes';

const typeDefs = gql`

scalar Category {
    value: String
}

type Joke {
    categories: [Category]
    createdAt: String
    icon_url: String
    id: String
    updatedAt: String
    url: String
    value: String
}

  type Query {
      categories: [Category]
      joke(category: String!): Joke
  }
`;

const resolvers = {
    Query: {
        categories: () => fetch(categoriesAPI + "/categories").then((res) => res.json()),
        joke: (root, args, context) => fetch(chuckAPI + "random?category"+ args.category).then((res) => res.json())
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
