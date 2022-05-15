'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'drawings',
      [
        {
          title: 'Build an App.',
          userId: 1,
          url:'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(74)(271).jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {})
  }
}