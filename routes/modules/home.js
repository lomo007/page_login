// 引入 express 和 express 路由
const express = require('express')
const router = express.Router()

// 引入 Login資料綱要
const Login = require('../../models/login')


// 首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {

  // 接取表單資料
  console.log(req.body)

  // 判斷資料庫 userEmail 不存在 > 回首頁
  // ******************* 存在> 判斷資料庫 userPassword 不存在 > 回首頁
  // ******************* 存在> 導向 welcome 頁面

  Login.findOne({ email: req.body.userEmail, password: req.body.userPassword }, function (err, userEnterFile) {

    if (userEnterFile === null) {
      const WaningText = "Ooops! Email or Password is wrong, please check and re-try again!"
      return res.render('index', { WaningText: WaningText })
    } else if (userEnterFile !== null) {
      const userName = userEnterFile.firstName
      return res.render('welcome', { userName: userName })
    }

  })
})


module.exports = router