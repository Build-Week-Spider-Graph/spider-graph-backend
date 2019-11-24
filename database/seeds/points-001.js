
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('points').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        {label: 'Work', position: 1, line_id: 1},
        {label: 'Play', position: 1, line_id: 2},
        {label: 'Automate', position: 1, line_id: 3},
        {label: 'Sleep', position: 1, line_id: 4},
        {label: 'Internet', position: 2, line_id: 1},
        {label: 'Business', position: 2, line_id: 2},
        {label: 'Services', position: 2, line_id: 3},
        {label: 'Billing', position: 2, line_id: 4},
        {label: 'Tactical', position: 3, line_id: 1},
        {label: 'Outsource', position: 3, line_id: 2},
        {label: 'Develop', position: 3, line_id: 3},
        {label: 'Integrate', position: 3, line_id: 4},
        {label: 'Industry', position: 4, line_id: 1},
        {label: 'Beta', position: 4, line_id: 2},
        {label: 'Application', position: 4, line_id: 3},
        {label: 'Release', position: 4, line_id: 4},
        {label: 'Bonus', position: 5, line_id: 1},
        {label: 'Project', position: 5, line_id: 2},
        {label: 'Condition', position: 5, line_id: 3},
        {label: 'Program', position: 5, line_id: 4},
        {label: 'Retail', position: 6, line_id: 1},
        {label: 'Storage', position: 6, line_id: 2},
        {label: 'Cloud', position: 6, line_id: 3},
        {label: 'Infrastructure', position: 6, line_id: 4},
      ]);
    });
};
