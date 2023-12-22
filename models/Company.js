const Sequelize = require("sequelize");
const sequelize = require("../connections/database");

const Company = sequelize.define("company", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pros: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cons: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Company;