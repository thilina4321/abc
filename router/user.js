const epxress = require('express')
const router = epxress.Router()

const userControl = require('../controller/user')

router.get('/people',
 userControl.getUser)

router.post('/peo',
 userControl.postUser)

 router.patch('/update/:id', 
 userControl.updateUser)

 router.delete('/delete/:id', 
 userControl.deleteOne)

module.exports = router