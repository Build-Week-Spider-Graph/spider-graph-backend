const superTest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig.js');

const { add, findBy } = require('../users/users-model.js')


const { 
    findGraphs,
    findGraphById,
    addGraph,
    editGraph,
//
    findAreas,
    findAreaById,
    addArea,
    editArea,
//
    findPoints,
    addPoint,
    editPoint 
} = require('./graphs-model')

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('Testing set up', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await superTest(server).post('/api/auth/register').send({firstname: 'sully', lastname: 'sully', username: 'sully', password: 'sully', email: 'sully@mail.com'})
    })
})

describe('GET token', () => {
    var token = null;
    beforeEach(async () => {
         superTest(server).post('/api/auth/login').send({username: "sully", password: "sully"})
         .end(function (err, res){
              token = res.body.token;
         })
    })
    it('should get a valid token', function(){
         superTest(server).get('/api/graphs')
         .set('Authorization', 'Bearer ' + token)
         .expect(200)
    })
    it('should post', async function(){
        newGraph = ({title: 'testGraph'});
        superTest(server).post('/api/graphs', ({title: 'testGraph', user_id: '100'})).auth({username: 'sully', password: 'sully'}).expect(200);
   })
})