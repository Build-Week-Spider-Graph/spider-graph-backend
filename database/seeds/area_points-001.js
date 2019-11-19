
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('areas_points').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('areas_points').insert([
        {area_id: 1, point_id: 1},
        {area_id: 1, point_id: 2},
        {area_id: 1, point_id: 3},
        {area_id: 1, point_id: 4},
        {area_id: 2, point_id: 5},
        {area_id: 2, point_id: 6},
        {area_id: 2, point_id: 7},
        {area_id: 2, point_id: 8},
        {area_id: 3, point_id: 9},
        {area_id: 3, point_id: 10},
        {area_id: 3, point_id: 11},
        {area_id: 3, point_id: 12},
        {area_id: 4, point_id: 13},  
        {area_id: 4, point_id: 14},
        {area_id: 4, point_id: 15},
        {area_id: 4, point_id: 16}, 
      ]);
    });
};
