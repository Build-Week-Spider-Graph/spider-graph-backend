
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lines').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lines').insert([
        {label: "Onboarding", graph_id: 1},
        {label: "Logistics", graph_id: 1},
        {label: "Engineering", graph_id: 1},
        {label: "Recruting", graph_id: 1},
        {label: "Onboarding", graph_id: 2},
        {label: "Logistics", graph_id: 2},
        {label: "Engineering", graph_id: 2},
        {label: "Recruting", graph_id: 2},
        {label: "Onboarding", graph_id: 3},
        {label: "Logistics", graph_id: 3},
        {label: "Engineering", graph_id: 3},
        {label: "Recruting", graph_id: 3},
        {label: "Onboarding", graph_id: 4},
        {label: "Logistics", graph_id: 4},
        {label: "Engineering", graph_id: 4},
        {label: "Recruting", graph_id: 4}
      ]);
    });
};
