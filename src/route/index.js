const express = require('express')
const User = require('../model/students')

const router = express.Router()

router.get('/user', async (req, res, next) => {
  try {
    await User.findOne({ where: { firstName: 'Jewel' } })
    console.log(User.firstName)
    res.status(200).json({
      firstName,
    })
  } catch (err) {
    console.log(err)
  }
})

router.post('/user', async (req, res, next) => {
  try {
    const firstName = req.body.firstName
    console.log('in route/index ' + firstName)
    ;(async () => {
      await User.sync({ force: true })
      await User.create({ firstName: 'Jewel' })
      console.log(User.firstName)
      res.status(200).json({
        firstName,
      })
      // Code here
    })()
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
