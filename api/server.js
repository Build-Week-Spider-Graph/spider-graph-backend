const express = require('express');
const configureMiddleware = require('./conf-middleware')

const authRouter = require('../auth/auth-router')
const graphRouter = require('../graphs/graphs-router')

const server = express();

configureMiddleware(server);

server.use('/api/graphs', graphRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;