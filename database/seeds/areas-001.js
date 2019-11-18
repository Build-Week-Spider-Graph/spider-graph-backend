
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('areas').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {graph_id: 1, title: "This Year", color: "red"},
        {graph_id: 1, title: "Next Year", color: "yellow"},
        {graph_id: 1, title: "Last Year", color: "blue"},
        {graph_id: 2, title: "This Year", color: "red"},
        {graph_id: 2, title: "Next Year", color: "yellow"},
        {graph_id: 2, title: "Last Year", color: "blue"},
        {graph_id: 3, title: "This Year", color: "red"},
        {graph_id: 3, title: "Next Year", color: "yellow"},
        {graph_id: 3, title: "Last Year", color: "blue"}
      ]);
    });
};
