const db = require('../database/dbConfig.js')
module.exports = {
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
};
// Graphs
function findGraphs(username) {
    return db('graphs as g')
    // .join('users as u', 'u.id', 'g.user_id')
    // .select('g.*', 'u.username', 'g.id')
    // .where({ 'u.username': username })
}
function findGraphById(graphId, username) {
    // return db('graphs as g')
    // .join('users as u', 'u.id', 'g.user_id')
    // .select('g.*', 'u.username', 'g.id')
    // .where({ 'u.username': username })
    // .where({ 'g.id': graphId })
    return db('graphs')
    .where({ "graphs.id": graphId })
    .first();
}
async function addGraph(graph, username) {
    const {area, points, ...newGraph} = graph
    const [id] = await db('graphs')
    .insert({
        ...newGraph,
        user_id: db
            .select('id')
            .from('users')
            .where({ username })
    })
    const [areaId] = await db('areas')
    .insert({
        ...area,
        graph_id: id
    })
    console.log(points)
    points.map(async e => {
    await db('points')
    .insert({
        ...e,
        area_id: areaId
        })
    })
    return findGraphById(id);
}
function editGraph(graph, id) {
}
// Areas
async function findAreas(graphId, username) {
    async function verify() {
        const results = await db('graphs as g')
        .join('users as u', 'u.id', 'g.user_id')
        .select('g.*', 'u.id', 'g.id')
        .where({ 'u.username': username })
        .where({ 'g.id': graphId })
        if(!results.length){
            return "This graph or area does not belong to the logged user"
        } else {
            return db('areas as a')
            .join('graphs as g', 'g.id', 'a.graph_id')
            .join('users as u', 'u.id', 'g.user_id')
            .select('a.*', 'g.title', 'a.id')
            .where({ 'u.username': username })
            .where({ 'g.id': graphId })
        }
    }
        return await verify()
}
async function findAreaById( { graphId, areaId }, username) {
    async function verify() {
        const results = await db('areas as a')
        .join('graphs as g', 'g.id', 'a.graph_id')
        .join('users as u', 'u.id', 'g.user_id')
        .select('a.*', 'g.title', 'a.id')
        .where({ 'u.username': username })
        .where({ 'a.id': areaId })
        if(!results.length){
            return "This graph or area do not belong to the logged user"
        } else {
            return db('areas as a')
            .join('graphs as g', 'g.id', 'a.graph_id')
            .join('users as u', 'u.id', 'g.user_id')
            .select('a.*', 'g.title', 'a.id')
            .where({ 'u.username': username })
            .where({ 'a.id': areaId })
            .where({ 'g.id': graphId })
        }
    }
        return await verify()
}
async function addArea(area, graphId, username) {
    async function verify() {
    const results = await db('graphs as g')
    .join('users as u', 'u.id', 'g.user_id')
    .select('g.*', 'u.id', 'g.id')
    .where({ 'u.username': username })
    .where({ 'g.id': graphId })
    if(!results.length){
        return "This graph does not belong to the logged user"
    } else {
        const [id] = await db('areas')
        .insert({
            ...area,
            graph_id: graphId
        })
        return findAreaById(id);
        }
    }
    return await verify()
}
function editArea(area, id) {
}
// Points
async function findPoints({ graphId, areaId }, username) {
    async function verify() {
        const results = await db('areas as a')
        .join('graphs as g', 'g.id', 'a.graph_id')
        .join('users as u', 'u.id', 'g.user_id')
        .select('a.*', 'u.username', 'g.id', 'a.id')
        .where({ 'u.username': username })
        .where({ 'g.id': graphId })
        .where({ 'a.id': areaId })
        if(!results.length){
            return "This graph or area does not belong to the logged user"
        } else {
            return db('points as p')
            .join('areas as a', 'a.id', 'p.area_id')
            .join('graphs as g', 'g.id', 'a.graph_id')
            .select('p.*')
            .where({ 'g.id': graphId })
            .where({ 'a.id': areaId })
        }
    }
        return await verify()
}
async function addPoint(point, { graphId, areaId }, username) {
    async function verify() {
     const results = await db('areas as a')
    .join('graphs as g', 'g.id', 'a.graph_id')
    .join('users as u', 'u.id', 'g.user_id')
    .select('a.*', 'u.username', 'g.id', 'a.id')
    .where({ 'u.username': username })
    .where({ 'g.id': graphId })
    .where({ 'a.id': areaId })
    if(!results.length){
        return "This graph and/or area does not belong to the logged user"
    } else {
        await db('points')
        .insert({
            ...point,
            area_id: areaId
        })
        // return findPointById(id);
        return "Successfully added point! This endpoint will return the point's information when I finish findPointById()"
        }
    }
    return await verify()
}
function editPoint(point) {
}
// Collapse




