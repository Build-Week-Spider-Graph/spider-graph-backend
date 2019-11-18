const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findBy,
    findById
};

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findBy(username) {
    return db('users').where(username);
  }

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }