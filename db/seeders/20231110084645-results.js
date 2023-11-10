"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Results",
      [
        {
          user_ID: 1,
          time: 3,
          enemy_kills: 12,
          score_result: 322,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_ID: 2,
          time: 6,
          enemy_kills: 44,
          score_result: 555,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_ID: 1,
          time: 8,
          enemy_kills: 56,
          score_result: 984,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_ID: 2,
          time: 4,
          enemy_kills: 44,
          score_result: 555,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_ID: 3,
          time: 10,
          enemy_kills: 25,
          score_result: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_ID: 3,
          time: 5,
          enemy_kills: 35,
          score_result: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
