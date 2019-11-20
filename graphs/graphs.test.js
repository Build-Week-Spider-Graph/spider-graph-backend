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

describe('GET', function() {
    describe('GET endpoints are secure and return a proper response.', function() {
        it('should return 400', function() {
            return superTest(server).get('/api/graphs').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('GET graph by id is secure', function() {
        it('should return 400', function() {
            return superTest(server).get('/api/graphs/1').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs/1').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('GET areas by graph id is secure', function() {
        it('should return 400', function() {
            return superTest(server).get('/api/graphs/1/areas').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs/1/areas').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('GET area by graph id and area id is secure', function() {
        it('should return 400', function() {
            return superTest(server).get('/api/graphs/1/areas/1').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs/1/areas/1').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('GET points by graph id and area id is secure', function() {
        it('should return 400', function() {
            return superTest(server).get('/api/graphs/1/areas/1/points').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs/1/areas/1/points').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
}) 

describe('POST security', function() {
    describe('post to graphs', function() {
        it('should return 400', function() {

            return superTest(server).post('/api/graphs').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).post('/api/graphs').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('post to ', function() {
        it('should return 400', function() {

            return superTest(server).post('/api/graphs/1/lines').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).post('/api/graphs/1/lines').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('post to ', function() {
        it('should return 400', function() {
            return superTest(server).post('/api/graphs/1/areas').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).post('/api/graphs/1/areas').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('post to ', function() {
        it('should return 400', function() {
            return superTest(server).post('/api/graphs/1/lines/1/points').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).post('/api/graphs/1/lines/1/points').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })

}) 