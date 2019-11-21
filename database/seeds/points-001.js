
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('points').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 2, line_id: 2},
        {label: 'Automate', position: 3, line_id: 3},
        {label: 'Sleep', position: 4, line_id: 4},
      ]);
    });
};
