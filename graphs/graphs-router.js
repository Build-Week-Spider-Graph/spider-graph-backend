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
        Graphs.findAreas(graphId, username)
        .then(areas => {
            graph[0].areas = areas;
            Graphs.findLines(graphId, username)
            .then(lines => {
                graph[0].lines = lines
                res.status(200).json(graph)
            })
        })
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

//////////////////
// GET api/graphs/:id/lines
router.get('/:graphId/lines', restricted, (req, res) => {
    const graphId = req.params.graphId
    const username = req.decodedJwt.username
    Graphs
    .findLines(graphId, username)
    .then(lines => {
        res.json(lines)
    })
    .catch(err => res.send(err))
})
// POST api/graphs/:id/lines
router.post('/:graphId/lines', restricted, (req, res) => {
    const username = req.decodedJwt.username
    const newLine = req.body
    const graphId = req.params.graphId
    Graphs
    .addLine(newLine, graphId, username)
    .then(line => {
        res.json(line)
    })
    .catch(err => res.send(err))
})
// GET api/graphs/:id/lines/:id
router.get('/:graphId/lines/:lineId', restricted, (req, res) => {
    const { graphId, lineId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findLineById({ graphId, lineId }, username)
    .then(line => {
            res.json(line)
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
        Graphs.findPointsByAreaId({ graphId, areaId }, username)
            .then(points => {
                areas[0].points = points;
                res.json(areas)
            })
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
router.get('/:graphId/areas/:areaId', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findGraphById(graphId, username)
    .then(graph => {
        Graphs.findAreaById( { graphId, areaId }, username)
        .then(area => {
            graph[0].area = area;
            Graphs.findPointsByAreaId({ graphId, areaId }, username)
            .then(points => {
                area[0].points = points
                res.status(200).json(graph)
            })
        })
    })
    .catch(err => res.send(err))
})
/////////////////
// GET api/graphs/:id/lines/:id/points
router.get('/:graphId/lines/:lineId/points', restricted, (req, res) => {
    const { graphId, lineId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findPoints({ graphId, lineId }, username)
    .then(points => {
        res.json(points)
    })
    .catch(err => res.send(err))
})
// GET api/graphs/:id/areas/:id/points
router.get('/:graphId/areas/:areaId/points', restricted, (req, res) => {
    const { graphId, areaId } = req.params
    const username = req.decodedJwt.username
    Graphs
    .findPointsByAreaId({ graphId, areaId }, username)
    .then(points => {
        res.json(points)
    })
    .catch(err => res.send(err))
})
// POST api/graphs/:id/lines/:id/points
router.post('/:graphId/lines/:lineId/points', restricted, (req, res) => {
    const { graphId, lineId } = req.params
    const username = req.decodedJwt.username
    const point = req.body
    Graphs
    .addPoint(point, { graphId, lineId }, username)
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
router.delete('/:graphId', (req, res) => {
    Graphs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The graph has been deleted' });
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the graph',
      });
    });
  });

module.exports = router;
// Collapse



