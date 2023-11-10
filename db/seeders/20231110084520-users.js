"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          user_name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Lida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Sida",
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
