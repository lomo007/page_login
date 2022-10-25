
// 引入 express 和 express 路由
const express = require('express')
const router = express.Router()
// 引入 home 路由
const home = require('./modules/home')


// 跟目錄導向 home路由
router.use('/', home)


module.exports = router
