const { Sequelize, Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
// const user = 'raihan__jewel'
// const host = 'localhost'
// const database = 'college'
// const password = '12523333'
// const port = '5432'
//
// const sequelize = new Sequelize(database, user, password, {
//   host,
//   port,
//   dialect: 'postgres',
//   logging: false,
// })

const  User = sequelize.define("user",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize: sequelize,
      modelName: 'user',
      freezeTableName: true,
    }
  ) // Code here
module.exports = User
