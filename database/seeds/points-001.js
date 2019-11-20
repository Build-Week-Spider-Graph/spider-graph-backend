
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('points').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 1},
        {label: 'Automate', position: 3, line_id: 1},
        {label: 'Sleep', position: 4, line_id: 1},
        {label: 'Work', position: 1, line_id: 2},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 2},
        {label: 'Sleep', position: 4, line_id: 2},
        {label: 'Work', position: 1, line_id: 3},
        {label: 'Play', position: 2, line_id: 3},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 3},
        {label: 'Work', position: 1, line_id: 4},
        {label: 'Play', position: 2, line_id: 4},
        {label: 'Automate', position: 3, line_id: 4},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 5},
        {label: 'Play', position: 2, line_id: 5},
        {label: 'Automate', position: 3, line_id: 5},
        {label: 'Sleep', position: 4, line_id: 5},
        {label: 'Work', position: 1, line_id: 6},
        {label: 'Play', position: 2, line_id: 6},
        {label: 'Automate', position: 3, line_id: 6},
        {label: 'Sleep', position: 4, line_id: 6},
      ]);
    });
};
