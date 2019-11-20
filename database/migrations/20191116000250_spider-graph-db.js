
exports.up = function(knex) {
    return knex.schema
    .createTable('users', t => {
        t.increments();
        t.string('username', 255).notNullable().unique();;
        t.string('password', 128).notNullable();
        t.string('firstname', 255).notNullable();
        t.string('lastname', 255).notNullable();
        t.string('email', 255).notNullable().unique();;
    })
    .createTable('graphs', t => {
        t.increments();
        t.string('title', 255).notNullable();
        t
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('lines', t => {
        t.increments();
        t.string('label', 255).notNullable();
        t
        .integer('graph_id')
        .unsigned()
        .references('id')
        .inTable('graphs')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('areas', t => {
        t.increments();
        t.string('title', 255).notNullable();
        t.string('color', 255)
        t
        .integer('graph_id')
        .unsigned()
        .references('id')
        .inTable('graphs')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('points', t => {
        t.increments();
        t.string('label', 255).notNullable();
        t.integer('position');
        t
        .integer('line_id')
        .unsigned()
        .references('id')
        .inTable('lines')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('areas_points', t => {
        t.increments();
        t
        .integer('area_id')
        .unsigned()
        .references('id')
        .inTable('areas')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        t
        .integer('point_id')
        .unsigned()
        .references('id')
        .inTable('points')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('areas_points')
        .dropTableIfExists('users')
        .dropTableIfExists('graphs')
        .dropTableIfExists('lines')
        .dropTableIfExists('areas')
        .dropTableIfExists('points')
};
