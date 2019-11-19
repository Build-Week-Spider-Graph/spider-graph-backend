const router = require('express').Router();
const Graphs = require('./graphs-model')
const restricted = require('../auth/restricted-middleware.js')
// GET api/graphs/
router.get('/', restricted, (req, res) => {
    const username = req.decodedJwt.username
    Graphs
    .findGraphs(username)
    .then(graphs => {
        res.json(graphs)
    })
    .catch(err => res.send(err))
})
// GET api/graphs/:id
router.get('/:graphId', restricted, (req, res) => {
    const { graphId } = req.params;
    const username = req.decodedJwt.username
    Graphs
    .findGraphById(graphId)
    .then(graph => {
        // Graphs.findAreas(graphId, username)
        // .then(areas => {
        //     graph[0].areas = areas;
        //     res.status(200).json(graph)
        // })
        res.json(graph);

    })
    .catch(err => res.send(err))
})
// POST api/graphs/
router.post('/', restricted, (req, res) => {
    const username = req.decodedJwt.username
    const newGraph = req.body
    Graphs
    .addGraph(newGraph, username)
    .then(graph => {
        res.json(graph)
    })
    .catch(err => res.send(err))
})
// PUT api/graphs/:id
router.put('/:graphId', restricted, (req, res) => {
    const graphId = req.params.graphId
    const username = req.decodedJwt.username
    Graphs
    .editGraph(graph, graphId, username)
    .then(graph => {
        res.json(graph)
    })
    .catch(err => res.send(err))
})
/////////////////
// GET api/graphs/:id/areas
router.get('/:graphId/areas', restricted, (req, res) => {
    const graphId = req.params.graphId
    const username = req.decodedJwt.username
    Graphs
    .findAreas(graphId, username)
    .then(graphs => {
        res.json(graphs)
    })
    .catch(err => res.send(err))
})
// GET api/graphs/:id/areas/:id
router.get('/:graphId/areas/:areaId', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findAreaById({ graphId, areaId }, username)
    .then(areas => {
        Graphs.findPoints({ graphId, areaId }, username)
            // .then(points => {
            //     areas[0].points = points;
            //     res.json(areas)
            // })
    })
    .catch(err => res.send(err))
})
// POST api/graphs/:id/areas/
router.post('/:graphId/areas/', restricted, (req, res) => {
    const graphId = req.params.graphId
    const username = req.decodedJwt.username
    const area = req.body
    Graphs
    .addArea(area, graphId, username)
    .then(area => {
        res.json(area)
    })
    .catch(err => res.send(err))
})
// PUT api/graphs/:id/areas/:id
router.put('/:graphId/areas/:areaId', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .editArea(area, { graphId, areaId }, username)
    .then(area => {
        res.json(area)
    })
    .catch(err => res.send(err))
})
/////////////////
// GET api/graphs/:id/areas/:id/points
router.get('/:graphId/areas/:areaId/points', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findPoints({ graphId, areaId }, username)
    .then(point => {
        res.json(point)
    })
    .catch(err => res.send(err))
})
// POST api/graphs/:id/areas/:id/points
router.post('/:graphId/areas/:areaId/points', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    const point = req.body
    Graphs
    .addPoint(point, { graphId, areaId }, username)
    .then(point => {
        res.json(point)
    })
    .catch(err => res.send(err))
})
// PUT api/graphs/:id/areas/:id/points/:id
router.put('/:graphId/areas/:areaId/points/:pointId', restricted, (req, res) => {
    const { graphId, areaId, pointId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .editPoint(point, { graphId, areaId, pointId }, username)
    .then(point => {
        res.json(point)
    })
    .catch(err => res.send(err))
})
module.exports = router;
// Collapse



