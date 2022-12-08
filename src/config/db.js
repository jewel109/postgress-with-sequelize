const { Sequelize } = require('sequelize')
const user = 'raihan__jewel'
const host = 'localhost'
const database = 'college'
const password = '12523333'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false,
})

const db = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports =  {db,sequelize} 
