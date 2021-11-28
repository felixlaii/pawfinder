const userData = require('./seed_data/user_data');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(userData);
    });
};