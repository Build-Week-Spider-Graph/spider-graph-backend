
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('graphs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('graphs').insert([
        {user_id: 1, title: "Marketing"},
        {user_id: 1, title: "Sales"},
        {user_id: 1, title: "Social Media"}
      ]);
    });
};
