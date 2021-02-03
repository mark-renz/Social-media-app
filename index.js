const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs')
const { MONGODB } = require('./config.js');
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('MONGODB Connected');
  return server.listen({port: 5000});
}).then(res => {
    console.log(`Server running at ${res.url}`)
})